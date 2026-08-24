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
  assert.match(html, /20260825/);
  assert.doesNotMatch(html, /采集与收录规则/);
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);
  assert.ok((html.match(/<img\b/g) ?? []).length >= 16);
  assert.match(html, /12306 回应定价规则/);
  assert.match(html, /多家门店残留液体检出敌敌畏/);
  assert.match(html, /两千多台人形机器人/);
  assert.match(html, /已故人士金融账户查询服务/);
  assert.match(html, /四川宜宾长宁县发生 4.7 级地震/);
  assert.match(html, /黑神话：钟馗/);
  assert.match(html, /原文看点/);
  assert.match(html, /图片／数据优先/);
  assert.match(html, /12.4 万亿元/);
  assert.match(html, /公共讨论/);
  assert.match(html, /出处说明/);
  assert.match(html, /诺福克郡五百年来/);
  assert.match(html, /发现线索/);
  assert.match(html, /内容来源/);
  assert.match(html, /同题原文/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /观点仅代表原发布者/);
  assert.match(html, /一部电影，七种声音/);
  assert.match(html, /同一热点的代表性观点/);
  assert.match(html, /约 584.6 万观看/);
  assert.match(html, /约 9,624 赞/);
  assert.ok((html.match(/查看这条观点/g) ?? []).length >= 7);
  assert.ok(html.indexOf("围绕《牛来》，七个高热观点") < html.indexOf("12306 回应定价规则"));

  assert.ok(html.indexOf("多家门店残留液体检出敌敌畏") < html.indexOf("两千多台人形机器人"));
  assert.ok(html.indexOf("美加贸易谈判破裂") < html.indexOf("一枚火箭上面级撞上月球"));
  assert.ok(html.indexOf("NASA 拍到了新月坑") < html.indexOf("店主帮扶晕倒老人"));
  assert.ok(html.indexOf("一只鹅在凌晨不断鸣叫") < html.indexOf("只用字母、数字和符号"));
});
