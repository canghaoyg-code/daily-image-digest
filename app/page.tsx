import {
  briefingItems,
  briefingMeta,
  deepReads,
  type BriefingItem,
} from "./briefing-data";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <section className="digest-entry">
      <h2>
        <span>【{number}】</span>
        <a href={item.href}>{item.title}</a>
      </h2>
      <div className="entry-source">
        来源：{item.source} · {item.category} · {item.time}
        <a href={item.href} target="_blank" rel="noreferrer">
          原文
        </a>
      </div>
    </section>
  );
}

function DigestGroup({
  title,
  items,
}: {
  title: string;
  items: BriefingItem[];
}) {
  return (
    <section className="digest-group" aria-labelledby={`${title}-heading`}>
      <h1 id={`${title}-heading`}>{title}</h1>
      {items.map((item, index) => (
        <DigestEntry key={item.title} item={item} number={index + 1} />
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#today">
            早晚读讯
          </a>
          <span className="tagline">阅读 · 筛选 · 记录</span>
          <nav aria-label="主导航">
            <a href="#today">今日</a>
            <a href="#deep-reading">深度阅读</a>
          </nav>
        </div>
      </header>

      <main>
        <article className="daily-post" id="today">
          <header className="post-header">
            <h1>【{briefingMeta.label}】</h1>
            <p>{briefingMeta.updatedAt}</p>
          </header>

          <DigestGroup title="今日资讯" items={briefingItems} />
          <DigestGroup title="深度阅读" items={deepReads} />

          <footer>
            每天 07:00 与 20:00 更新 · 仅收录可追溯的原文链接
          </footer>
        </article>
      </main>
    </>
  );
}
