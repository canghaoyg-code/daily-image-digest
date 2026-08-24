import {
  deepReads,
  briefingItems,
  briefingMeta,
  type BriefingItem,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  const media = (item.image || item.additionalImages?.length) && (
    <div className={`entry-gallery${item.additionalImages?.length ? " entry-gallery-pair" : ""}`}>
      {item.image && (
        <figure className="entry-image">
          <img src={item.image} alt={item.imageAlt ?? item.title} loading="lazy" />
          {item.imageCaption && <figcaption>{item.imageCaption}</figcaption>}
        </figure>
      )}
      {item.additionalImages?.map((image) => (
        <figure className="entry-image" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section className={`digest-entry format-${item.format ?? "standard"}`}>
      <div className="entry-labels" aria-label="条目类型">
        <span>{item.category}</span><span>{item.sourceType}</span>
        {item.format === "feature" && <span>专题聚合</span>}
        {item.format === "social" && <span>个人观察 · 未作新闻核验</span>}
      </div>
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {item.format === "visual" && media}
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.recommendation && <p className="editor-recommendation">推荐理由：{item.recommendation}</p>}
      {item.format !== "visual" && media}
      <div className="entry-source">
        来源：{item.source} · {item.time}
        <a href={item.href} target="_blank" rel="noreferrer">
          原文
        </a>
      </div>
      {item.relatedSources?.length ? (
        <div className="entry-related" aria-label="同题来源">
          同题来源：
          {item.relatedSources.map((source) => (
            <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label}</a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function Home() {
  const mainItems = briefingItems.filter((item) => !["visual", "social"].includes(item.format ?? "standard"));
  const visualItems = briefingItems.filter((item) => item.format === "visual");
  const socialItems = briefingItems.filter((item) => item.format === "social");
  const numberFor = (item: BriefingItem) => briefingItems.indexOf(item) + 1;

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
              热点内容不设条数，优先参考榜单热度、增长速度、持续时间与跨平台共振；平台和账号随当天议题动态调整，只用于发现线索。
            </p>
            <p>
              事实尽量回到机构公告、报道原文、财报或报告核验；同一事件的官方回应、媒体报道与公共讨论合并呈现，社交观察不当作新闻事实。
            </p>
            <p>
              高质量文章不受热度限制，按原创证据、信息增量、论证质量、独立性与长期价值筛选，并说明推荐理由。
            </p>
            <p>
              条目采用快讯、标准条目和专题聚合三种长度；关键现场、数据和产品优先配图，每张图保留出处。
            </p>
          </section>

          <section className="digest-stream" aria-label="今日图文资讯">
            <div className="stream-divider">当日焦点</div>
            {mainItems.map((item) => (
              <DigestEntry key={item.title} item={item} number={numberFor(item)} />
            ))}
            <div className="stream-divider">今日一图</div>
            {visualItems.map((item) => (
              <DigestEntry key={item.title} item={item} number={numberFor(item)} />
            ))}
            <div className="stream-divider" id="observation">今日观察</div>
            {socialItems.map((item) => (
              <DigestEntry key={item.title} item={item} number={numberFor(item)} />
            ))}
            <div className="stream-divider">值得细读</div>
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
