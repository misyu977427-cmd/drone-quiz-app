import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. メタデータを1つに集約（タイトル・説明・アイコンの設定）
export const metadata: Metadata = {
  title: "二等無人航空機操縦士 クイズ",
  description: "ドローン学科試験対策アプリ（教則第3版準拠）",
  icons: {
    icon: "/icon.png", // 自作アイコン（青色のロゴ）を指定
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}