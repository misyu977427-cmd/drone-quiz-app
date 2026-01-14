"use client";

import { useState, useEffect } from "react";
import { quizData as questions, type Question } from "./data"; 
import { Trophy, CheckCircle, XCircle, RefreshCw, Play, ExternalLink } from "lucide-react";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [quizList, setQuizList] = useState<readonly Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const startQuiz = () => {
    // 50問のプールから25問をランダム抽出
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 25);
    setQuizList(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setIsStarted(true);
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizList[currentIdx].correctAnswer) setScore(score + 1);
  };

  // --- 提供された楽天アフィリエイトリンクを反映 ---
  const RakutenAffiliate = () => (
    <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-orange-500/30 text-center">
      <p className="text-xs text-orange-400 mb-2">【PR】学科試験対策の必読書</p>
      <a 
        href="https://hb.afl.rakuten.co.jp/ichiba/4fc849f0.0ba0a5d5.4fc849f1.faf6e450/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18337808%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D"
        target="_blank" 
        rel="nofollow sponsored noopener"
        className="text-sm font-bold text-white hover:text-orange-300 flex flex-col items-center gap-1"
      >
        <span>本試験型ドローン等操縦士二等学科試験問題集</span>
        <span className="flex items-center gap-1 text-xs text-blue-400">楽天で詳細を見る <ExternalLink size={12} /></span>
      </a>
    </div>
  );

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          二等無人航空機操縦士<br/>学科試験対策
        </h1>
        <p className="text-slate-400 mb-8 text-sm">教則第4版（2025年2月施行）完全準拠</p>
        <button onClick={startQuiz} className="w-full max-w-xs bg-blue-600 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
          <Play fill="currentColor" /> 模擬試験を開始
        </button>
        <RakutenAffiliate />
      </div>
    );
  }

  if (showResult) {
    const isPass = score >= 20;
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Trophy className={`w-16 h-16 mb-4 ${isPass ? 'text-yellow-400' : 'text-slate-500'}`} />
        <h2 className="text-2xl font-bold mb-4">{isPass ? "合格" : "不合格"}</h2>
        <p className="text-4xl font-bold mb-8 text-blue-400">{score} <span className="text-lg text-slate-500">/ 25</span></p>
        <button onClick={startQuiz} className="w-full max-w-xs bg-slate-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-4">
          <RefreshCw /> もう一度挑戦
        </button>
        <RakutenAffiliate />
      </div>
    );
  }

  const currentQ = quizList[currentIdx];
  if (quizList.length === 0) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-xl mx-auto py-6">
        <div className="flex justify-between text-xs text-slate-500 mb-6">
          <span className="border border-blue-900 px-2 py-0.5 rounded text-blue-400">教則第4版対応</span>
          <span>{currentIdx + 1} / 25</span>
        </div>
        <h2 className="text-lg font-bold mb-8">{currentQ.text}</h2>
        <div className="space-y-3">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected === null ? "bg-slate-800 border-slate-700 active:bg-slate-700" :
                i === currentQ.correctAnswer ? "bg-green-900/50 border-green-500" :
                selected === i ? "bg-red-900/50 border-red-500" : "bg-slate-900 border-slate-800 opacity-40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className="mt-8 p-5 bg-slate-900 rounded-xl border border-blue-900/30">
            <p className="text-sm text-slate-300 mb-6">{currentQ.explanation}</p>
            <button
              onClick={() => currentIdx === quizList.length - 1 ? setShowResult(true) : (setCurrentIdx(currentIdx + 1), setSelected(null))}
              className="w-full bg-white text-slate-950 py-3 rounded-lg font-bold"
            >
              次へ進む
            </button>
          </div>
        )}
      </div>
    </div>
  );
}