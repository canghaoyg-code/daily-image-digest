const commit = process.argv[2];
if (!/^[a-f0-9]{40}$/.test(commit ?? "")) throw new Error("需要预期部署提交 SHA");
const base = "https://canghaoyg-code.github.io/daily-image-digest/";
const response = await fetch(base + `release.json?commit=${commit}`, {signal:AbortSignal.timeout(20000)});
if (!response.ok) throw new Error(`发布标记不可访问：${response.status}`);
const release = await response.json();
if (release.commit !== commit || release.dirty) throw new Error("Pages 尚未显示本轮干净提交");
for (const route of release.routes) {
  const page = await fetch(new URL(route.slice(1), base), {signal:AbortSignal.timeout(20000)});
  if (!page.ok) throw new Error(`页面不可访问：${route} ${page.status}`);
  const html = await page.text();
  const expected = route === "/" ? release.edition : route.match(/^\/editions\/([^/]+)\/$/)?.[1];
  if (expected && !html.includes(`data-edition-id="${expected}"`)) throw new Error(`线上期号不符：${route}`);
}
console.log(`Pages 验证成功：${release.edition} · ${commit}`);
