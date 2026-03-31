// 퀴즈 결과 기록을 localStorage에 저장/조회하는 유틸리티

// 퀴즈 한 번의 결과
export interface QuizRecord {
  date: string; // ISO 날짜 문자열 (예: "2026-03-31T14:30:00")
  topic: string; // 지문 주제 (예: "Biology")
  correct: number; // 맞은 개수
  total: number; // 전체 빈칸 수
  percentage: number; // 정답률 (0~100)
}

const STORAGE_KEY = "toefl-vocab-history";

// 저장된 기록 전체 불러오기
export function getHistory(): QuizRecord[] {
  if (typeof window === "undefined") return []; // 서버 사이드 방어
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as QuizRecord[];
  } catch {
    return [];
  }
}

// 새 기록 추가 (최신순으로 앞에 넣음, 최대 100개 유지)
export function saveRecord(record: QuizRecord): void {
  const history = getHistory();
  history.unshift(record); // 최신 기록을 맨 앞에
  // 100개 넘으면 오래된 것 제거
  if (history.length > 100) {
    history.splice(100);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// 통계 요약 계산
export function getStats(): {
  totalGames: number; // 총 풀이 횟수
  averagePercent: number; // 평균 정답률
  bestPercent: number; // 최고 정답률
} {
  const history = getHistory();
  if (history.length === 0) {
    return { totalGames: 0, averagePercent: 0, bestPercent: 0 };
  }

  const totalGames = history.length;
  const averagePercent = Math.round(
    history.reduce((sum, r) => sum + r.percentage, 0) / totalGames
  );
  const bestPercent = Math.max(...history.map((r) => r.percentage));

  return { totalGames, averagePercent, bestPercent };
}
