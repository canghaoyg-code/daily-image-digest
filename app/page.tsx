import {
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  const mediaFirst = item.format === "visual" || (item.format === "feature" && Boolean(item.image));
  const media = (item.image || item.visualStat) && (
    <div className="entry-visuals">
      {item.image && (
        <figure className="entry-image">
          <img src={item.image} alt={item.imageAlt ?? item.title} loading="lazy" />
          {item.imageCaption && <figcaption>{item.imageCaption}</figcaption>}
        </figure>
      )}
      {item.visualStat && (
        <div className="entry-stat" aria-label={`${item.visualStat.label}：${item.visualStat.value}`}>
          <span>{item.visualStat.label}</span>
          <strong>{item.visualStat.value}</strong>
          <p>{item.visualStat.note}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className={`digest-entry format-${item.format}`}>
      <div className="entry-labels" aria-label="收录标签">
        <span className="entry-section-label">{item.section}</span>
        {item.labels?.map((label) => <span key={label}>{label}</span>)}
        {item.format === "visual" && <span>图片／数据优先</span>}
        {item.format === "social" && <span>公共讨论 · 仍在核验</span>}
      </div>
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {mediaFirst && media}
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.recommendation && (
        <p className="editor-recommendation">
          <strong>推荐理由：</strong>{item.recommendation}
        </p>
      )}
      {item.verificationNote && (
        <p className="verification-note"><strong>核验状态：</strong>{item.verificationNote}</p>
      )}
      {!mediaFirst && media}
      {item.discovery && item.discoveryHref && (
        <div className="entry-discovery">
          发现线索：
          <a href={item.discoveryHref} target="_blank" rel="noreferrer">
            {item.discovery}
          </a>
        </div>
      )}
      <div className="entry-source">
        核验来源：{item.source}{item.sourceType ? `（${item.sourceType}）` : ""} · {item.time}
        <a href={item.href} target="_blank" rel="noreferrer">
          原文
        </a>
      </div>
      {item.relatedSources?.length ? (
        <div className="entry-related">
          同题原文：
          {item.relatedSources.map((source) => (
            <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label}</a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#today">
            每日图读
          </a>
          <span className="tagline">公开来源 · 图文汇编 · 连续阅读</span>
          <nav aria-label="主导航">
            <a href="#today">今日图读</a>
          </nav>
        </div>
      </header>

      <main>
        <article className="daily-post" id="today">
          <header className="post-header">
            <h1>
              <span>[图读]</span>【{briefingMeta.dateCode}】{briefingMeta.headline}
            </h1>
            <p>{briefingMeta.updatedAt}</p>
          </header>

          <section className="digest-stream" aria-label="今日图文资讯">
            {briefingItems.map((item, index) => (
              <DigestEntry key={item.title} item={item} number={index + 1} />
            ))}
          </section>

          <footer>
            公开来源摘要 · 不替代原始报道 · 点击每条末尾“原文”核对
          </footer>
        </article>
      </main>
      <ReaderControls />
    </>
  );
}
