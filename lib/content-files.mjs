import { readFile, realpath } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { createHash } from "node:crypto";
import { itemImages, validateEdition } from "./editorial.mjs";

export const sha256 = data => createHash("sha256").update(data).digest("hex");
// Only this unchanged import is exempt from the new editorial checks.
export const legacyHash = "17afcbf64f51820f8ad7a16fc74d32e68c0b18385bc0cb440c010ca0618c2874";

export function imageSize(data) {
  if (data.length >= 33 && data.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) && data.includes(Buffer.from("IEND"))) {
    return [data.readUInt32BE(16), data.readUInt32BE(20)];
  }
  if (data.length > 10 && /^GIF8[79]a$/.test(data.toString("ascii", 0, 6)) && data.at(-1) === 59) return [data.readUInt16LE(6), data.readUInt16LE(8)];
  if (data[0] === 255 && data[1] === 216 && data.lastIndexOf(Buffer.from([255,217])) > 2) {
    let at = 2;
    while (at + 4 <= data.length) {
      if (data[at] !== 255) break;
      const marker = data[at + 1];
      if (marker === 255) { at++; continue; }
      const length = data.readUInt16BE(at + 2);
      if (length < 2 || at + length + 2 > data.length) break;
      if ([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(marker) && length >= 8) return [data.readUInt16BE(at + 7), data.readUInt16BE(at + 5)];
      at += length + 2;
    }
  }
  if (data.length >= 30 && data.toString("ascii", 0, 4) === "RIFF" && data.toString("ascii", 8, 12) === "WEBP" && data.readUInt32LE(4) + 8 === data.length) {
    const kind = data.toString("ascii", 12, 16);
    if (kind === "VP8X") return [data.readUIntLE(24, 3) + 1, data.readUIntLE(27, 3) + 1];
    if (kind === "VP8 " && data[23] === 157 && data[24] === 1 && data[25] === 42) return [data.readUInt16LE(26) & 16383, data.readUInt16LE(28) & 16383];
    if (kind === "VP8L" && data[20] === 47) return [1 + (data.readUInt32LE(21) & 16383), 1 + ((data.readUInt32LE(21) >> 14) & 16383)];
  }
  throw new Error("图片格式损坏或未支持（接受 JPEG/PNG/GIF/WebP）");
}

export async function validateAssets(edition, publicRoot) {
  const errors = [], warnings = [], hashes = new Map(), sizes = new Map();
  let placements = 0, coveredEntries = 0;
  const root = await realpath(publicRoot);
  for (const item of edition.items ?? []) {
    let novel = false;
    for (const img of itemImages(item)) {
      placements++;
      try {
        if (!/^\/images\/[a-zA-Z0-9/_.-]+$/.test(img.path) || img.path.includes("..")) throw new Error("不安全的图片路径");
        const path = await realpath(resolve(root, "." + img.path));
        if (!path.startsWith(root + sep)) throw new Error("图片越出 public 目录");
        const bytes = await readFile(path), hash = sha256(bytes);
        const [width, height] = imageSize(bytes);
        if (Math.min(width, height) < 160 || width * height < 80000) throw new Error("图片过小，不计为有效新闻图片");
        if (img.width && img.width !== width || img.height && img.height !== height) throw new Error("声明尺寸与文件不符");
        sizes.set(img.path, {width, height});
        if (hashes.has(hash)) warnings.push(`${item.id}：重复图片 ${img.path}（与 ${hashes.get(hash)} 相同，不重复计数）`);
        else { hashes.set(hash, img.path); novel = true; }
      } catch (error) { errors.push(`${item.id} / ${img.path}：${error.message}`); }
    }
    if (novel) coveredEntries++;
  }
  const uniqueImages = hashes.size, coverage = coveredEntries / (edition.items?.length || 1);
  if (uniqueImages < 16 && coverage < 0.7) {
    const message = `有效独立图片 ${uniqueImages} 张，独立配图覆盖 ${Math.round(coverage * 100)}%；未达到 16 张或 70%（数据卡片不计入）`;
    (edition.status === "legacy" ? warnings : errors).push(message);
  }
  return {errors, warnings, counts: {placements, uniqueImages, coveredEntries, coverage}, sizes: Object.fromEntries(sizes)};
}

export async function checkFile(path, options = {}) {
  const bytes = await readFile(path), edition = JSON.parse(bytes);
  const report = validateEdition(edition, options);
  if (edition.status === "legacy" && sha256(bytes) !== legacyHash) report.errors.push("历史豁免仅限原样导入的 2026-08-30 晚间版，禁止改日期或另建 legacy 期号");
  const assets = await validateAssets(edition, resolve("public"));
  report.errors.push(...assets.errors); report.warnings.push(...assets.warnings);
  return {...report, images: assets.counts, edition};
}
