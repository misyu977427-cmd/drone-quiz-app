'use client';

import React, { useState, useEffect } from 'react';
import { quizData, Question } from './data';

// --- 定数（不変データ）の設定 ---
const PASS_THRESHOLD = 20; 
const RAKUTEN_URL = "https://hb.afl.rakuten.co.jp/ichiba/4fc849f0.0ba0a5d5.4fc849f1.faf6e450/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18337808%2F&link_type=picttext";
const SUN_TV_URL = "https://academy.sorashoku.com/sun-tv/2025/";

export default function DroneQuiz() {
  // --- 状態管理 (State) ---
  const [appState, setAppState] = useState<'start' | 'quiz' | 'result'>('start');
  const [shuffledQuestions, setShuffledQuestions] = useState<readonly Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  // --- 1. 初回マウント時のみ実行される非破壊的シャッフル ---
  useEffect(() => {
    // スプレッド構文でコピーを作成してからソートし、不変性を維持
    const newOrder = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(newOrder);
  }, []);

  // --- 2. 計算値 ---
  const currentQuestion = shuffledQuestions[currentIndex];
  const isFinished = currentIndex === shuffledQuestions.length - 1 && selectedAnswer !== null;

  // --- 3. イベントハンドラ ---
  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setAppState('result');
    }
  };

  if (!currentQuestion && appState !== 'start') return null;

  // --- START SCREEN (スタート画面) ---
  if (appState === 'start') {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h1 className="text-2xl font-black text-center mb-2 text-slate-800">二等無人航空機操縦士</h1>
          <p className="text-center text-blue-600 font-bold mb-6 text-sm">学科試験対策クイズ<br/>(教則 第3版 準拠 / 全25問)</p>
          
          <div className="bg-slate-50 p-6 rounded-xl space-y-4 mb-8">
            <h2 className="font-bold text-slate-800 border-b border-slate-200 pb-2">【 学習の進め方・ルール 】</h2>
            <ul className="text-xs leading-relaxed text-slate-600 space-y-3">
              <li><span className="font-bold text-slate-800">1. ランダム出題システム</span><br/>起動のたびに全25問の順番がシャッフルされます‼</li>
              <li><span className="font-bold text-slate-800">2. 分かりやすい解説付き！</span><br/>回答後、すぐに解説を表示‼</li>
              <li><span className="font-bold text-slate-800">3. 合格判定スコア</span><br/>本試験を想定し、{PASS_THRESHOLD}問以上(正解率80%以上)の正解で合格圏内です‼通勤や休憩中の反復学習に最適です</li>
            </ul>
          </div>

          <button 
            onClick={() => setAppState('quiz')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            学習を開始する
          </button>
        </div>
      </main>
    );
  }

  // --- RESULT SCREEN (リザルト画面) ---
  if (appState === 'result') {
    const isPass = score >= PASS_THRESHOLD;
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-gray-400 font-bold mb-2 text-xs uppercase tracking-widest">Test Result</h2>
          <div className="text-6xl font-black mb-4 text-slate-800">{score} <span className="text-2xl text-gray-300">/ {shuffledQuestions.length}</span></div>
          <div className={`text-2xl font-bold mb-8 ${isPass ? 'text-green-600' : 'text-blue-600'}`}>
            {isPass ? '【 合格圏内 】' : '【 あと一歩 】'}
          </div>
          
          <div className="py-6 border-t border-b border-gray-100 mb-8">
            <p className="text-[10px] font-bold text-orange-500 mb-3 uppercase tracking-wider"></p>
            <a href={SUN_TV_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-600 hover:underline leading-tight block">
              サンテレビドローンキャンプ 2025<br/><span className="text-sm">公式サイトをチェック</span>
            </a>
          </div>

          <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
            最初から解き直す
          </button>
        </div>
      </main>
    );
  }

  // --- QUIZ SCREEN (進行中画面) ---
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 font-sans text-slate-900">
      <div className="max-w-md mx-auto">
        <header className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-slate-800">🚁 学科対策クイズ</span>
          <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">
            Q.{currentIndex + 1} / {shuffledQuestions.length}
          </span>
        </header>

        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 min-h-[120px] flex items-center">
          <p className="text-lg font-medium leading-relaxed">{currentQuestion.text}</p>
        </section>

        <nav className="space-y-3">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left border-2 rounded-xl transition-all font-medium ${
                selectedAnswer === index 
                  ? (index === currentQuestion.answerIndex ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                  : 'border-white bg-white hover:border-slate-200'
              }`}
            >
              <span className={`mr-2 ${selectedAnswer === index ? 'opacity-100' : 'text-slate-400'}`}>{index + 1}.</span> {choice}
            </button>
          ))}
        </nav>

        {selectedAnswer !== null && (
          <article className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
            <p className={`font-bold mb-2 text-xl ${selectedAnswer === currentQuestion.answerIndex ? 'text-green-600' : 'text-red-600'}`}>
              {selectedAnswer === currentQuestion.answerIndex ? '✅ 正解' : '❌ 不正解'}
            </p>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{currentQuestion.explanation}</p>
            <p className="text-[10px] font-bold text-slate-400 mb-6 underline italic">参照：{currentQuestion.reference}</p>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-xl text-center border border-blue-100">
              <a href={RAKUTEN_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 font-bold hover:underline">
                📖 試験対策に！楽天で「教則本」をチェック
              </a>
            </div>

            <button 
              onClick={handleNextQuestion}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all"
            >
              {isFinished ? '結果を見る' : '次の問題へ'}
            </button>
          </article>
        )}
      </div>
    </main>
  );
}