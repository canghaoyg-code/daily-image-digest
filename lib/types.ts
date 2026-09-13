export type SourceKind = "official" | "media-report" | "interview" | "post" | "comment" | "ruling";
export type VoiceRole = "official" | "eyewitness" | "expert" | "stakeholder" | "critic" | "ordinary-user" | "humor";
export type Source = {
  id: string; url: string; platform: string; publisher: string; author?: string;
  publishedAt?: string; publishedDate?: string; timezone?: string; updatedAt?: string;
  updateNote?: string; updateEvidence?: string; observedAt: string;
  timeEvidence: string; excerpt: string; access: "public"; evidenceKind: "page";
  engagement?: Array<{kind: string; value: number; observedAt: string; evidence: string}>;
};
export type EditorialImage = {
  path: string; alt: string; caption: string; kind: "original" | "background" | "cover" | "screenshot";
  sourceUrl?: string; originalUrl?: string; relevance?: string; width?: number; height?: number;
};
export type ContentBlock =
  | {kind: "text"; text: string; sourceIds?: string[]}
  | {kind: "image"; image: EditorialImage}
  | {kind: "quote"; text: string; sourceId: string; role: VoiceRole; speaker?: string; presentation?: "excerpt" | "translation" | "paraphrase"}
  | {kind: "stat"; label: string; value: string; note?: string; sourceIds?: string[]};
export type BriefingItem = {
  id: string; storyId?: string; title: string;
  section: "今日焦点" | "世界与新知" | "值得细读" | "人物、自然与轻读";
  format: "brief" | "standard" | "feature" | "visual" | "social";
  source: string; sourceType: string; sourceKind: SourceKind;
  author?: string; engagement?: string; time: string; href: string;
  discovery?: string; discoveryHref?: string; topic?: string; labels?: string[];
  recommendation?: string; verificationNote?: string;
  relatedSources?: Array<{label: string; href: string}>;
  details: string[];
  blocks?: ContentBlock[];
  sourceIds?: string[]; freshnessSourceId?: string; selectionReason?: string; updateNote?: string;
  evidence?: Array<{detailIndex: number; sourceIds: string[]}>;
  voices?: Array<{sourceId: string; role: VoiceRole; speaker?: string; text: string; angle: string; presentation?: "excerpt" | "translation" | "paraphrase"}>;
  images?: EditorialImage[];
  visualStat?: {label: string; value: string; note: string};
  image?: string; imageAlt?: string; imageCaption?: string;
};
export type Edition = {
  schemaVersion: number; id: string; editionDate: string; status: "legacy" | "draft" | "published";
  headline: string; cutoffAt?: string; generatedAt?: string; displayUpdatedAt?: string; legacyNote?: string;
  sources: Source[]; items: BriefingItem[];
  editorialReview?: {decision?: "approved" | "revise"; reviewedAt: string; imageRelevance: string; voiceDiversity: string; readingOrder: string; coverage: string};
  stories?: Array<{id: string; multiVoice?: boolean; voiceSelectionNote?: string; sustainedHeatEvidence?: string; discoverySignals?: Array<{platform: string; url: string; observedAt: string; evidence: string}>}>;
};
