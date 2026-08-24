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
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);
  assert.match(html, /快讯、标准条目、图片条目和深度条目混排/);
  assert.match(html, /不按固定条数或位置切分/);
  assert.match(html, /12306 回应定价规则/);
  assert.match(html, /多家门店残留液体检出敌敌畏/);
  assert.match(html, /两千多台人形机器人/);
  assert.match(html, /已故人士金融账户查询服务/);
  assert.match(html, /四川宜宾长宁县发生 4.7 级地震/);
  assert.match(html, /黑神话：钟馗/);
  assert.match(html, /推荐理由/);
  assert.match(html, /图片／数据优先/);
  assert.match(html, /12.4 万亿元/);
  assert.match(html, /公共讨论 · 仍在核验/);
  assert.match(html, /核验状态/);
  assert.match(html, /诺福克郡五百年来/);
  assert.match(html, /发现线索/);
  assert.match(html, /核验来源/);
  assert.match(html, /同题原文/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /不替代原始报道/);

  assert.ok(html.indexOf("店主帮扶晕倒老人") < html.indexOf("NASA 拍到了新月坑"));
  assert.ok(html.indexOf("一只鹅在凌晨不断鸣叫") < html.indexOf("只用字母、数字和符号"));
});
