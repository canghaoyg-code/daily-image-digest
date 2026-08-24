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
            <strong>今日采集方式</strong>
            <p>
              先从微博实时热搜、话题页和公开讨论中发现当天线索，再回到官方通报、记者调查、媒体报道、机构发布与当事方声明核验。微博账号不设固定名单，会随每天的热点和事件主体动态变化。
            </p>
            <p>热搜只说明“大家在谈什么”，不单独承担事实证明；每条末尾分别标出发现线索与核验来源。</p>
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
