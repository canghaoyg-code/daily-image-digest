import { notFound } from "next/navigation";
import { editions } from "../../briefing-data";
import Digest from "../../digest";
import { siteUrl } from "../../../lib/site";
export function generateStaticParams() { return editions.map(e => ({ id: e.id })); }
export async function generateMetadata({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const edition = editions.find(e => e.id === id);
  return { title: edition ? `${edition.editionDate} · ${edition.headline} · 每日图读` : "期号不存在", alternates: { canonical: new URL(`editions/${id}/`, siteUrl).href } };
}
export default async function EditionPage({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const edition = editions.find(e => e.id === id);
  if (!edition) notFound();
  return <Digest edition={edition} />;
}
