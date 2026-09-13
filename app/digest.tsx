/* Native images preserve original editorial assets in a static export. */
/* eslint-disable @next/next/no-img-element */
import { sourceKindLabels } from "./briefing-data";
import { itemImages } from "../lib/editorial.mjs";
import type { BriefingItem, Edition, EditorialImage, ContentBlock, Source } from "../lib/types";
import ReaderControls from "./reader-controls";
import { sitePath, siteUrl } from "../lib/site";

function assetPath(path: string) {
  return /^https?:\/\//.test(path) ? path : sitePath(path);
}

function Voice({ source, text, speaker, presentation = "paraphrase" }: { source: Source; text: string; speaker?: string; presentation?: "excerpt" | "translation" | "paraphrase" }) {
  const Label = presentation === "paraphrase" ? "div" : "blockquote";
  const published = source.updatedAt || source.publishedAt;
  const displayTime = published ? new Intl.DateTimeFormat("zh-CN", {timeZone:"Asia/Shanghai", year:"numeric", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit", hourCycle:"h23"}).format(new Date(published)) + " 北京时间" : source.publishedDate || source.timeEvidence;
  return <Label className="voice" data-presentation={presentation}>
    <div className="voice-byline"><a href={source.url} target="_blank" rel="noreferrer">{source.platform} / {speaker || source.author}</a><span> · {({excerpt:"摘录", translation:"译摘", paraphrase:"转述"})[presentation]}</span></div>
    {speaker && <small>经 {source.author || source.publisher} 报道；以下时间为报道时间</small>}
    <p>{text}</p>
    <small title={source.timeEvidence}><time dateTime={published || source.publishedDate}>{displayTime}</time></small>
    {source.engagement?.map((metric, i) => <small key={i}> · {({likes:"赞",shares:"转发",comments:"评论",views:"播放",votes:"票"} as Record<string,string>)[metric.kind]} {metric.value}（观测于 {new Intl.DateTimeFormat("zh-CN", {timeZone:"Asia/Shanghai", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit", hourCycle:"h23"}).format(new Date(metric.observedAt))} 北京时间）</small>)}
  </Label>;
}

function DigestEntry({ item, number, edition }: { item: BriefingItem; number: number; edition: Edition }) {
  const mediaFirst = ["visual", "feature", "social"].includes(item.format);
  const images: EditorialImage[] = itemImages(item);
  const media = (images.length > 0 || item.visualStat) && (
    <div className="entry-visuals">
      {images.map((img, i) => (
        <figure className="entry-image" key={img.path + i}>
          <a href={assetPath(img.path)} target="_blank" rel="noreferrer">
            <img src={assetPath(img.path)} alt={img.alt} width={img.width} height={img.height} loading={number === 1 && i === 0 ? "eager" : "lazy"} />
          </a>
          <figcaption>{img.caption}{img.sourceUrl && <a href={img.sourceUrl} target="_blank" rel="noreferrer"> · 图片出处</a>}</figcaption>
        </figure>
      ))}
      {item.visualStat && <div className="entry-stat"><span>{item.visualStat.label}</span><strong>{item.visualStat.value}</strong><p>{item.visualStat.note}</p></div>}
    </div>
  );
  const sourceMarks = (sourceIds?: string[]) => sourceIds?.map(id => {
    const source = edition.sources.find(s => s.id === id);
    return source && <sup key={id}><a href={source.url} title={source.publisher} target="_blank" rel="noreferrer">〔来源〕</a></sup>;
  });
  const displayedVoices = new Set(item.blocks?.filter(block => block.kind === "quote").map(block => JSON.stringify([block.sourceId, block.speaker || "", block.text])));
  const blockContent = (block: ContentBlock, index: number) => {
    if (block.kind === "text") return <p key={index}>{block.text}{sourceMarks(block.sourceIds)}</p>;
    if (block.kind === "stat") return <div className="entry-stat" key={index}><span>{block.label}</span><strong>{block.value}</strong>{block.note && <p>{block.note}{sourceMarks(block.sourceIds)}</p>}</div>;
    if (block.kind === "image") return <figure className="entry-image block-image" key={index}><a href={assetPath(block.image.path)} target="_blank" rel="noreferrer"><img src={assetPath(block.image.path)} alt={block.image.alt} width={block.image.width} height={block.image.height} loading={number === 1 && index === 0 ? "eager" : "lazy"} /></a><figcaption>{block.image.caption}{block.image.sourceUrl && <a href={block.image.sourceUrl} target="_blank" rel="noreferrer"> · 图片出处</a>}</figcaption></figure>;
    const source = edition.sources.find(s => s.id === block.sourceId);
    return source && <Voice key={index} source={source} text={block.text} speaker={block.speaker} presentation={block.presentation} />;
  };
  return (
    <section id={item.id} className={`digest-entry format-${item.format}`}>
      <div className="entry-labels"><span className="entry-section-label">{item.section}</span>{item.labels?.map(label => <span key={label}>{label}</span>)}</div>
      <h2><a className="entry-permalink" href={`#${item.id}`} aria-label={`定位第 ${number} 条`}>【{number}】</a><a href={item.href} target="_blank" rel="noreferrer">{item.title}</a></h2>
      {mediaFirst && media}
      {edition.status === "legacy" && (item.author || item.engagement) && <p className="entry-source">{item.author}{item.engagement && ` · ${item.engagement}`}</p>}
      {item.blocks?.map(blockContent) ?? item.details.map((detail, i) => (
        <p key={i}>{detail}{item.evidence?.filter(p => p.detailIndex === i).flatMap(p => p.sourceIds).map(id => {
          const source = edition.sources.find(s => s.id === id);
          return source && <sup key={id}><a href={source.url} title={source.publisher} target="_blank" rel="noreferrer">〔来源〕</a></sup>;
        })}</p>
      ))}
      {item.voices?.filter(voice => !displayedVoices.has(JSON.stringify([voice.sourceId, voice.speaker || "", voice.text]))).map((voice, i) => {
        const source = edition.sources.find(s => s.id === voice.sourceId);
        return source && <Voice key={i} source={source} text={voice.text} speaker={voice.speaker} presentation={voice.presentation} />;
      })}
      {item.recommendation && <p className="editor-recommendation"><strong>原文看点：</strong>{item.recommendation.replace(/^原文看点[：:]\s*/, "")}</p>}
      {!mediaFirst && media}
      <div className="entry-source">来源：{item.source} · {sourceKindLabels[item.sourceKind]} · {item.time} <a href={item.href} target="_blank" rel="noreferrer">原文</a></div>
      {(item.verificationNote || item.relatedSources?.length || item.discovery) && <details className="source-details">
        <summary>出处与同题阅读</summary>
        {item.verificationNote && <p className="verification-note">{item.verificationNote}</p>}
        {item.discoveryHref && <p><a href={item.discoveryHref}>{item.discovery}</a></p>}
        {item.relatedSources?.map(s => <p key={s.href}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></p>)}
      </details>}
    </section>
  );
}

export default function Digest({ edition, previewIssues = [] }: { edition: Edition; previewIssues?: string[] }) {
  const archiveHref = edition.status === "draft" ? siteUrl + "archive/" : sitePath("/archive/");
  const time = (value?: string) => value ? new Intl.DateTimeFormat("zh-CN", {timeZone:"Asia/Shanghai", month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit", hourCycle:"h23"}).format(new Date(value)) : "";
  return <>
    <header className="topbar"><div className="topbar-inner"><a className="brand" href={sitePath("/")}>每日图读</a><span className="tagline">公开来源 · 观点摘录 · 连续阅读</span><nav aria-label="主导航"><a href={archiveHref}>往期</a></nav></div></header>
    <main><article className="daily-post" data-edition-id={edition.id} id="today">
      <header className="post-header"><h1><span>[图读]</span>【{edition.editionDate.replaceAll("-", "")}】{edition.headline}</h1><p>{edition.displayUpdatedAt ?? `${time(edition.generatedAt)} 更新 · ${time(edition.cutoffAt)} 截稿 · ${edition.id.endsWith("morning") ? "早间版" : "晚间版"} · 北京时间`}</p></header>
      {edition.status === "legacy" && <p className="edition-notice">{edition.editionDate} 历史版 · {edition.legacyNote}</p>}
      {edition.status === "draft" && <p className="edition-notice" role="status">未发布草稿 · 用于编辑验收，不代表已达到出刊标准。</p>}
      {edition.status === "draft" && previewIssues.length > 0 && <aside className="edition-notice" aria-label="待完成的编辑检查"><strong>本稿暂不可发布</strong><ul>{previewIssues.map(issue => <li key={issue}>{issue}</li>)}</ul></aside>}
      <details className="edition-contents"><summary>本期目录 · {edition.items.length} 条</summary><ol>{edition.items.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>)}</ol></details>
      <section className="digest-stream" aria-label="本期图文资讯">{edition.items.map((item, index) => <DigestEntry key={item.id} item={item} number={index + 1} edition={edition} />)}</section>
      <footer>观点仅代表原发布者 · {edition.status === "draft" ? "试刊尚无永久链接" : <a href={sitePath(`/editions/${edition.id}/`)}>本期永久链接</a>} · <a href={archiveHref}>往期图读</a></footer>
    </article></main>
    <ReaderControls />
  </>;
}
