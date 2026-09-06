import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { checkFile } from "../lib/content-files.mjs";
import { editionOrder } from "../lib/editorial.mjs";

const args = process.argv.slice(2);
const catalog = JSON.parse(await readFile("content/catalog.json"));
let changed = new Set();
const base = args[args.indexOf("--changed-from") + 1];
if (args.includes("--changed-from")) {
  if (!/^[a-f0-9]{40}$/.test(base)) throw new Error("需要有效的基准提交 SHA");
  changed = new Set(execFileSync("git", ["diff", "--name-only", base, "HEAD", "--", "content"], {encoding:"utf8"}).trim().split("\n"));
}
if (!catalog.editions?.length || new Set(catalog.editions).size !== catalog.editions.length || !catalog.editions.includes(catalog.latest)) throw new Error("期号目录无效");
if (catalog.editions.some(id => editionOrder(id) > editionOrder(catalog.latest))) throw new Error("最新期号不能指向较早期");
let failed = false;
for (const id of catalog.editions) {
  if (!/^\d{4}-\d{2}-\d{2}-(morning|evening)$/.test(id)) throw new Error("不安全的期号 ID");
  const path = `content/editions/${id}.json`;
  // The one immutable legacy import can accompany framework changes, never a new edition.
  const publishing = changed.has(path) && id !== "2026-08-30-evening" || args.includes("--publish") && id === catalog.latest;
  const report = await checkFile(path, {forPublication: publishing});
  if (report.edition.id !== id || !["legacy", "published"].includes(report.edition.status)) report.errors.push("目录只能引用 ID 一致的正式期号");
  console.log(JSON.stringify({id, ...report, edition:undefined}, null, 2));
  if (report.errors.length) failed = true;
}
if (failed) process.exitCode = 1;
