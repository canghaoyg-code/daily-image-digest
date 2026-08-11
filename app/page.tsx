import { briefingItems, deepReads, type BriefingItem } from "./briefing-data";

function ReadingItem({ item }: { item: BriefingItem }) {
  return (
    <a className="reading-item" href={item.href}>
      <span className="reading-item-source">{item.source}</span>
      <span className="reading-item-title">{item.title}</span>
      <span className="reading-item-meta">
        {item.category} · {item.time}
      </span>
    </a>
  );
}

function ReadingSection({
  title,
  items,
  emptyLabel,
}: {
  title: string;
  items: BriefingItem[];
  emptyLabel: string;
}) {
  const publishedItems = items.filter((item) => item.time !== "等待采集");

  return (
    <section className="reading-section" aria-labelledby={`${title}-heading`}>
      <div className="section-title-row">
        <h2 id={`${title}-heading`}>{title}</h2>
        {publishedItems.length > 0 && <span>{publishedItems.length} 篇</span>}
      </div>
      {publishedItems.length > 0 ? (
        <div className="reading-list">
          {publishedItems.map((item) => (
            <ReadingItem key={item.title} item={item} />
          ))}
        </div>
      ) : (
        <p className="empty-label">{emptyLabel}</p>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="site-name" href="#top" id="top">
          早晚读讯
        </a>
        <span>07:00 · 20:00</span>
      </header>

      <section className="status" aria-labelledby="status-heading">
        <p>今日</p>
        <h1 id="status-heading">等待下一次更新</h1>
        <span>北京时间 20:00</span>
      </section>

      <ReadingSection
        title="新闻"
        items={briefingItems}
        emptyLabel="更新后会在这里显示。"
      />
      <ReadingSection
        title="深度阅读"
        items={deepReads}
        emptyLabel="更新后会在这里显示。"
      />

      <footer>仅收录可追溯的原文链接</footer>
    </main>
  );
}
