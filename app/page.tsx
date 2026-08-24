import {
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
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
      {item.labels && (
        <div className="entry-labels" aria-label="收录标签">
          {item.labels.map((label) => <span key={label}>{label}</span>)}
          {item.format === "visual" && <span>图片／数据优先</span>}
          {item.format === "social" && <span>公共讨论 · 仍在核验</span>}
        </div>
      )}
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {item.format === "visual" && media}
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.recommendation && (
        <p className="editor-recommendation">
          <strong>推荐理由：</strong>{item.recommendation}
        </p>
      )}
      {item.verificationNote && (
        <p className="verification-note"><strong>核验状态：</strong>{item.verificationNote}</p>
      )}
      {item.format !== "visual" && media}
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
  const sectionOrder: BriefingItem["section"][] = ["今日焦点", "世界与新知", "值得细读", "人物、自然与轻读"];
  const orderedItems = sectionOrder.flatMap((section) => briefingItems.filter((item) => item.section === section));

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
            <p>
              编排采用快讯、标准条目、图片条目和深度条目混排；同一热点的榜单线索、官方回应与媒体核实尽量聚合，重要现场和数据图保留图片出处。
            </p>
            <p>
              栏目和条目长度由内容显式标注，不按固定条数或位置切分；图片权属不清时不强行配图，数据型内容优先使用站内数据卡片，主标题只取自已经核验的当日内容。
            </p>
          </section>

          <section className="digest-stream" aria-label="今日图文资讯">
            {sectionOrder.map((section) => (
              <div className="digest-section" key={section}>
                <div className="stream-divider">{section}</div>
                {orderedItems.filter((item) => item.section === section).map((item) => (
                  <DigestEntry key={item.title} item={item} number={orderedItems.indexOf(item) + 1} />
                ))}
              </div>
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
