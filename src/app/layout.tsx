import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. メタデータ設定（認証コード・SEO・SNS対策）
export const metadata: Metadata = {
  title: "二等無人航空機操縦士 クイズ",
  description: "教則第3版に完全準拠。ドローン学科試験を爆速で攻略。",
  // Google Search Consoleの所有権確認コード
  verification: {
    google: "yJuYZVBPTOU_KBB57krDwxmAOe362PoUSv3LsokO6Ec",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "二等無人航空機操縦士 クイズ",
    description: "教則第3版準拠のドローン対策アプリ。隙間時間で合格へ！",
    images: ["/icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "二等無人航空機操縦士 クイズ",
    description: "教則第3版準拠の対策アプリ",
    images: ["/icon.png"],
  },
};

// 2. ビューポート設定（スマホのバーを青色に）
export const viewport: Viewport = {
  themeColor: "#2563eb",
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