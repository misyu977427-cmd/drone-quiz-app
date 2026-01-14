// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "二等無人航空機操縦士 クイズ (第4版対応)",
  description: "教則第4版(2025年2月施行)に完全準拠した最新のドローン学科試験対策。",
  verification: { google: "yJuYZVBPTOU_KBB57krDwxmAOe362PoUSv3LsokO6Ec" },
};

export const viewport: Viewport = { themeColor: "#2563eb" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-WC9YV352VV" />
      </body>
    </html>
  );
}