import {
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <section className="digest-entry">
      {item.labels && (
        <div className="entry-labels" aria-label="收录标签">
          {item.labels.map((label) => <span key={label}>{label}</span>)}
        </div>
      )}
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.recommendation && (
        <p className="editor-recommendation">
          <strong>推荐理由：</strong>{item.recommendation}
        </p>
      )}
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
            <strong>采集与收录规则</strong>
            <p>
              双轨收录：热点内容不设条数，综合微博、百度、抖音、B站等公开榜单的排名、增速、持续时间和跨平台共振，达到热度门槛即进入候选；高质量文章不受热度限制，重点看原创证据、信息增量、论证、独立性和持久价值。
            </p>
            <p>
              平台和账号只负责发现线索，名单每天动态变化；事实回到官方通报、原始公告、记者调查、机构资料或当事方声明核验。同一事件合并重复话题，营销热搜降权，尚未证实的内容明确标注。
            </p>
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
