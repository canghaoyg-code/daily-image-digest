import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "早晚读讯 · 私人阅读页面",
    description: "每天两次更新的个人新闻与深度阅读精选。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      title: "早晚读讯",
      description: "每天 07:00 与 20:00 更新的个人新闻与深度阅读精选。",
      images: [
        {
          url: new URL("/og.png", metadataBase),
          width: 1774,
          height: 887,
          alt: "早晚读讯：07:00 · 20:00",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "早晚读讯",
      description: "每天 07:00 与 20:00 更新的个人新闻与深度阅读精选。",
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
