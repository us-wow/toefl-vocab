import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complete the Words — TOEFL 2026",
  description: "2026 토플 Reading 신유형 Complete the Words 연습. 학술 지문에서 빈칸을 채워 어휘력을 키우세요.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Complete the Words — TOEFL 2026 신유형 연습",
    description: "객관식이 아닙니다. 직접 타이핑하세요. 2026 토플 Reading 신유형을 무료로 연습하세요.",
    type: "website",
    locale: "ko_KR",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "TOEFL Words",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      {/* Apple 스타일: 밝은 배경 + 넉넉한 여백 + 시스템 폰트 */}
      <body className="bg-[#f5f5f7] min-h-screen font-sans antialiased text-[#1d1d1f]">
        <main className="max-w-xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
