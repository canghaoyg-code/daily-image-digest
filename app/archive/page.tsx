import { editions } from "../briefing-data";
import { sitePath } from "../../lib/site";
export default function Archive() {
  return <main><article className="daily-post"><h1>往期图读</h1><p><a href={sitePath("/")}>返回最新一期</a></p><ul>{[...editions].reverse().map(e => <li key={e.id}><a href={sitePath(`/editions/${e.id}/`)}>{e.editionDate} · {e.headline}</a>{e.status === "legacy" ? "（历史记录）" : ""}</li>)}</ul></article></main>;
}
