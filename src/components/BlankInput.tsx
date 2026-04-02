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
  isLast?: boolean; // 마지막 빈칸 여부
  wordInfo?: WordInfo; // 단어 해설 정보
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

  // 실제 토플처럼 밑줄 개수 = 빠진 글자 수
  const underscores = "_".repeat(hidden.length);

  return (
    <span className="blank-word-wrapper">
      {/* 보이는 앞부분 — 빈칸과 붙어서 하나의 단어 */}
      <span className="text-[var(--color-text)]">{visible}</span>

      {/* 빈칸 입력 — 실제 토플처럼 밑줄이 텍스트에 녹아드는 스타일 */}
      <input
        ref={inputRef}
        type="text"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        maxLength={hidden.length + 2}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onAnswer(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) onEnter();
          if (e.key === "Tab") {
            e.preventDefault();
            if (onEnter) onEnter();
          }
        }}
        inputMode="text"
        enterKeyHint={isLast ? "done" : "next"}
        disabled={submitted}
        placeholder={underscores}
        className={`blank-input ${
          submitted
            ? isCorrect
              ? "blank-correct"
              : "blank-wrong"
            : "blank-active"
        }`}
        style={{ width: `${hidden.length * 0.62}em`, minWidth: "1.2em" }}
      />

      {/* 제출 후: 오답이면 정답 표시 */}
      {isWrong && (
        <span className="text-[var(--color-success-dark)] font-semibold text-[0.85em]">
          {hidden}
        </span>
      )}

      {/* 제출 전: 힌트 버튼 — 단어 바로 뒤에 작게 */}
      {!submitted && hint && (
        <button
          type="button"
          onClick={() => {
            if (!showHint && onHintUsed) onHintUsed();
            setShowHint(!showHint);
          }}
          className="blank-hint-btn"
          title="힌트 보기"
        >
          ?
        </button>
      )}

      {/* 힌트 텍스트 */}
      {showHint && !submitted && hint && (
        <span className="text-[0.65em] text-[var(--color-accent)] ml-0.5 align-super">
          {hint}
        </span>
      )}

      {/* 오답 해설 버튼 */}
      {isWrong && wordInfo && (
        <button
          type="button"
          onClick={() => setShowExplanation(!showExplanation)}
          className="text-[0.7em] text-[var(--color-accent)] ml-1 hover:underline"
        >
          {showExplanation ? "접기" : "해설"}
        </button>
      )}

      {/* 오답 해설 카드 */}
      {showExplanation && isWrong && wordInfo && (
        <span className="block mt-1 mb-1 px-2 py-1.5 rounded-lg bg-[var(--color-accent)]/5 text-[12px] leading-relaxed">
          <span className="block font-semibold text-[var(--color-text)]">{wordInfo.meaning}</span>
          <span className="block text-[var(--color-muted)]">{wordInfo.pronunciation}</span>
          <span className="block text-[var(--color-muted)] italic">{wordInfo.example}</span>
        </span>
      )}
    </span>
  );
}
