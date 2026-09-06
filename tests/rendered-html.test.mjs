import assert from "node:assert/strict";
import test from "node:test";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
const catalog = JSON.parse(await readFile("content/catalog.json"));
const edition = JSON.parse(await readFile(`content/editions/${catalog.latest}.json`));
const { default: worker } = await import("../dist/server/index.js");
async function render(path) {
  return worker.fetch(new Request("https://canghaoyg-code.github.io/daily-image-digest" + path, {headers:{accept:"text/html"}}),
    {ASSETS:{fetch:async () => new Response("Not found", {status:404})}},
    {waitUntil() {}, passThroughOnException() {}});
}
test("首页条目按编辑顺序，目录锚点、图片和来源完整", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(`data-edition-id="${edition.id}"`));
  let previous = -1;
  for (const item of edition.items) {
    const at = html.indexOf(`<section id="${item.id}"`);
    assert.ok(at > previous);
    assert.ok(html.includes(`href="#${item.id}"`));
    previous = at;
  }
  assert.match(html, /aria-label="阅读工具"/);
  if (edition.status === "legacy") assert.match(html, /历史版/);
  for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) assert.ok(match[1].startsWith("/daily-image-digest/images/"));
});
test("往期与永久页可独立访问，未知期号返回 404", async () => {
  assert.equal((await render("/archive/")).status, 200);
  const response = await render(`/editions/${edition.id}/`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(edition.headline));
  assert.ok(html.includes(`https://canghaoyg-code.github.io/daily-image-digest/editions/${edition.id}/`));
  assert.equal((await render("/editions/2000-01-01-morning/")).status, 404);
});
test("静态产物中每个本地资源与页面链接都存在，路径不重复加前缀", async () => {
  const release = JSON.parse(await readFile("_site/release.json"));
  assert.equal(release.edition, catalog.latest);
  for (const route of release.routes) {
    const html = await readFile(resolve("_site", "." + route, "index.html"), "utf8");
    assert.doesNotMatch(html, /daily-image-digest\/daily-image-digest/);
    for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) {
      assert.ok(url.startsWith("/daily-image-digest/"), url);
      const path = decodeURIComponent(url.slice("/daily-image-digest".length).split(/[?#]/)[0]);
      await access(resolve("_site", "." + path, path.endsWith("/") ? "index.html" : ""));
    }
  }
});
