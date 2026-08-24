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
  assert.match(html, /今日采集方式/);
  assert.match(html, /微博账号不设固定名单/);
  assert.match(html, /12306 回应定价规则/);
  assert.match(html, /多家门店残留液体检出敌敌畏/);
  assert.match(html, /两千多台人形机器人/);
  assert.match(html, /诺福克郡五百年来/);
  assert.match(html, /发现线索/);
  assert.match(html, /核验来源/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /不替代原始报道/);
});
