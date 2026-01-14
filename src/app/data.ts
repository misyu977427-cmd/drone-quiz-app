// src/app/data.ts
export type Question = {
  readonly id: number;
  readonly text: string;
  readonly options: readonly string[]; // choices から変更
  readonly correctAnswer: number;      // answerIndex から変更
  readonly reference: string;
  readonly explanation: string;
};

export const quizData: readonly Question[] = [
  {
    id: 1,
    text: "教則第4版で新設された「レベル3.5飛行」の要件として、正しいものはどれか？",
    options: ["補助者の配置と看板の設置", "技能証明の保有と機上カメラでの安全確認", "機体認証の取得は不要"],
    correctAnswer: 1,
    reference: "3.1.2 (2) 4) c",
    explanation: "レベル3.5飛行は、機上カメラの活用や技能証明の保有を条件に、補助者や看板の配置を不要とした制度です。"
  },
  {
    id: 2,
    text: "アルコール又は薬物の影響下で無人航空機を飛行させた場合の「行政処分の点数」は？",
    options: ["5点", "10点", "15点"],
    correctAnswer: 2,
    reference: "3.1.2 (3) 5)",
    explanation: "飲酒運転等は15点となり、技能証明の「効力の取消」に該当する極めて重い違反です。"
  },
  {
    id: 3,
    text: "特定飛行において、飛行前確認や衝突予防措置を行わなかった場合の行政処分の点数は？",
    options: ["1点", "10点", "14点"],
    correctAnswer: 2,
    reference: "3.1.2 (3) 5)",
    explanation: "飛行前確認や衝突予防措置を怠ると14点となり、効力停止の対象となります。"
  }
];