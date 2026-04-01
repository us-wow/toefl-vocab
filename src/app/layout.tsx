import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complete the Words — TOEFL 2026",
  description: "2026 토플 Reading 신유형 Complete the Words 연습",
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
