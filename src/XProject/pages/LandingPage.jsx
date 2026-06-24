import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';
import TerminalButton from '../components/TerminalButton';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onEnter }) => {

  const navigate = useNavigate(); // 3. 初始化導覽函數

  const handleEnter = () => {
    navigate('/XProject/archive'); // 4. 定義跳轉目標為 2-1 說明頁
  };

  const handleRules = () => {
    // 您可以決定「行動守則」要跳轉去哪，或者是開啟一個彈窗
    navigate('/XProject/intel');
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full z-10"
      >
        {/* 頂部元數據 */}
        <div className="flex justify-between items-center text-emerald-900 text-[10px] mb-4 font-mono">
          <div className="flex items-center gap-2">
            <Cpu size={12} />
            <span>ENCRYPTION: AES-256</span>
          </div>
          <span>ESTABLISHED: 2026.03.11</span>
        </div>

        {/* 主卡片 */}
        <div className="border border-emerald-500/30 bg-slate-900/50 backdrop-blur-sm p-8 md:p-16 relative">
          {/* 裝飾性裝角 */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />

          <motion.div variants={itemVars} className="space-y-6">
            <div className="flex items-center gap-3 text-emerald-500">
              <ShieldAlert size={20} className="animate-pulse" />
              <span className="text-xs tracking-widest uppercase">Classified Database Access</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-emerald-500 font-mono tracking-tighter leading-none">
              DOG<br/>
              <span className="bg-emerald-500 text-slate-950 px-2">DOSSIER</span>
            </h1>

            <p className="text-emerald-700/80 font-mono text-sm leading-relaxed max-w-md">
              這是「浪愛重生」機密終端。每一隻流浪特工都在等待其專屬的部署指揮官。
              <span className="block mt-2 italic">警告：一旦建立連結，忠誠度將永久鎖定。</span>
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <TerminalButton onClick={handleEnter}>
                進入檔案庫
              </TerminalButton>
              <TerminalButton variant="outline" onClick={handleRules}>
                查看行動守則
              </TerminalButton>
            </div>
          </motion.div>
        </div>

        {/* 底部滾動文字效果 */}
        <div className="mt-8 overflow-hidden whitespace-nowrap">
          <motion.p 
            animate={{ x: [0, -500] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-emerald-950 text-xs font-mono uppercase tracking-[0.5em]"
          >
            Searching for suitable agents... Training in progress... Deploying happiness...
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;