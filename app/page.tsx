import {
  briefingItems,
  briefingMeta,
  deepReads,
  type BriefingItem,
} from "./briefing-data";

function ReadingItem({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <article className="reading-item">
      <span className="digest-number">【{number}】</span>
      <div className="digest-content">
        <h3>
          <a href={item.href}>{item.title}</a>
        </h3>
        <p>{item.summary}</p>
        <div className="reading-item-meta">
          <span>{item.source}</span>
          <span>{item.category}</span>
          <span>{item.time}</span>
        </div>
      </div>
    </article>
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
  return (
    <section className="reading-section" aria-labelledby={`${title}-heading`}>
      <div className="section-title-row">
        <h2 id={`${title}-heading`}>{title}</h2>
        {items.length > 0 && <span>{items.length} 篇</span>}
      </div>
      {items.length > 0 ? (
        <div className="reading-list">
          {items.map((item, index) => (
            <ReadingItem key={item.title} item={item} number={index + 1} />
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
        <p>{briefingMeta.label}</p>
        <h1 id="status-heading">{briefingMeta.headline}</h1>
        <span>{briefingMeta.updatedAt}</span>
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
