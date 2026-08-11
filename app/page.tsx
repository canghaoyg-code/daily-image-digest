import { briefingItems, deepReads, type BriefingItem } from "./briefing-data";

function ItemCard({ item, number }: { item: BriefingItem; number: number }) {
  return (
    <article className={`item-card ${item.featured ? "item-card-featured" : ""}`}>
      <div className="item-meta">
        <span>{String(number).padStart(2, "0")}</span>
        <span>{item.category}</span>
        <span className={`kind kind-${item.kind}`}>{item.kind}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <a href={item.href} className="item-link">
        <span>{item.source}</span>
        <span>{item.time}</span>
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <section className="masthead" aria-labelledby="site-title">
        <div className="masthead-line" />
        <div className="masthead-content">
          <p className="eyebrow">PERSONAL DAILY BRIEF · ASIA/SHANGHAI</p>
          <div className="masthead-title-row">
            <h1 id="site-title">早晚读讯</h1>
            <span className="issue">NO. 001</span>
          </div>
          <p className="dek">
            为你筛选新闻、X 关注动态与值得慢读的文章。事实、线索和观点，各归其位。
          </p>
        </div>
      </section>

      <nav className="section-nav" aria-label="内容分区">
        <a href="#collection">今日新闻</a>
        <a href="#deep-reading">深度阅读</a>
        <a href="#method">收录方式</a>
        <span>07:00 / 20:00 更新</span>
      </nav>

      <section className="edition-intro" id="collection" aria-labelledby="today-heading">
        <div>
          <p className="section-label">TODAY&apos;S EDITION</p>
          <h2 id="today-heading">第一期正在准备</h2>
        </div>
        <p>
          已根据你的阅读习惯设定主题：AI 与科技、商业与金融、国际与社会，以及深度分析。
          首轮采集完成后，本区会显示真实内容与原文链接。
        </p>
      </section>

      <section className="news-layout" aria-label="今日新闻预览">
        <div className="lead-item">
          <ItemCard item={briefingItems[0]} number={1} />
          <aside className="update-panel">
            <span className="pulse" aria-hidden="true" />
            <p>采集状态</p>
            <strong>等待 20:00 首次更新</strong>
            <small>每次更新覆盖最近 12 小时，自动去重。</small>
          </aside>
        </div>
        <div className="item-grid">
          {briefingItems.slice(1).map((item, index) => (
            <ItemCard key={item.title} item={item} number={index + 2} />
          ))}
        </div>
      </section>

      <section className="deep-reading" id="deep-reading" aria-labelledby="deep-heading">
        <div className="section-heading">
          <p className="section-label">LONG-FORM READING</p>
          <h2 id="deep-heading">深度阅读</h2>
          <p>不是信息更多，而是判断更清晰。</p>
        </div>
        <div className="deep-list">
          {deepReads.map((item, index) => (
            <ItemCard key={item.title} item={item} number={index + 1} />
          ))}
        </div>
      </section>

      <section className="method" id="method" aria-labelledby="method-heading">
        <div>
          <p className="section-label">EDITORIAL METHOD</p>
          <h2 id="method-heading">怎样收录</h2>
        </div>
        <ol>
          <li>
            <strong>先发现</strong>
            从公开新闻、专家文章和你在 X 上关注的账号中找到值得看的线索。
          </li>
          <li>
            <strong>再核验</strong>
            重要事件优先保留原始资料与独立报道；单一来源会明确标注。
          </li>
          <li>
            <strong>后整理</strong>
            只保留摘要、推荐理由和原文入口，让网页成为阅读入口，而不是内容搬运站。
          </li>
        </ol>
      </section>

      <footer>
        <span>早晚读讯 · 私人阅读页面</span>
        <span>首轮自动采集待启动</span>
      </footer>
    </main>
  );
}
