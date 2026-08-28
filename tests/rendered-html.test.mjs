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
  assert.match(html, /20260828/);
  assert.doesNotMatch(html, /采集与收录规则/);
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);
  assert.ok((html.match(/<img\b/g) ?? []).length >= 10);
  assert.match(html, /吉隆救援推进到 800 米/);
  assert.match(html, /558 人失联/);
  assert.match(html, /台风“沙德尔”进入红色预警/);
  assert.match(html, /江西省委副书记、省长叶建春被查/);
  assert.match(html, /集成电路行业同比增长 18.5 倍/);
  assert.match(html, /霍尔木兹海峡又有油轮遇袭/);
  assert.match(html, /AI 服务器不只消耗芯片/);
  assert.match(html, /苹果把秋季发布会定在北京时间/);
  assert.match(html, /英伟达 Q2 营收 962 亿美元/);
  assert.match(html, /机器人在百米赛道上刷新纪录/);
  assert.match(html, /会收缩的肌肉移植物/);
  assert.match(html, /伦敦 Kew 的老温室要修五十年/);
  assert.match(html, /原文看点/);
  assert.match(html, /图片／数据优先/);
  assert.match(html, /12—14 级/);
  assert.match(html, /公共讨论/);
  assert.match(html, /出处说明/);
  assert.match(html, /今晚美洲可见接近全食的月食/);
  assert.match(html, /发现线索/);
  assert.match(html, /内容来源/);
  assert.match(html, /同题原文/);
  assert.match(html, /aria-label="阅读工具"/);
  assert.match(html, /aria-label="阅读设置"/);
  assert.match(html, /观点仅代表原发布者/);
  assert.match(html, /从 800 米新路到一座还在蓄水的湖/);
  assert.match(html, /同一热点的代表性观点/);
  assert.match(html, /3 人遇难、558 人失联/);
  assert.ok((html.match(/查看这条观点/g) ?? []).length >= 12);
  assert.ok(html.indexOf("同一场灾害的五种现场声音") < html.indexOf("台风“沙德尔”进入红色预警"));
  assert.ok(html.indexOf("台风“沙德尔”进入红色预警") < html.indexOf("江西省委副书记、省长叶建春被查"));
  assert.ok(html.indexOf("霍尔木兹海峡又有油轮遇袭") < html.indexOf("AI 服务器不只消耗芯片"));
  assert.ok(html.indexOf("机器人在百米赛道上刷新纪录") < html.indexOf("会收缩的肌肉移植物"));
  assert.ok(html.indexOf("伦敦 Kew 的老温室要修五十年") < html.indexOf("狗狗会对着同伴眨眼"));
});
