"use client";

import { useState, useRef, useEffect, createRef } from "react";
import { generateBlanks, checkAnswer } from "@/lib/blank-generator";
import type { Difficulty } from "@/lib/blank-generator";
import { samplePassages } from "@/lib/sample-passages";
import { saveRecord, getStats } from "@/lib/quiz-history";
import { lookupWord } from "@/lib/word-data";
import { getTheme, setTheme, applyTheme, watchSystemTheme } from "@/lib/theme";
import type { Theme } from "@/lib/theme";
import BlankInput from "@/components/BlankInput";
import type { BlankWord } from "@/lib/blank-generator";

const allTopics = [...new Set(samplePassages.map((p) => p.topic))];

type Screen = "onboarding" | "setup" | "quiz";

export default function QuizPage() {
  const [screen, setScreen] = useState<Screen>("onboarding");
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
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // 제출 확인 모달
  const [timerEnabled, setTimerEnabled] = useState(false); // 타이머 ON/OFF
  const [timeLeft, setTimeLeft] = useState(0); // 남은 시간 (초)
  const [currentTheme, setCurrentTheme] = useState<Theme>("system"); // 다크모드 테마
  const [hintsUsed, setHintsUsed] = useState(0); // 힌트 사용 횟수
  const [currentPassage, setCurrentPassage] = useState<typeof samplePassages[0] | null>(null); // 현재 지문 (번역 표시용)
  const [showTranslation, setShowTranslation] = useState(false); // 한국어 번역 토글

  useEffect(() => {
    setStats(getStats());
    const seen = localStorage.getItem("toefl-vocab-onboarded");
    if (seen === "true") setScreen("setup");

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
          doSubmit(); // 시간 초과 시 자동 제출
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, timerEnabled, submitted, timeLeft > 0]);

  // 다크모드 순환 토글: light → dark → system → light ...
  function toggleTheme() {
    const next: Theme = currentTheme === "light" ? "dark" : currentTheme === "dark" ? "system" : "light";
    setCurrentTheme(next);
    setTheme(next);
  }

  function finishOnboarding() {
    localStorage.setItem("toefl-vocab-onboarded", "true");
    setScreen("setup");
  }

  function startQuiz() {
    const filtered =
      selectedTopic === "all"
        ? samplePassages
        : samplePassages.filter((p) => p.topic === selectedTopic);
    const passage = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentPassage(passage); // 번역 표시용 현재 지문 저장
    const blanks = generateBlanks(passage.text, selectedDifficulty);

    setBlankWords(blanks);
    setAnswers({});
    setSubmitted(false);
    setResult(null);
    setShowConfirmDialog(false);
    setHintsUsed(0); // 힌트 사용 횟수 초기화
    setShowTranslation(false); // 번역 토글 초기화
    setScreen("quiz");
    setCurrentTopic(passage.topic);

    // 타이머 설정 — 켜져 있으면 150초(2분 30초)
    if (timerEnabled) setTimeLeft(150);

    const blankedCount = blanks.filter((bw) => bw.blanked).length;
    inputRefs.current = Array.from({ length: blankedCount }, () =>
      createRef<HTMLInputElement>()
    );

    // 첫 빈칸 자동 포커스 (렌더링 후 실행되도록 setTimeout)
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
  }

  function handleAnswer(index: number, answer: string) {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  }

  // 제출 버튼 클릭 시 — 빈 빈칸이 있으면 확인 모달 표시
  function trySubmit() {
    const blankedWords = blankWords.filter((bw) => bw.blanked);
    const emptyCount = blankedWords.filter((bw) => {
      const idx = blankWords.indexOf(bw);
      return !answers[idx] || answers[idx].trim() === "";
    }).length;

    if (emptyCount > 0) {
      setShowConfirmDialog(true); // 빈칸 있으면 확인 모달
    } else {
      doSubmit(); // 다 채웠으면 바로 제출
    }
  }

  // 실제 제출 처리
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
    saveRecord({ date: new Date().toISOString(), topic: currentTopic, correct: correctCount, total, percentage });
    setStats(getStats());
  }

  let blankCounter = -1;

  const difficultyLabels: Record<Difficulty, { name: string; desc: string }> = {
    easy: { name: "쉬움", desc: "빈칸 적고 글자 많이 보임" },
    normal: { name: "보통", desc: "단어 절반 보여줌" },
    hard: { name: "어려움", desc: "거의 모든 단어 빈칸" },
  };

  /* ─────────────────────────────────────────────
     온보딩 화면
  ───────────────────────────────────────────── */
  if (screen === "onboarding") {
    return (
      <div className="space-y-10">
        {/* 히어로 */}
        <div className="animate-fade-in text-center pt-8 space-y-4">
          <h1 className="text-[42px] font-bold tracking-tight leading-tight">
            Complete<br />the Words.
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            2026 TOEFL Reading 신유형을 연습하세요.
          </p>
        </div>

        {/* 핵심 메시지 */}
        <div className="animate-fade-in delay-1 glass rounded-2xl p-6 space-y-4 border border-[var(--color-glass-border)]">
          <h2 className="text-xl font-semibold">
            2026년, TOEFL이 바뀝니다.
          </h2>
          <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
            ETS는 Reading 섹션에 <span className="text-[var(--color-text)] font-medium">Complete the Words</span> 유형을
            새로 추가했습니다. 학술 지문에서 단어의 뒷부분이 지워지고,
            <span className="text-[var(--color-text)] font-medium"> 직접 타이핑</span>해야 합니다.
          </p>
          <p className="text-[15px] text-[var(--color-muted)] leading-relaxed">
            객관식이 아닙니다. <span className="text-[var(--color-text)] font-medium">정확한 철자</span>를 알아야 풀 수 있습니다.
          </p>
        </div>

        {/* 차별점 3가지 */}
        <div className="space-y-4">
          {[
            {
              title: "실제 시험과 동일한 형식",
              desc: "ETS 공식 규칙 그대로. 첫 문장은 온전히, 이후 단어의 뒷부분이 빈칸.",
            },
            {
              title: "TOEFL 빈출 학술 지문",
              desc: "생물학, 역사, 천문학 등 시험에 나오는 주제별 지문 35개+",
            },
            {
              title: "내 실력을 추적",
              desc: "풀이 횟수, 평균 정답률, 최고 기록을 자동 저장.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`animate-fade-in delay-${i + 2} glass rounded-2xl p-5 border border-[var(--color-glass-border)]`}
            >
              <p className="font-semibold text-[15px]">{item.title}</p>
              <p className="text-[13px] text-[var(--color-muted)] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 대상 */}
        <div className="animate-fade-in delay-5 space-y-3">
          <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider">
            이런 분들을 위해 만들었습니다
          </h3>
          <ul className="text-[15px] text-[var(--color-text)] space-y-2">
            <li className="flex gap-2">
              <span className="text-[var(--color-muted)]">—</span>
              2026 TOEFL을 준비하는데, 신유형 연습할 곳이 없는 분
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-muted)]">—</span>
              객관식은 잘 맞는데, 직접 쓰라고 하면 철자가 헷갈리는 분
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--color-muted)]">—</span>
              학술 영어 어휘력을 빠르게 끌어올리고 싶은 분
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="animate-fade-in delay-6 pt-2">
          <button
            onClick={finishOnboarding}
            className="w-full bg-[var(--color-accent)] text-white py-4 rounded-full text-[17px] font-semibold hover:bg-[var(--color-accent-hover)] transition-all active:scale-[0.98]"
          >
            시작하기
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     퀴즈 설정 화면
  ───────────────────────────────────────────── */
  if (screen === "setup") {
    return (
      <div className="space-y-8">
        {/* 헤더 + 다크모드 토글 */}
        <div className="animate-fade-in flex justify-between items-start">
          <div className="flex-1 text-center space-y-2">
            <h1 className="text-[28px] font-bold tracking-tight">Complete the Words</h1>
            <p className="text-[15px] text-[var(--color-muted)]">주제와 난이도를 선택하세요</p>
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

        {/* 주제 선택 */}
        <div className="animate-fade-in delay-2 space-y-3">
          <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">주제</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic("all")}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                selectedTopic === "all"
                  ? "bg-[var(--color-text)] text-white"
                  : "glass border border-[var(--color-glass-border)] text-[var(--color-text)] hover:bg-[var(--color-glass-hover)]"
              }`}
            >
              전체
            </button>
            {allTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                  selectedTopic === topic
                    ? "bg-[var(--color-text)] text-white"
                    : "glass border border-[var(--color-glass-border)] text-[var(--color-text)] hover:bg-[var(--color-glass-hover)]"
                }`}
              >
                {topic}
                <span className="ml-1 opacity-50">
                  {samplePassages.filter((p) => p.topic === topic).length}
                </span>
              </button>
            ))}
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
                    ? "bg-[var(--color-text)] text-white border-[var(--color-text)]"
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
                ? "bg-[var(--color-text)] text-white border-[var(--color-text)]"
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

        {/* 규칙 */}
        <div className="animate-fade-in delay-4 glass rounded-2xl p-5 border border-[var(--color-glass-border)] space-y-3">
          <h2 className="text-[13px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">규칙</h2>
          <ul className="text-[14px] text-[var(--color-text)] space-y-2">
            <li className="flex gap-2"><span className="text-[var(--color-muted)]">1.</span> 첫 문장은 온전히 제공됩니다</li>
            <li className="flex gap-2"><span className="text-[var(--color-muted)]">2.</span> 이후 단어의 뒷부분이 지워집니다</li>
            <li className="flex gap-2"><span className="text-[var(--color-muted)]">3.</span> 빈칸에 정확한 철자를 입력하세요</li>
            <li className="flex gap-2"><span className="text-[var(--color-muted)]">4.</span> 대소문자는 구분하지 않습니다</li>
          </ul>
        </div>

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
        {/* 타이머 표시 */}
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

      {/* 지문 + 빈칸 */}
      <div className="animate-fade-in delay-1 glass rounded-2xl p-6 border border-[var(--color-glass-border)] leading-[2.5] text-[17px] shadow-sm">
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
          {result && (
            <div
              className={`text-center py-6 rounded-2xl ${
                result.correct === result.total
                  ? "bg-[var(--color-success)]/10 text-[var(--color-success-dark)]"
                  : result.correct >= result.total / 2
                    ? "bg-[var(--color-warning)]/10 text-[var(--color-warning-dark)]"
                    : "bg-[var(--color-error)]/10 text-[var(--color-error-dark)]"
              }`}
            >
              <p className="text-3xl font-bold">
                {Math.round((result.correct / result.total) * 100)}%
              </p>
              <p className="text-[15px] mt-1 opacity-80">
                {result.correct} / {result.total} 정답
              </p>
              {/* 힌트 사용 횟수 표시 */}
              {hintsUsed > 0 && (
                <p className="text-[13px] mt-1 opacity-60">
                  힌트 {hintsUsed}회 사용
                </p>
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
