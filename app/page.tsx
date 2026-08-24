import {
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <section className="digest-entry">
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
        来源：{item.source}{item.sourceType ? `（${item.sourceType}）` : ""} · {item.time}
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
            <strong>来源说明</strong>
            <p>
              以下内容均为公开来源的摘要与转述。官方通报、媒体报道、机构发布和创作者内容会明确区分；链接指向原文，事实如有更新以源站为准。
            </p>
            <p>每天一份图文汇编，看看同一天里世界正在发生什么。</p>
          </section>

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
