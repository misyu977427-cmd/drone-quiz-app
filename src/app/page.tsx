"use client";

import { useState, useEffect } from "react";
import { quizData as questions, type Question } from "./data"; 
import { Trophy, CheckCircle, XCircle, RefreshCw, ExternalLink, Info, ShieldCheck, Check, X, Medal, Calendar, UserCheck } from "lucide-react";

export default function Home() {
  const [gameState, setGameState] = useState<"TITLE" | "RULES" | "QUIZ" | "RESULT">("TITLE");
  const [quizList, setQuizList] = useState<readonly Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  
  const [passCount, setPassCount] = useState(0);
  const [stamps, setStamps] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);

  useEffect(() => {
    const savedPass = localStorage.getItem("passCount");
    const savedStamps = localStorage.getItem("stamps");
    const lastLogin = localStorage.getItem("lastLogin");
    const today = new Date().toLocaleDateString();

    if (savedPass) setPassCount(parseInt(savedPass));
    if (savedStamps) setStamps(parseInt(savedStamps));

    if (lastLogin !== today) {
      const newStamps = (savedStamps ? parseInt(savedStamps) : 0) + 1;
      setStamps(newStamps);
      localStorage.setItem("stamps", newStamps.toString());
      localStorage.setItem("lastLogin", today);
    }
  }, []);

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 25);
    setQuizList(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setSelected(null);
    setWrongAnswers([]);
    setGameState("QUIZ");
  };

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizList[currentIdx].correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, quizList[currentIdx]]);
    }
  };

  const finishQuiz = () => {
    if (score >= 20) {
      const newPassCount = passCount + 1;
      setPassCount(newPassCount);
      localStorage.setItem("passCount", newPassCount.toString());
    }
    setGameState("RESULT");
  };

  const getTitle = () => {
    if (passCount >= 16) return { name: "ダイヤモンドランク", color: "text-purple-400" };
    if (passCount >= 6) return { name: "プラチナランク", color: "text-blue-400" };
    return { name: "ゴールドランク", color: "text-slate-400" };
  };

  const RakutenAffiliate = () => (
    <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-orange-500/20 text-center">
      <p className="text-[10px] text-orange-400 mb-1 uppercase tracking-widest">広告・おすすめ対策本</p>
      <a href="https://hb.afl.rakuten.co.jp/ichiba/4fc849f0.0ba0a5d5.4fc849f1.faf6e450/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18337808%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" className="text-xs font-bold text-slate-300 hover:text-white transition-colors">
        本試験型ドローン二等学科問題集をチェック <ExternalLink size={10} className="inline ml-1" />
      </a>
    </div>
  );

  if (gameState === "TITLE") {
    const title = getTitle();
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-black mb-2 bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent italic tracking-tight">Drone_quiz</h1>
        <div className="flex gap-4 mb-8 text-[10px] font-bold">
          <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            <UserCheck size={12} className={title.color} /> {title.name}
          </span>
          <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            <Calendar size={12} className="text-orange-400" /> ログイン: {stamps}日
          </span>
        </div>
        <button onClick={() => setGameState("RULES")} className="w-full max-w-xs bg-white text-slate-950 py-5 rounded-2xl font-black text-xl active:scale-95 transition-all shadow-xl">模擬試験をはじめる</button>
        <RakutenAffiliate />
      </div>
    );
  }

  if (gameState === "RULES") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
          <div className="flex items-center gap-3 text-blue-400 mb-2 font-bold italic"><Info size={24} /> <h2 className="text-xl">試験のルール</h2></div>
          <ul className="space-y-4 text-sm text-slate-400 font-medium leading-relaxed">
            <li className="flex gap-3"><span className="text-blue-500 font-black">01</span> 教則第4版（令和7年2月施行）の内容から出題されます。</li>
            <li className="flex gap-3"><span className="text-blue-500 font-black">02</span> 全50問からランダムに25問を抽出します。</li>
            <li className="flex gap-3"><span className="text-blue-500 font-black">03</span> 合格基準は 20 / 25 問（正解率80%）以上です。</li>
          </ul>
          <button onClick={startQuiz} className="w-full bg-blue-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-8 active:scale-95 transition-all">試験を開始する</button>
        </div>
      </div>
    );
  }

  if (gameState === "RESULT") {
    const isPass = score >= 20;
    const getTrophyColor = () => {
      if (score === 25) return "text-cyan-300";
      if (score >= 20) return "text-yellow-400";
      if (score >= 15) return "text-slate-300";
      return "text-orange-600";
    };

    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 overflow-y-auto">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <Trophy className={`w-20 h-20 mb-4 animate-bounce ${getTrophyColor()}`} />
          <h2 className="text-3xl font-black mb-2">{isPass ? "合格おめでとう！" : "不合格（あと少し！）"}</h2>
          <p className="text-slate-400 mb-8 tracking-widest text-sm">スコア: {score} / 25</p>
          {wrongAnswers.length > 0 && (
            <div className="w-full text-left mb-8 bg-slate-950 border border-red-900/30 rounded-2xl p-4">
              <h3 className="text-red-400 text-xs font-black mb-3 flex items-center gap-2"><Medal size={14}/> 復習が必要なポイント</h3>
              <div className="space-y-4">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="text-[11px] border-b border-slate-800 pb-2 last:border-0">
                    <p className="font-bold text-slate-200 mb-1">Q. {q.text}</p>
                    <p className="text-red-400">正解: {q.options[q.correctAnswer]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button onClick={() => setGameState("TITLE")} className="w-full bg-slate-800 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-4"><RefreshCw size={18} /> 最初にもどる</button>
          <RakutenAffiliate />
        </div>
      </div>
    );
  }

  const currentQ = quizList[currentIdx];
  if (quizList.length === 0) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-xl mx-auto py-6">
        <div className="flex justify-between text-[10px] text-slate-500 mb-8 font-black tracking-widest uppercase">
          <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-blue-500" /> 試験実施中</span>
          <span>{currentIdx + 1} / 25</span>
        </div>
        <h2 className="text-lg font-bold mb-10 leading-relaxed text-slate-100">{currentQ.text}</h2>
        <div className="space-y-3">
          {currentQ.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${
                selected === null ? "bg-slate-900 border-slate-800 hover:border-slate-600" :
                i === currentQ.correctAnswer ? "bg-green-900/30 border-green-500 text-green-100" :
                selected === i ? "bg-red-900/30 border-red-500 text-red-100" : "bg-slate-950 border-slate-900 opacity-30"
              }`}>
              <div className="flex gap-4 items-center">
                <span className="font-mono text-slate-500 text-xs">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium">{opt}</span>
              </div>
              {selected !== null && i === currentQ.correctAnswer && <Check className="text-green-500" size={20} />}
              {selected === i && i !== currentQ.correctAnswer && <X className="text-red-500" size={20} />}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className="mt-8 p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <div className={`flex items-center gap-2 mb-4 font-black text-sm ${selected === currentQ.correctAnswer ? "text-green-400" : "text-red-400"}`}>
              {selected === currentQ.correctAnswer ? <><CheckCircle size={16} /> ✅ 正解です</> : <><XCircle size={16} /> ❌ 不正解です</>}
            </div>
            <p className="text-xs text-slate-400 mb-6 italic leading-relaxed">【解説 (参照: {currentQ.reference})】<br/>{currentQ.explanation}</p>
            <button onClick={() => currentIdx === 24 ? finishQuiz() : (setCurrentIdx(prev => prev + 1), setSelected(null))}
              className="w-full bg-white text-slate-950 py-4 rounded-xl font-black">
              {currentIdx === 24 ? "結果を見る" : "次へ進む"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}