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
  assert.match(html, /20260829/);
  assert.doesNotMatch(html, /采集与收录规则/);
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);
  assert.ok((html.match(/<img\b/g) ?? []).length >= 10);
  assert.match(html, /吉隆泥石流已致 7 人遇难、554 人失联/);
  assert.match(html, /暴雨黄色预警继续/);
  assert.match(html, /房地产政策迎来一组新规则/);
  assert.match(html, /数博会把‘词元’放进现场/);
  assert.match(html, /美国法官判定五角大楼将 Anthropic 列为供应链风险违法/);
  assert.match(html, /挪威国王哈拉尔五世去世/);
  assert.match(html, /心脏病的统一定义首次改写/);
  assert.match(html, /木糖醇研究引发新争论/);
  assert.match(html, /日本一年捕杀 1.4 万头熊/);
  assert.match(html, /赵心童即时世界第一/);
  assert.match(html, /道路交通安全法迎来首次系统性大修/);
  assert.match(html, /英国人开始多买豆子/);
  assert.match(html, /原文看点/);
  assert.match(html, /图片／数据优先/);
  assert.match(html, /250—270 毫米/);
  assert.match(html, /公共讨论/);
  assert.match(html, /出处说明/);
  assert.match(html, /日本消防部门提醒/);
  assert.match(html, /发现线索/);
  assert.match(html, /内容来源/);
  assert.match(html, /同题原文/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /观点仅代表原发布者/);
  assert.match(html, /最后一公里仍在泥里/);
  assert.match(html, /同一热点的代表性观点/);
  assert.match(html, /7 人遇难、554 人失联/);
  assert.ok((html.match(/查看出处/g) ?? []).length >= 10);
  assert.ok((html.match(/同题组/g) ?? []).length >= 10);
  assert.match(html, /发布[\s\S]*?8 月 29 日 01:00/);
  assert.ok(html.indexOf("同一场泥石流的五种声音") < html.indexOf("暴雨黄色预警继续"));
  assert.ok(html.indexOf("暴雨黄色预警继续") < html.indexOf("房地产政策迎来一组新规则"));
  assert.ok(html.indexOf("数博会把‘词元’放进现场") < html.indexOf("美国法官判定五角大楼将 Anthropic 列为供应链风险违法"));
  assert.ok(html.indexOf("美国法官判定五角大楼将 Anthropic 列为供应链风险违法") < html.indexOf("挪威国王哈拉尔五世去世"));
  assert.ok(html.indexOf("英国人开始多买豆子") < html.indexOf("日本消防部门提醒"));
});
