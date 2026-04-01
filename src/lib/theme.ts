// 다크모드 테마 설정 유틸리티

const THEME_KEY = "toefl-vocab-theme";

export type Theme = "light" | "dark" | "system";

// 저장된 테마 설정 불러오기
export function getTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(THEME_KEY) as Theme) || "system";
}

// 테마 설정 저장
export function setTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

// 실제 다크모드 적용 — html 요소에 dark 클래스 토글
export function applyTheme(theme: Theme): void {
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.classList.toggle("dark", isDark);
}

// 시스템 테마 변경 감지 리스너 등록
export function watchSystemTheme(callback: () => void): () => void {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
