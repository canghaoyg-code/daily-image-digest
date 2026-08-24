import {
  deepReads,
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <section className="digest-entry">
      <div className="entry-labels" aria-label="条目类型">
        <span>{item.category}</span><span>{item.sourceType}</span>
      </div>
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.image && (
        <figure className="entry-image">
          <img src={item.image} alt={item.imageAlt ?? item.title} loading="lazy" />
          {item.imageCaption && <figcaption>{item.imageCaption}</figcaption>}
        </figure>
      )}
      <div className="entry-source">
        来源：{item.source} · {item.time}
        <a href={item.href} target="_blank" rel="noreferrer">
          原文
        </a>
      </div>
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
            <a href="#source-note">来源说明</a>
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

          <section className="source-note" id="source-note">
            <strong>采集与收录规则</strong>
            <p>
              本期只收录与哈萨克斯坦或乌兹别克斯坦直接相关的公开内容，覆盖当地新闻门户、机构发布、国际媒体与公开社交讨论。
            </p>
            <p>
              每条保留发布者、来源类型、时间和原文入口；社交平台内容会明确标为“公开社交媒体”，只呈现原帖或讨论所公开的信息。
            </p>
          </section>

          <section className="digest-stream" aria-label="今日图文资讯">
            {briefingItems.map((item, index) => (
              <DigestEntry key={item.title} item={item} number={index + 1} />
            ))}
            <div className="stream-divider">延伸阅读</div>
            {deepReads.map((item, index) => (
              <DigestEntry key={item.title} item={item} number={briefingItems.length + index + 1} />
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
