"use client";

import { useState, useEffect } from "react";
import { quizData as questions, type Question } from "./data"; 
import { Trophy, CheckCircle, XCircle, RefreshCw } from "lucide-react";

export default function Home() {
  const [quizList, setQuizList] = useState<readonly Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 25);
    setQuizList(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizList[currentIdx].correctAnswer) setScore(score + 1);
  };

  if (quizList.length === 0) return <div className="p-8 text-white">Loading...</div>;

  const currentQ = quizList[currentIdx];

  if (showResult) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
        <h2 className="text-3xl font-bold mb-8">スコア: {score} / 25</h2>
        <button onClick={startQuiz} className="bg-blue-600 px-8 py-3 rounded-lg flex items-center gap-2">
          <RefreshCw /> 再挑戦する
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex justify-between text-slate-400 mb-4">
          <span>教則第4版対応（ランダム出題）</span>
          <span>{currentIdx + 1} / 25</span>
        </div>
        <h2 className="text-xl font-bold mb-8">{currentQ.text}</h2>
        <div className="space-y-3">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selected === null ? "bg-slate-800 border-slate-700 hover:border-blue-500" :
                i === currentQ.correctAnswer ? "bg-green-900 border-green-500" :
                selected === i ? "bg-red-900 border-red-500" : "bg-slate-900 border-slate-800 opacity-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className="mt-8 p-6 bg-slate-900 rounded-lg border border-blue-900/30">
            <p className="text-sm text-slate-300 mb-6">{currentQ.explanation}</p>
            <button
              onClick={() => currentIdx === quizList.length - 1 ? setShowResult(true) : (setCurrentIdx(currentIdx + 1), setSelected(null))}
              className="w-full bg-white text-slate-900 py-3 rounded-lg font-bold"
            >
              {currentIdx === quizList.length - 1 ? "結果を見る" : "次へ進む"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}