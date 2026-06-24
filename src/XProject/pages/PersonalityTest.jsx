import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, ShieldAlert, Activity, GitCommit, Search } from 'lucide-react';

const questions = [
  { id: 1, text: "在執行任務時，你更傾向於獨自行動而非團隊合作？" },
  { id: 2, text: "當系統發生未知錯誤時，你第一反應是重啟而非檢查日誌？" },
  { id: 3, text: "你相信數位世界中存在著超越人類邏輯的精神實體？" },
  { id: 4, text: "面對加密文件，你更喜歡暴力破解而非尋找後門漏洞？" },
  { id: 5, text: "如果可以永生，你願意將意識完全上傳至雲端伺服器嗎？" }
];

const PersonalityTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [exitDirection, setExitDirection] = useState(0); // 用於控制飛出方向

  // 1. 處理回答與飛出邏輯
  const handleAnswer = (value, direction) => {
    setExitDirection(direction * 400); // 設置飛出距離和方向
    const newAnswers = [...answers, { qid: questions[currentIndex].id, val: value }];
    setAnswers(newAnswers);

    // 延遲切換下一題，等待動畫完成
    setTimeout(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsFinished(true);
        }
    }, 10);
  };

  // 子元素動畫 (依序載入用)
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  if (isFinished) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 font-mono relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(16,185,129,0.05)_2px,transparent_2px)] bg-[length:100%_12px]" />
        
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 120 }} className="p-5 bg-emerald-500/10 rounded-full border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <ShieldCheck className="text-emerald-500 animate-pulse" size={48} />
        </motion.div>
        
        <div className="space-y-1 relative z-10">
          <h2 className="text-2xl font-black text-emerald-500 tracking-[0.3em] uppercase">Protocol_Locked</h2>
          <p className="text-[10px] text-emerald-900 font-mono tracking-widest uppercase">[人格共振頻率已加密存檔。正在分析威脅等級...]</p>
        </div>

        <div onClick={() => window.location.reload()} className="relative px-10 py-4 border border-emerald-500 text-emerald-500 text-xs font-black tracking-widest hover:bg-emerald-500 hover:text-slate-950 transition-all z-20">
          REBOOT_TEST
          <motion.div className="absolute inset-0 border-2 border-emerald-500/50" animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-slate-950 text-emerald-500 font-mono flex flex-col overflow-hidden">
      
      {/* 1. 頂部儀表板 (Header) */}
      <header className="flex-none p-4 border-b border-emerald-900/40 bg-slate-900/20 backdrop-blur-md flex justify-between items-center z-30">
        <div className="flex items-center gap-3">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
            <Terminal className="text-emerald-500" size={16} />
          </motion.div>
          <div className="flex-col">
            <h2 className="text-xs font-black tracking-widest uppercase">Persona_Protocol</h2>
            <span className="text-[8px] text-emerald-800 tracking-wider">[Active_Scanning...]</span>
          </div>
        </div>
        <GitCommit size={14} className="text-emerald-900 animate-pulse" />
      </header>

      {/* 2. 進度與問題卡片區 (Main) */}
      <main className="flex-1 relative flex flex-col p-6 z-10">
        {/* 進度條 (微光細節) */}
        <div className="space-y-1.5 flex-none">
          <div className="flex justify-between text-[9px] text-emerald-900 font-black tracking-widest">
            <span>DECRYPTING_ESSENCE</span>
            <span>[{currentIndex + 1} / {questions.length}]</span>
          </div>
          <div className="h-0.5 w-full bg-slate-900 border border-emerald-900/30 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-emerald-500 shadow-[0_0_10px_#10b981]"
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* 問題卡片 (手勢與載入動畫核心) */}
        <div className="flex-1 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              drag="x" // 開啟橫向拖拽
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                // 滑動判定：向右滑 YES，向左滑 NO
                if (info.offset.x > 120) handleAnswer(true, 1);
                else if (info.offset.x < -120) handleAnswer(false, -1);
              }}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, x: exitDirection, rotate: exitDirection / 12, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="w-full aspect-[4/5] bg-slate-900/80 border border-emerald-500/20 backdrop-blur-md p-8 flex flex-col justify-center relative overflow-hidden group cursor-grab active:cursor-grabbing rounded-sm"
            >
              {/* 卡片背景裝飾 (終端風格網格) */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[length:100%_6px]" />
              
              {/* 動態依序載入內容 (Staggered Children) */}
              <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.15 }} className="relative z-10 space-y-5">
                <motion.div variants={itemVariants} className="flex items-center gap-2">
                  <Search size={12} className="text-emerald-900" />
                  <span className="text-emerald-900 text-[9px] font-black tracking-widest uppercase italic">_Data_Packet:</span>
                </motion.div>
                
                <motion.p variants={itemVariants} className="text-lg font-bold text-emerald-400 leading-tight tracking-tight">
                  {questions[currentIndex].text}
                </motion.p>
                
                {/* 掃描線裝飾 (僅在載入時閃爍一次) */}
                <motion.div 
                    className="absolute -inset-x-4 -top-6 h-0.5 bg-emerald-500 shadow-[0_0_10px_#10b981]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: [0, 1, 0], opacity: [1, 1, 0] }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "circIn" }}
                />
              </motion.div>
              
              {/* 精緻角飾 */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-emerald-800" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-emerald-800" />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. 底部按鈕列 (Footer) */}
      <footer className="flex-none p-6 bg-slate-950 border-t border-emerald-900/30 flex gap-6 z-30">
        {/* NEGATIVE 按鈕 */}
        <div 
          onClick={() => handleAnswer(false, -1)}
          className="group relative flex-1 h-16 border border-red-900/50 bg-red-950/20 text-red-700 hover:text-slate-950 transition-colors flex flex-col items-center justify-center rounded-sm active:scale-95 transition-transform"
        >
          {/* 按鈕內的發光填充層 */}
          <div className="absolute inset-0 bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
          
          <div className="relative z-10 flex flex-col items-center gap-1">
            <ShieldAlert size={18} />
            <span className="text-[9px] font-black uppercase tracking-widest">NEGATIVE</span>
          </div>
        </div>

        {/* POSITIVE 按鈕 */}
        <div 
          onClick={() => handleAnswer(true, 1)}
          className="group relative flex-1 h-16 border border-emerald-900/50 bg-emerald-950/20 text-emerald-700 hover:text-slate-950 transition-colors flex flex-col items-center justify-center rounded-sm active:scale-95 transition-transform"
        >
          {/* 按鈕內的發光填充層 */}
          <div className="absolute inset-0 bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0" />
          
          <div className="relative z-10 flex flex-col items-center gap-1">
            <ShieldCheck size={18} />
            <span className="text-[9px] font-black uppercase tracking-widest">POSITIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalityTest;