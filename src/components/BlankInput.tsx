"use client";

import { useState } from "react";
import type { WordInfo } from "@/lib/word-data";

interface BlankInputProps {
  visible: string; // 보이는 앞부분
  hidden: string; // 정답 뒷부분
  submitted: boolean; // 제출 완료 여부
  onAnswer: (answer: string) => void;
  onEnter?: () => void; // 엔터 시 다음 빈칸으로
  inputRef?: React.RefObject<HTMLInputElement | null>;
  isLast?: boolean; // 마지막 빈칸 여부 — 모바일 키보드에 "완료/다음" 표시용
  wordInfo?: WordInfo; // 단어 해설 정보 (뜻, 발음, 예문)
  hint?: string; // 힌트 (한국어 뜻)
  onHintUsed?: () => void; // 힌트 사용 시 부모에게 알림
}

export default function BlankInput({
  visible,
  hidden,
  submitted,
  onAnswer,
  onEnter,
  inputRef,
  isLast,
  wordInfo,
  hint,
  onHintUsed,
}: BlankInputProps) {
  const [value, setValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const isCorrect = submitted && value.toLowerCase() === hidden.toLowerCase();
  const isWrong = submitted && value.toLowerCase() !== hidden.toLowerCase();

  return (
    <span className="inline-flex flex-wrap items-baseline gap-0 relative">
      {/* 보이는 앞부분 */}
      <span className="text-[var(--color-text)]">{visible}</span>

      {/* 힌트 버튼 — 제출 전에만 표시 */}
      {!submitted && hint && (
        <button
          type="button"
          onClick={() => {
            if (!showHint && onHintUsed) onHintUsed(); // 처음 열 때만 카운트
            setShowHint(!showHint);
          }}
          className="text-[11px] w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold flex-shrink-0 hover:bg-[var(--color-accent)]/20 transition-colors"
          title="힌트 보기"
        >
          ?
        </button>
      )}

      {/* 빈칸 입력 */}
      <input
        ref={inputRef}
        type="text"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onAnswer(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) onEnter();
          if (e.key === "Tab") {
            e.preventDefault(); // 기본 Tab 동작 방지 — 다음 빈칸으로 이동
            if (onEnter) onEnter();
          }
        }}
        inputMode="text" // 모바일에서 텍스트 키보드 강제 표시
        enterKeyHint={isLast ? "done" : "next"} // 모바일 키보드에 "다음" 또는 "완료" 표시
        disabled={submitted}
        placeholder={"·".repeat(hidden.length)}
        className={`border-b-2 px-0.5 min-h-[36px] py-1 text-center transition-all duration-200 bg-transparent ${
          submitted
            ? isCorrect
              ? "border-[var(--color-success)] text-[var(--color-success-dark)] font-semibold"
              : "border-[var(--color-error)] text-[var(--color-error)] line-through"
            : "border-[var(--color-accent)]/40 focus:border-[var(--color-accent)]"
        }`}
        style={{ width: `${Math.max(hidden.length, 3) * 0.75}em` }}
      />

      {/* 오답이면 정답 표시 */}
      {isWrong && (
        <span className="text-[var(--color-success-dark)] text-[13px] font-semibold ml-0.5">
          {hidden}
        </span>
      )}

      {/* 힌트 텍스트 — 제출 전, 힌트 버튼 눌렀을 때 표시 */}
      {showHint && !submitted && hint && (
        <span className="text-[11px] text-[var(--color-accent)] ml-1">
          {hint}
        </span>
      )}

      {/* 오답 해설 버튼 — 탭하면 뜻/발음/예문 표시 */}
      {isWrong && wordInfo && (
        <button
          type="button"
          onClick={() => setShowExplanation(!showExplanation)}
          className="text-[11px] text-[var(--color-accent)] ml-1 hover:underline"
        >
          {showExplanation ? "접기" : "해설"}
        </button>
      )}

      {/* 오답 해설 카드 — 뜻, 발음, 예문 표시 */}
      {showExplanation && isWrong && wordInfo && (
        <span className="basis-full block mt-1 mb-1 px-2 py-1.5 rounded-lg bg-[var(--color-accent)]/5 text-[12px] leading-relaxed">
          <span className="block font-semibold text-[var(--color-text)]">{wordInfo.meaning}</span>
          <span className="block text-[var(--color-muted)]">{wordInfo.pronunciation}</span>
          <span className="block text-[var(--color-muted)] italic">{wordInfo.example}</span>
        </span>
      )}
    </span>
  );
}
