"use client";

import { useState } from "react";

interface BlankInputProps {
  visible: string; // 보이는 앞부분
  hidden: string; // 정답 뒷부분
  submitted: boolean; // 제출 완료 여부
  onAnswer: (answer: string) => void;
  onEnter?: () => void; // 엔터 시 다음 빈칸으로
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export default function BlankInput({
  visible,
  hidden,
  submitted,
  onAnswer,
  onEnter,
  inputRef,
}: BlankInputProps) {
  const [value, setValue] = useState("");

  const isCorrect = submitted && value.toLowerCase() === hidden.toLowerCase();
  const isWrong = submitted && value.toLowerCase() !== hidden.toLowerCase();

  return (
    <span className="inline-flex items-baseline gap-0">
      {/* 보이는 앞부분 */}
      <span className="text-[#1d1d1f]">{visible}</span>
      {/* 빈칸 입력 */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onAnswer(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) onEnter();
        }}
        disabled={submitted}
        placeholder={"·".repeat(hidden.length)}
        className={`border-b-2 px-0.5 text-center transition-all duration-200 bg-transparent ${
          submitted
            ? isCorrect
              ? "border-[#34c759] text-[#248a3d] font-semibold"
              : "border-[#ff3b30] text-[#ff3b30] line-through"
            : "border-[#0071e3]/40 focus:border-[#0071e3]"
        }`}
        style={{ width: `${Math.max(hidden.length, 2) * 0.75}em` }}
      />
      {/* 오답이면 정답 표시 */}
      {isWrong && (
        <span className="text-[#248a3d] text-[13px] font-semibold ml-0.5">
          {hidden}
        </span>
      )}
    </span>
  );
}
