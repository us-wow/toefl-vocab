"use client";

import { useState, useRef, useEffect, createRef } from "react";
import { generateBlanks, checkAnswer } from "@/lib/blank-generator";
import type { Difficulty } from "@/lib/blank-generator";
import { samplePassages } from "@/lib/sample-passages";
import { saveRecord, getStats, getSeenPassageIds } from "@/lib/quiz-history";
import { lookupWord } from "@/lib/word-data";
import { getTheme, setTheme, applyTheme, watchSystemTheme } from "@/lib/theme";
import type { Theme } from "@/lib/theme";
import BlankInput from "@/components/BlankInput";
import type { BlankWord } from "@/lib/blank-generator";

const allTopics = [...new Set(samplePassages.map((p) => p.topic))];

// 결과에 따른 감정 피드백 메시지
function getResultFeedback(percentage: number): { emoji: string; message: string } {
  if (percentage === 100) return { emoji: "🎯", message: "Perfect! 완벽해요!" };
  if (percentage >= 90) return { emoji: "🔥", message: "Excellent! 거의 다 맞았어요!" };
  if (percentage >= 70) return { emoji: "💪", message: "Great! 잘하고 있어요!" };
  if (percentage >= 50) return { emoji: "📖", message: "Good try! 조금만 더 연습하면 돼요" };
  return { emoji: "🌱", message: "Keep going! 틀린 단어를 복습해보세요" };
}

type Screen = "setup" | "quiz";

export default function QuizPage() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [blankWords, setBlankWords] = useState<BlankWord[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{
    correct: number;
    total: number;
  } | null>(null);
  const [currentTopic, setCurrentTopic] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("easy");
  const [stats, setStats] = useState({ totalGames: 0, averagePercent: 0, bestPercent: 0 });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<Theme>("system");
  const [hintsUsed, setHintsUsed] = useState(0);
  const [currentPassage, setCurrentPassage] = useState<typeof samplePassages[0] | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [seenIds, setSeenIds] = useState<Set<number>>(new Set()); // 풀었던 지문 ID
  const [showWrongWords, setShowWrongWords] = useState(false); // 오답 모아보기 토글

  useEffect(() => {
    setStats(getStats());
    setSeenIds(getSeenPassageIds());

    // 다크모드 초기화
    const savedTheme = getTheme();
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
    const cleanup = watchSystemTheme(() => {
      const t = getTheme();
      if (t === "system") applyTheme(t);
    });
    return () => cleanup();
  }, []);

  const inputRefs = useRef<React.RefObject<HTMLInputElement | null>[]>([]);

  // 타이머 카운트다운 — 0이 되면 자동 제출
  useEffect(() => {
    if (screen !== "quiz" || !timerEnabled || submitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          doSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, timerEnabled, submitted, timeLeft > 0]);

  // 다크모드 순환 토글
  function toggleTheme() {
    const next: Theme = currentTheme === "light" ? "dark" : currentTheme === "dark" ? "system" : "light";
    setCurrentTheme(next);
    setTheme(next);
  }

  function startQuiz() {
    // 선택된 주제 필터링
    const filtered =
      selectedTopic === "all"
        ? samplePassages
        : samplePassages.filter((p) => p.topic === selectedTopic);

    // 안 풀었던 지문 우선 출제, 다 풀었으면 랜덤
    const unseen = filtered.filter((p) => !seenIds.has(p.id));
    const pool = unseen.length > 0 ? unseen : filtered;
    const passage = pool[Math.floor(Math.random() * pool.length)];

    setCurrentPassage(passage);
    const blanks = generateBlanks(passage.text, selectedDifficulty);

    setBlankWords(blanks);
    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setShowConfirmDialog(false);
    setHintsUsed(0);
    setShowTranslation(false);
    setShowWrongWords(false);
    setScreen("quiz");
    setCurrentTopic(passage.topic);

    if (timerEnabled) setTimeLeft(150);

    const blankedCount = blanks.filter((bw) => bw.blanked).length;
    inputRefs.current = Array.from({ length: blankedCount }, () =>
      createRef<HTMLInputElement>()
    );

    setTimeout(() => {
      inputRefs.current[0]?.current?.focus();
    }, 300);
  }

  function goHome() {
    setScreen("setup");
    setBlankWords([]);
    setSubmitted(false);
    setResult(null);
    setStats(getStats());
    setSeenIds(getSeenPassageIds()); // 풀었던 목록 갱신
  }

  function handleAnswer(index: number, answer: string) {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  }

  function trySubmit() {
    const blankedWords = blankWords.filter((bw) => bw.blanked);
    const emptyCount = blankedWords.filter((bw) => {
      const idx = blankWords.indexOf(bw);
      return !answers[idx] || answers[idx].trim() === "";
    }).length;

    if (emptyCount > 0) {
      setShowConfirmDialog(true);
    } else {
      doSubmit();
    }
  }

  function doSubmit() {
    setShowConfirmDialog(false);
    setSubmitted(true);
    const blankedWords = blankWords.filter((bw) => bw.blanked);
    let correctCount = 0;
    blankedWords.forEach((bw) => {
      const wordIndex = blankWords.indexOf(bw);
      const userAnswer = answers[wordIndex] || "";
      if (checkAnswer(bw.hidden, userAnswer)) correctCount++;
    });
    const total = blankedWords.length;
    const percentage = Math.round((correctCount / total) * 100);
    setResult({ correct: correctCount, total });

    // passageId 포함해서 저장 → 풀었던 문제 자동 추적
    saveRecord({
      date: new Date().toISOString(),
      topic: currentTopic,
      correct: correctCount,
      total,
      percentage,
      passageId: currentPassage?.id,
    });
    setStats(getStats());
    setSeenIds(getSeenPassageIds());
  }

  // 오답 단어 목록 계산
  function getWrongWords(): { original: string; visible: string; hidden: string; userAnswer: string }[] {
    if (!submitted) return [];
    return blankWords
      .filter((bw) => bw.blanked)
      .map((bw) => {
        const idx = blankWords.indexOf(bw);
        const userAnswer = answers[idx] || "";
        return { original: bw.original, visible: bw.visible, hidden: bw.hidden, userAnswer };
      })
      .filter((w) => w.userAnswer.toLowerCase() !== w.hidden.toLowerCase());
  }

  let blankCounter = -1;

  const difficultyLabels: Record<Difficulty, { name: string; desc: string }> = {
    easy: { name: "쉬움", desc: "빈칸 적고 글자 많이 보임" },
    normal: { name: "보통", desc: "단어 절반 보여줌" },
    hard: { name: "어려움", desc: "거의 모든 단어 빈칸" },
  };

  // 주제별 풀었던/전체 개수 계산
  function getTopicProgress(topic: string): { seen: number; total: number } {
    const passages = topic === "all"
      ? samplePassages
      : samplePassages.filter((p) => p.topic === topic);
    const seen = passages.filter((p) => seenIds.has(p.id)).length;
    return { seen, total: passages.length };
  }

  /* ─────────────────────────────────────────────
     퀴즈 설정 화면 (온보딩 통합 — 첫 방문자도 바로 이 화면)
  ───────────────────────────────────────────── */
  if (screen === "setup") {
    return (
      <div className="space-y-8">
        {/* 헤더 + 다크모드 토글 */}
        <div className="animate-fade-in flex justify-between items-start">
          <div className="flex-1 text-center space-y-2">
            <h1 className="text-[28px] font-bold tracking-tight">Complete the Words</h1>
            <p className="text-[14px] text-[var(--color-muted)]">
              2026 TOEFL Reading 신유형 연습
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="text-[20px] p-2 rounded-full hover:bg-[var(--color-text)]/5 transition-colors"
            title={`테마: ${currentTheme === "light" ? "라이트" : currentTheme === "dark" ? "다크" : "시스템"}`}
          >
            {currentTheme === "light" ? "☀️" : currentTheme === "dark" ? "🌙" : "💻"}
          </button>
        </div>

        {/* 통계 카드 */}
        {stats.totalGames > 0 && (
          <div className="animate-fade-in delay-1 grid grid-cols-3 gap-3">
            {[
              { value: stats.totalGames, label: "풀이 횟수", color: "text-[var(--color-text)]" },
              { value: `${stats.averagePercent}%`, label: "평균 정답률", color: "text-[var(--color-accent)]" },
              { value: `${stats.bestPercent}%`, label: "최고 기록", color: "text-[var(--color-success)]" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 text-center border border-[var(--color-glass-border)]">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-[11px] text-[var(--color-muted)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* 주제 선택 — 풀었던 개수 표시 */}
        <div className="animate-fade-in delay-2 space-y-3">
          <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">주제</h2>
          <div className="flex flex-wrap gap-2">
            {/* "전체" 버튼 */}
            {(() => {
              const progress = getTopicProgress("all");
              return (
                <button
                  onClick={() => setSelectedTopic("all")}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                    selectedTopic === "all"
                      ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                      : "glass border border-[var(--color-glass-border)] text-[var(--color-text)] hover:bg-[var(--color-glass-hover)]"
                  }`}
                >
                  전체
                  <span className={`ml-1 ${selectedTopic === "all" ? "opacity-60" : "opacity-40"}`}>
                    {progress.seen}/{progress.total}
                  </span>
                </button>
              );
            })()}
            {allTopics.map((topic) => {
              const progress = getTopicProgress(topic);
              const allDone = progress.seen === progress.total;
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                    selectedTopic === topic
                      ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                      : "glass border border-[var(--color-glass-border)] text-[var(--color-text)] hover:bg-[var(--color-glass-hover)]"
                  }`}
                >
                  {topic}
                  <span className={`ml-1 ${selectedTopic === topic ? "opacity-60" : "opacity-40"}`}>
                    {allDone ? "✓" : `${progress.seen}/${progress.total}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 난이도 선택 */}
        <div className="animate-fade-in delay-3 space-y-3">
          <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">난이도</h2>
          <div className="grid grid-cols-3 gap-3">
            {(["easy", "normal", "hard"] as Difficulty[]).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`p-4 rounded-2xl text-center transition-all border ${
                  selectedDifficulty === diff
                    ? "bg-[var(--color-text)] text-[var(--color-bg)] border-[var(--color-text)]"
                    : "glass border-[var(--color-glass-border)] hover:bg-[var(--color-glass-hover)]"
                }`}
              >
                <p className="font-semibold text-[15px]">
                  {difficultyLabels[diff].name}
                </p>
                <p className={`text-[11px] mt-1 ${
                  selectedDifficulty === diff ? "text-white/60" : "text-[var(--color-muted)]"
                }`}>
                  {difficultyLabels[diff].desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 타이머 설정 */}
        <div className="animate-fade-in delay-4 space-y-3">
          <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">타이머</h2>
          <button
            onClick={() => setTimerEnabled(!timerEnabled)}
            className={`w-full p-4 rounded-2xl text-center transition-all border ${
              timerEnabled
                ? "bg-[var(--color-text)] text-[var(--color-bg)] border-[var(--color-text)]"
                : "glass border-[var(--color-glass-border)] hover:bg-[var(--color-glass-hover)]"
            }`}
          >
            <p className="font-semibold text-[15px]">
              {timerEnabled ? "ON — 2분 30초" : "OFF"}
            </p>
            <p className={`text-[11px] mt-1 ${timerEnabled ? "text-white/60" : "text-[var(--color-muted)]"}`}>
              {timerEnabled ? "시간 초과 시 자동 제출" : "시간 제한 없이 연습"}
            </p>
          </button>
        </div>

        {/* 규칙 — 첫 방문자용 간단 안내 (stats 없을 때만) */}
        {stats.totalGames === 0 && (
          <div className="animate-fade-in delay-4 glass rounded-2xl p-5 border border-[var(--color-glass-border)] space-y-2">
            <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">Fill in the missing letters</h2>
            <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">
              학술 지문에서 단어의 뒷부분이 <span className="text-[var(--color-text)] font-medium">밑줄(___)</span>로 표시됩니다. 실제 토플처럼 빠진 글자를 직접 타이핑하세요.
            </p>
          </div>
        )}

        {/* 시작 */}
        <div className="animate-fade-in delay-5">
          <button
            onClick={startQuiz}
            className="w-full bg-[var(--color-accent)] text-white py-4 rounded-full text-[17px] font-semibold hover:bg-[var(--color-accent-hover)] transition-all active:scale-[0.98]"
          >
            퀴즈 시작
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     퀴즈 진행 화면
  ───────────────────────────────────────────── */
  const wrongWords = getWrongWords();

  return (
    <div className="space-y-6">
      {/* 상단 바 */}
      <div className="animate-fade-in flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium bg-[var(--color-text)]/5 text-[var(--color-text)] px-3 py-1 rounded-full">
            {currentTopic}
          </span>
          <span className="text-[11px] font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full">
            {difficultyLabels[selectedDifficulty].name}
          </span>
        </div>
        {timerEnabled && (
          <span className={`text-[13px] font-mono font-semibold ${timeLeft <= 30 ? "text-[var(--color-error)]" : "text-[var(--color-text)]"}`}>
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </span>
        )}
        <button
          onClick={goHome}
          className="text-[13px] text-[var(--color-accent)] font-medium hover:underline"
        >
          홈으로
        </button>
      </div>

      {/* 진행률 바 */}
      <div className="animate-fade-in space-y-1">
        <div className="h-1.5 bg-[var(--color-text)]/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-300"
            style={{
              width: `${blankWords.filter(bw => bw.blanked).length > 0
                ? Math.round((Object.values(answers).filter(v => v.trim() !== "").length / blankWords.filter(bw => bw.blanked).length) * 100)
                : 0}%`
            }}
          />
        </div>
        <p className="text-[11px] text-[var(--color-muted)] text-right">
          {Object.values(answers).filter(v => v.trim() !== "").length} / {blankWords.filter(bw => bw.blanked).length}
        </p>
      </div>

      {/* 지문 안내 — 실제 토플 형식 */}
      <p className="animate-fade-in text-[13px] text-[var(--color-muted)] font-medium">
        Fill in the missing letters in the paragraph.
      </p>

      {/* 지문 + 빈칸 — 실제 토플처럼 깔끔한 문단 */}
      <div className="animate-fade-in delay-1 glass rounded-2xl p-6 border border-[var(--color-glass-border)] leading-[1.9] text-[16px] shadow-sm">
        {blankWords.map((bw, index) => {
          if (bw.blanked) {
            blankCounter++;
            const currentBlankIndex = blankCounter;
            return (
              <span key={index}>
                <BlankInput
                  visible={bw.visible}
                  hidden={bw.hidden}
                  submitted={submitted}
                  onAnswer={(answer) => handleAnswer(index, answer)}
                  inputRef={inputRefs.current[currentBlankIndex]}
                  isLast={currentBlankIndex === inputRefs.current.length - 1}
                  onEnter={() => {
                    const nextRef = inputRefs.current[currentBlankIndex + 1];
                    if (nextRef?.current) nextRef.current.focus();
                  }}
                  wordInfo={lookupWord(bw.original)}
                  hint={lookupWord(bw.original)?.meaning}
                  onHintUsed={() => setHintsUsed((prev) => prev + 1)}
                />
                {index < blankWords.length - 1 && " "}
              </span>
            );
          }
          return (
            <span key={index}>
              <span>{bw.original}</span>
              {index < blankWords.length - 1 && " "}
            </span>
          );
        })}
      </div>

      {/* 빈칸 개수 */}
      <p className="animate-fade-in delay-2 text-[13px] text-[var(--color-muted)] text-center">
        빈칸 {blankWords.filter((bw) => bw.blanked).length}개
      </p>

      {/* 제출 / 결과 */}
      {!submitted ? (
        <div className="animate-fade-in delay-3">
          <button
            onClick={trySubmit}
            className="w-full bg-[var(--color-success)] text-white py-4 rounded-full text-[17px] font-semibold hover:bg-[var(--color-success)] transition-all active:scale-[0.98]"
          >
            제출하기
          </button>
        </div>
      ) : (
        <div className="animate-fade-in space-y-4">
          {/* 결과 + 감정 피드백 */}
          {result && (() => {
            const percentage = Math.round((result.correct / result.total) * 100);
            const feedback = getResultFeedback(percentage);
            return (
              <div
                className={`text-center py-6 rounded-2xl ${
                  result.correct === result.total
                    ? "bg-[var(--color-success)]/10 text-[var(--color-success-dark)]"
                    : result.correct >= result.total / 2
                      ? "bg-[var(--color-warning)]/10 text-[var(--color-warning-dark)]"
                      : "bg-[var(--color-error)]/10 text-[var(--color-error-dark)]"
                }`}
              >
                <p className="text-4xl mb-1">{feedback.emoji}</p>
                <p className="text-3xl font-bold">{percentage}%</p>
                <p className="text-[15px] mt-1 opacity-80">
                  {result.correct} / {result.total} 정답
                </p>
                <p className="text-[14px] mt-2 font-medium">{feedback.message}</p>
                {hintsUsed > 0 && (
                  <p className="text-[13px] mt-1 opacity-60">
                    힌트 {hintsUsed}회 사용
                  </p>
                )}
              </div>
            );
          })()}

          {/* 오답 단어 모아보기 */}
          {wrongWords.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={() => setShowWrongWords(!showWrongWords)}
                className="w-full text-center text-[13px] text-[var(--color-error)] font-medium hover:underline"
              >
                {showWrongWords ? "오답 접기" : `틀린 단어 ${wrongWords.length}개 모아보기`}
              </button>
              {showWrongWords && (
                <div className="glass rounded-2xl border border-[var(--color-glass-border)] overflow-hidden">
                  {wrongWords.map((w, i) => {
                    const wordInfo = lookupWord(w.original);
                    return (
                      <div
                        key={i}
                        className={`p-4 ${i > 0 ? "border-t border-[var(--color-glass-border)]" : ""}`}
                      >
                        <div className="flex items-baseline justify-between">
                          <p className="text-[15px] font-semibold text-[var(--color-text)]">
                            {w.visible}<span className="text-[var(--color-success-dark)]">{w.hidden}</span>
                          </p>
                          {w.userAnswer && (
                            <p className="text-[13px] text-[var(--color-error)] line-through">
                              {w.visible}{w.userAnswer}
                            </p>
                          )}
                        </div>
                        {wordInfo && (
                          <p className="text-[12px] text-[var(--color-muted)] mt-1">
                            {wordInfo.meaning} · {wordInfo.pronunciation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* 한국어 번역 토글 */}
          {currentPassage?.translation && (
            <div className="space-y-2">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="text-[13px] text-[var(--color-accent)] font-medium hover:underline w-full text-center"
              >
                {showTranslation ? "번역 숨기기" : "한국어 번역 보기"}
              </button>
              {showTranslation && (
                <div className="glass rounded-2xl p-5 border border-[var(--color-glass-border)] text-[14px] text-[var(--color-muted)] leading-relaxed">
                  {currentPassage.translation}
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={goHome}
              className="glass border border-[var(--color-glass-border)] text-[var(--color-text)] py-4 rounded-full text-[17px] font-semibold hover:bg-[var(--color-glass-hover)] transition-all active:scale-[0.98]"
            >
              홈으로
            </button>
            <button
              onClick={startQuiz}
              className="bg-[var(--color-accent)] text-white py-4 rounded-full text-[17px] font-semibold hover:bg-[var(--color-accent-hover)] transition-all active:scale-[0.98]"
            >
              다음 문제
            </button>
          </div>
        </div>
      )}

      {/* 제출 확인 모달 */}
      {showConfirmDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-overlay)] backdrop-blur-sm">
          <div className="glass rounded-2xl p-6 mx-6 max-w-sm w-full border border-[var(--color-glass-border)] space-y-4 shadow-xl">
            <p className="text-[17px] font-semibold text-center">
              빈칸 {blankWords.filter(bw => bw.blanked).filter(bw => {
                const idx = blankWords.indexOf(bw);
                return !answers[idx] || answers[idx].trim() === "";
              }).length}개가 비어있습니다
            </p>
            <p className="text-[14px] text-[var(--color-muted)] text-center">
              그래도 제출하시겠습니까?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="glass border border-[var(--color-glass-border)] text-[var(--color-text)] py-3 rounded-full text-[15px] font-semibold hover:bg-[var(--color-glass-hover)] transition-all"
              >
                돌아가기
              </button>
              <button
                onClick={doSubmit}
                className="bg-[var(--color-warning)] text-white py-3 rounded-full text-[15px] font-semibold hover:bg-[var(--color-warning)] transition-all"
              >
                제출하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
