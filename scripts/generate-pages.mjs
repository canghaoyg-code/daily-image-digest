import { cp, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

const outputDirectory = resolve("_site");
const basePath = "/daily-image-digest";
const origin = "https://canghaoyg-code.github.io";
const catalog = JSON.parse(await readFile("content/catalog.json"));
const routes = ["/", "/archive/", ...catalog.editions.map(id => `/editions/${id}/`)];
// Only generated, ignored build output is replaced.
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(resolve("dist/client"), outputDirectory, { recursive: true });
// Vinext nests generated chunks under basePath, while GitHub Pages already
// mounts _site at that path. Public images are emitted at the client root.
await cp(resolve("dist/client/daily-image-digest/_next"), resolve(outputDirectory, "_next"), {recursive:true});
await rm(resolve(outputDirectory, "daily-image-digest"), {recursive:true, force:true});
const { default: worker } = await import("../dist/server/index.js");
for (const route of routes) {
  const response = await worker.fetch(
    new Request(origin + basePath + route, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (response.status !== 200) throw new Error(`页面生成失败 ${route}: ${response.status}`);
  const html = await response.text();
  if (!html.includes("每日图读") && !html.includes("往期图读")) throw new Error(`页面内容缺失 ${route}`);
  const directory = resolve(outputDirectory, "." + route);
  await mkdir(directory, {recursive:true});
  await writeFile(resolve(directory, "index.html"), html);
}
const commit = process.env.GITHUB_SHA ?? execFileSync("git", ["rev-parse", "HEAD"], {encoding:"utf8"}).trim();
const dirty = !process.env.GITHUB_SHA && !!execFileSync("git", ["status", "--porcelain"], {encoding:"utf8"}).trim();
await writeFile(resolve(outputDirectory, "release.json"), JSON.stringify({commit, dirty, edition:catalog.latest, builtAt:new Date().toISOString(), routes}, null, 2) + "\n");
await writeFile(resolve(outputDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${origin}${basePath}${route}</loc></url>`).join("")}</urlset>`);
await writeFile(resolve(outputDirectory, ".nojekyll"), "");
console.log(`已生成 ${routes.length} 个静态页面（含历史期），资源路径由构建配置统一处理。`);
