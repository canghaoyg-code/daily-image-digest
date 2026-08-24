import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the daily illustrated digest", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>每日图读 · 公开来源的每日图文汇编<\/title>/);
  assert.match(html, /每日图读/);
  assert.match(html, /20260824/);
  assert.match(html, /采集与收录规则/);
  assert.match(html, /热点内容不设条数/);
  assert.match(html, /高质量文章不受热度限制/);
  assert.match(html, /当日焦点/);
  assert.match(html, /今日一图/);
  assert.match(html, /今日观察/);
  assert.match(html, /值得细读/);
  assert.match(html, /库鲁尔泰议会选举/);
  assert.match(html, /专题聚合/);
  assert.match(html, /巴甫洛达尔机场跑道重建/);
  assert.match(html, /博斯坦雷克 20 兆瓦风电场/);
  assert.match(html, /个人观察 · 未作新闻核验/);
  assert.match(html, /推荐理由/);
  assert.match(html, /同题来源/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /不替代原始报道/);
});
