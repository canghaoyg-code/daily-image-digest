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
  assert.match(html, /20260827/);
  assert.doesNotMatch(html, /采集与收录规则/);
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);
  assert.ok((html.match(/<img\b/g) ?? []).length >= 10);
  assert.match(html, /吉隆口岸泥石流更新/);
  assert.match(html, /558 人失联/);
  assert.match(html, /台风“沙德尔”向浙闽沿海靠近/);
  assert.match(html, /厦门餐饮消杀敌敌畏事件/);
  assert.match(html, /天骄队机器人跑出 8.64 秒/);
  assert.match(html, /十五五的新工业化清单/);
  assert.match(html, /百度搭子发布 15 个行业套件/);
  assert.match(html, /B 站二季度营收 79.4 亿元/);
  assert.match(html, /英伟达业绩后股价盘前跳涨/);
  assert.match(html, /草间弥生去世/);
  assert.match(html, /原文看点/);
  assert.match(html, /图片／数据优先/);
  assert.match(html, /\+6\.8%/);
  assert.match(html, /公共讨论/);
  assert.match(html, /出处说明/);
  assert.match(html, /无限镜屋为什么能成为自拍时代的公共艺术入口/);
  assert.match(html, /发现线索/);
  assert.match(html, /内容来源/);
  assert.match(html, /同题原文/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /观点仅代表原发布者/);
  assert.match(html, /泥土、云图与一场机器人的 8\.64 秒/);
  assert.match(html, /同一热点的代表性观点/);
  assert.match(html, /3 人遇难、558 人失联/);
  assert.ok((html.match(/查看这条观点/g) ?? []).length >= 12);
  assert.ok(html.indexOf("同一片山谷的五种声音") < html.indexOf("台风“沙德尔”向浙闽沿海靠近"));

  assert.ok(html.indexOf("台风“沙德尔”向浙闽沿海靠近") < html.indexOf("厦门餐饮消杀敌敌畏事件"));
  assert.ok(html.indexOf("英伟达业绩后股价盘前跳涨") < html.indexOf("草间弥生去世"));
  assert.ok(html.indexOf("草间弥生去世") < html.indexOf("无限镜屋为什么能成为自拍时代的公共艺术入口"));
  assert.ok(html.indexOf("无限镜屋为什么能成为自拍时代的公共艺术入口") < html.indexOf("辽宁高墙上的小猫"));
});
