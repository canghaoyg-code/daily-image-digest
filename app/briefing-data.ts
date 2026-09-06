import catalog from "../content/catalog.json";
import type { Edition } from "../lib/types";
export type { BriefingItem } from "../lib/types";

const files = import.meta.glob("../content/editions/*.json", { eager: true, import: "default" }) as Record<string, Edition>;
export const editions = catalog.editions.map(id => {
  const edition = files[`../content/editions/${id}.json`];
  if (!edition || edition.id !== id) throw new Error("期号文件不存在：" + id);
  return edition;
});
export const latestEdition = editions.find(e => e.id === catalog.latest)!;
if (!latestEdition) throw new Error("最新期号不存在");

export const sourceKindLabels = {
  official: "官方消息", "media-report": "媒体报道", interview: "采访原话",
  post: "原帖／原视频", comment: "评论", ruling: "裁决／文件",
};
