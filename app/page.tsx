import {
  briefingItems,
  briefingMeta,
  platformSignalKindLabels,
  type BriefingItem,
  voiceKindLabels,
} from "./briefing-data";
import ReaderControls from "./reader-controls";

function DigestEntry({ item, number }: { item: BriefingItem; number: number }) {
  const mediaFirst = item.format === "visual" || item.format === "feature" || (item.format === "social" && Boolean(item.image));
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
        {item.format === "social" && <span>观点／平台线索</span>}
      </div>
      {item.topic && (
        <div className="entry-topic" aria-label={`同题组：${item.topic}`}>
          <span>同题组</span>{item.topic}
        </div>
      )}
      <h2>
        <span>【{number}】</span>
        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
      </h2>
      {mediaFirst && media}
      {item.details?.map((detail) => <p key={detail}>{detail}</p>)}
      {item.voices?.length ? (
        <ol className="entry-voices" aria-label="同一热点的代表性观点">
          {item.voices.map((voice) => (
            <li key={`${voice.platform}-${voice.author}`}>
              <div className="voice-meta">
                <span>{voice.platform}</span>
                <span className="voice-kind">{voiceKindLabels[voice.kind]}</span>
                <strong>{voice.author}</strong>
                {voice.time && <span className="voice-time">发布 {voice.time}</span>}
                {voice.engagement && <em>{voice.engagement}</em>}
              </div>
              <blockquote><p>{voice.text}</p></blockquote>
              <a href={voice.href} target="_blank" rel="noreferrer">查看出处</a>
            </li>
          ))}
        </ol>
      ) : null}
      {item.platformSignals?.length ? (
        <div className="entry-signals" aria-label="平台发现线索">
          <div className="signals-heading">平台线索</div>
          {item.platformSignals.map((signal) => (
            <div className="entry-signal" key={`${signal.platform}-${signal.label}`}>
              <div className="signal-meta">
                <span>{signal.platform}</span>
                <strong>{signal.label}</strong>
                <em>{platformSignalKindLabels[signal.kind]}</em>
                {signal.engagement && <em>{signal.engagement}</em>}
              </div>
              <p>{signal.text}</p>
              <a href={signal.href} target="_blank" rel="noreferrer">查看平台线索</a>
            </div>
          ))}
        </div>
      ) : null}
      {item.recommendation && (
        <p className="editor-recommendation">
          <strong>原文看点：</strong>{item.recommendation}
        </p>
      )}
      {item.verificationNote && (
        <p className="verification-note"><strong>出处说明：</strong>{item.verificationNote}</p>
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
        内容来源：{item.source}{item.sourceType ? `（${item.sourceType}）` : ""} · {item.time}
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
          <span className="tagline">公开来源 · 观点摘录 · 连续阅读</span>
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
            公开来源摘录 · 观点仅代表原发布者 · 点击“原文”查看完整内容
          </footer>
        </article>
      </main>
      <ReaderControls />
    </>
  );
}
