import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const metadataBase = new URL("https://zaowan-dubao.canghaoyg.chatgpt.site");
  return {
    metadataBase,
    title: "每日图读 · 公开来源的每日图文汇编",
    description: "把官方通报、媒体报道、机构发布和创作者内容编成一份连续可读的每日图文汇编。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title: "每日图读",
      description: "公开来源 · 图文汇编 · 连续阅读",
      images: [
        {
          url: new URL("/og.png", metadataBase),
          width: 1774,
          height: 887,
          alt: "每日图读：公开来源、图文汇编、连续阅读",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "每日图读",
      description: "公开来源 · 图文汇编 · 连续阅读",
      images: [new URL("/og.png", metadataBase)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
