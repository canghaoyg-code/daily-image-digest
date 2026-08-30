import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("_site");
const basePath = process.env.PAGES_BASE_PATH ?? "/daily-image-digest/";

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const { default: worker } = await import("../dist/server/index.js");
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`静态页面生成失败：${response.status}`);

let html = await response.text();
html = html.replaceAll('="/', `="${basePath}`);
await writeFile(resolve(outputDirectory, "index.html"), html);
await cp(resolve("dist/client"), outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, ".nojekyll"), "");

console.log(`GitHub Pages 静态站点已生成：${outputDirectory}`);
