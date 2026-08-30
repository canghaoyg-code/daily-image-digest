import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders independent, image-rich editorial units", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>每日图读 · 公开来源的每日图文汇编<\/title>/);
  assert.match(html, /20260830/);
  assert.match(html, /今日焦点/);
  assert.match(html, /世界与新知/);
  assert.match(html, /值得细读/);
  assert.match(html, /人物、自然与轻读/);

  const entries = html.match(/<section class="digest-entry format-/g) ?? [];
  const images = html.match(/<img[^>]+src="\/images\/20260830\//g) ?? [];
  assert.equal(entries.length, 21);
  assert.equal(images.length, 18);
  assert.ok(images.length / entries.length >= 0.7);
  assert.doesNotMatch(html, /entry-voices|同题原文摘录|平台入口/);
  assert.doesNotMatch(html, /暴雨预警公开搜索页|公开预警页面/);

  assert.match(html, /页面未显示发布者姓名/);
  assert.match(html, /不觉得西藏泥石流受灾的热度少得可怜吗/);
  assert.match(html, /尼泊尔可以第一时间发布现场视频和捐助信息/);
  assert.match(html, /16 人遇难、546 人失联/);
  assert.match(html, /地月之间打通/);
  assert.match(html, /法官 Rita Lin/);
  assert.match(html, /视频观看超过 50 万次；该评论获赞超过 800/);
  assert.match(html, /急救时就让他们穿鞋进来/);
  assert.match(html, /原文看点/);
  assert.match(html, /出处说明/);
  assert.match(html, /同题原文/);
  assert.match(html, /观点仅代表原发布者/);
  assert.match(html, /aria-label="阅读工具"/);

  assert.ok(html.indexOf("不觉得西藏泥石流受灾的热度少得可怜吗") < html.indexOf("尼泊尔一侧死亡 675 人"));
  assert.ok(html.indexOf("245 万 PFLOPS") < html.indexOf("Anthropic 又站上版权争议中心"));
  assert.ok(html.indexOf("英国人开始多买豆子") < html.lastIndexOf("急救时就让他们穿鞋进来"));
});
