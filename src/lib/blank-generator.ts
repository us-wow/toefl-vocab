// 빈칸 처리된 단어 하나의 정보
export interface BlankWord {
  original: string; // 원래 단어 (예: "studied")
  visible: string; // 보이는 앞부분 (예: "stu")
  hidden: string; // 숨겨진 뒷부분 (예: "died")
  blanked: boolean; // 빈칸 처리 여부
  sentenceIndex: number; // 몇 번째 문장인지
  wordIndex: number; // 문장 내 몇 번째 단어인지
}

// 난이도 설정
// easy: 홀수 인덱스 단어만 (기본, 빈칸 적음)
// normal: 홀수 인덱스 단어 + 보이는 부분이 좀 더 짧음
// hard: 거의 모든 단어에 빈칸 + 보이는 부분 최소화
export type Difficulty = "easy" | "normal" | "hard";

/**
 * 문단을 받아서 Complete the Words 형식으로 빈칸 처리
 *
 * 규칙 (2026 토플 실제 시험 형식 기반):
 * 1. 첫 문장은 온전히 제공 (빈칸 없음)
 * 2. 두 번째 문장부터 난이도에 따라 빈칸 생성
 *    - easy: 홀수 인덱스(1,3,5...) 단어만, 앞 절반 보여줌
 *    - normal: 홀수 인덱스 단어, 앞 1/3만 보여줌 (숨기는 부분이 더 김)
 *    - hard: 2글자 이상인 거의 모든 단어, 앞 1/3만 보여줌
 */
export function generateBlanks(
  passage: string,
  difficulty: Difficulty = "easy"
): BlankWord[] {
  // 문단을 문장 단위로 분리 (마침표/물음표/느낌표 기준)
  const sentences = passage.match(/[^.!?]+[.!?]+/g) || [passage];
  const result: BlankWord[] = [];

  sentences.forEach((sentence, sentenceIndex) => {
    const words = sentence.trim().split(/\s+/);

    words.forEach((word, wordIndex) => {
      // 첫 문장은 어떤 난이도든 빈칸 없음
      if (sentenceIndex === 0) {
        result.push({ original: word, visible: word, hidden: "", blanked: false, sentenceIndex, wordIndex });
        return;
      }

      // 난이도별 빈칸 대상 결정
      let shouldBlank = false;
      if (difficulty === "easy") {
        // 홀수 인덱스만 (1,3,5...)
        shouldBlank = wordIndex % 2 === 1;
      } else if (difficulty === "normal") {
        // 홀수 인덱스만, 숨기는 비율만 다름
        shouldBlank = wordIndex % 2 === 1;
      } else {
        // hard: 첫 단어 빼고 거의 전부
        shouldBlank = wordIndex >= 1;
      }

      if (shouldBlank && word.length >= 2) {
        // 난이도별 보여주는 비율 결정
        // easy: 절반 보여줌 / normal, hard: 1/3만 보여줌
        const visibleRatio = difficulty === "easy" ? 0.5 : 1 / 3;
        const splitPoint = Math.max(1, Math.ceil(word.length * visibleRatio));

        result.push({
          original: word,
          visible: word.slice(0, splitPoint),
          hidden: word.slice(splitPoint),
          blanked: true,
          sentenceIndex,
          wordIndex,
        });
      } else {
        result.push({ original: word, visible: word, hidden: "", blanked: false, sentenceIndex, wordIndex });
      }
    });
  });

  return result;
}

/**
 * 사용자 입력이 정답인지 체크
 * 대소문자 무시, 정확한 철자만 정답
 */
export function checkAnswer(correct: string, userInput: string): boolean {
  return correct.toLowerCase() === userInput.toLowerCase();
}
