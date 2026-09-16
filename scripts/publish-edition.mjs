import { readFile, writeFile, rename, unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { beijingDate, validateEdition, editionOrder, contentImages } from "../lib/editorial.mjs";
import { validateAssets } from "../lib/content-files.mjs";
import { newsroomReport, productFingerprint, validateAcceptance } from "../lib/newsroom.mjs";

const input = process.argv[2];
if (!input) throw new Error("用法：node scripts/publish-edition.mjs <已编辑的草稿.json>");
const now = new Date().toISOString();
console.log(`执行时刻 ${now}；北京时间日期 ${beijingDate(now)}`);
const edition = JSON.parse(await readFile(input));
if (edition.status !== "draft") throw new Error("只接受 draft；已发布期号不可重写");
edition.status = "published";
const report = validateEdition(edition, {forPublication:true, now});
const assets = await validateAssets(edition, resolve("public"));
report.errors.push(...assets.errors);
const desk = newsroomReport(edition, {now});
report.errors.push(...desk.errors, ...validateAcceptance(edition, await productFingerprint(edition), {now}));
report.errors.push(...validateAcceptance(edition, await productFingerprint(edition, resolve("."), false), {now, archival:true}));
report.warnings.push(...desk.warnings);
if (report.errors.length) throw new Error(report.errors.join("\n"));
const catalog = JSON.parse(await readFile("content/catalog.json"));
const currentId = `${beijingDate(now)}-evening`;
const replacingCurrent = catalog.editions.includes(edition.id) && edition.id === currentId;
if (catalog.editions.includes(edition.id) && !replacingCurrent || editionOrder(edition.id) < editionOrder(catalog.latest) && !replacingCurrent) throw new Error("不得覆盖历史期或回退最新期");
for (const item of edition.items) for (const img of contentImages(item)) Object.assign(img, assets.sizes[img.path]);
const path = `content/editions/${edition.id}.json`;
if (replacingCurrent) {
  const temporaryEdition = `content/.edition-${process.pid}.json`;
  try {
    await writeFile(temporaryEdition, JSON.stringify(edition, null, 2) + "\n", {flag:"wx"});
    await rename(temporaryEdition, path);
  } catch (error) {
    await unlink(temporaryEdition).catch(() => {});
    throw error;
  }
} else await writeFile(path, JSON.stringify(edition, null, 2) + "\n", {flag:"wx"});
const temporary = `content/.catalog-${process.pid}.json`;
try {
  await writeFile(temporary, JSON.stringify({latest:edition.id, editions:[...new Set([...catalog.editions, edition.id])]}, null, 2) + "\n", {flag:"wx"});
  await rename(temporary, "content/catalog.json");
} catch (error) {
  if (!replacingCurrent) await unlink(path);
  await unlink(temporary).catch(() => {});
  throw error;
}
console.log(JSON.stringify({id:edition.id, dates:report.counts, images:assets.counts, warnings:[...report.warnings,...assets.warnings]}, null, 2));
console.log("本地期号已入库；尚未提交或发布到 GitHub。请继续构建、检查和部署验证。");
