import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Target, Zap, Info, ChevronRight,
  Database, Search, Activity, Cpu, Terminal as TerminalIcon,
  AlertTriangle, Radar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlitchText from '../components/GlitchText';

// --- 新增互動組件：動態數據跳動 ---
const RollingNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    let totalMilisecondDurarion = 1500;
    let incrementTime = (totalMilisecondDurarion / end);
    let timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{displayValue}</span>;
};

// --- 新增互動組件：模擬終端日誌 ---
const TerminalLog = () => {
  const [logs, setLogs] = useState(["SYSTEM_INITIALIZING...", "CONNECTING_TO_SATELLITE_NETWORK..."]);
  const pool = [
    "SCANNING_STRAY_SIGNALS...",
    "DETECTING_HIGH_CUTENESS_LEVELS...",
    "UPDATING_ADOPTION_DATABASE...",
    "ENCRYPTING_BIO_LINK...",
    "ANALYZING_BARK_PATTERNS...",
    "TARGET_SIGHTING_IN_TAIPEI_RECON_UNIT..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), pool[Math.floor(Math.random() * pool.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/50 p-4 border border-emerald-900/50 font-mono text-[9px] text-emerald-800 space-y-1">
      {logs.map((log, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-emerald-500">[{new Date().toLocaleTimeString()}]</span>
          <span className="truncate">{log}</span>
        </div>
      ))}
    </div>
  );
};

const IntelPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="w-full text-emerald-500 font-mono p-4 md:p-12 relative">
      
      {/* 3. 背景網格改用 absolute，它會隨內容延伸 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[grid:24px_24px] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]" />

      {/* 內容容器 */}
      <motion.div 
        variants={containerVars} 
        initial="hidden" 
        animate="visible" 
        className="max-w-6xl mx-auto space-y-16 relative z-10"
      >

        {/* 1. 頂部實時數據面板 (新增) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AGENTS_ONLINE", val: "124", unit: "UNITS" },
            { label: "ADOPTION_RATE", val: "88", unit: "%" },
            { label: "SATELLITE_NODES", val: "12", unit: "ACTIVE" },
            { label: "THREAT_LEVEL", val: "0", unit: "SECURE" }
          ].map((stat, i) => (
            <div key={i} className="border border-emerald-900/30 bg-emerald-500/5 p-4 relative overflow-hidden group">
              <div className="text-[9px] text-emerald-800 mb-1">{stat.label}</div>
              <div className="text-2xl font-black italic">
                <RollingNumber value={stat.val} />
                <span className="text-[10px] ml-1 opacity-50">{stat.unit}</span>
              </div>
              <motion.div 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-emerald-500/50" 
              />
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 左側主要簡報區 */}
          <div className="lg:col-span-8 space-y-12">
            <header className="border-b border-emerald-900 pb-8">
              <div className="flex items-center gap-2 text-xs mb-4 text-emerald-800 uppercase tracking-widest">
                <Cpu size={14} className="animate-spin-slow" /> 
                <span>Processing_Intel_Stream // OP-REBORN-2026</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
                <GlitchText>Mission_Briefing</GlitchText>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-emerald-700/80 leading-relaxed">
                <p>我們在此協議中，正式啟動「特工轉移計劃」。每一隻流浪特工都攜帶獨特的戰術數據，等待您的部署。</p>
                <TerminalLog />
              </div>
            </header>

            {/* 互動式特工類別選擇 */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <Radar className="text-emerald-400 animate-pulse" size={24} />
                <h2 className="text-xl font-bold uppercase tracking-widest">Agent_Classifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "RECON", sub: "小型犬", color: "emerald", icon: <Search size={16}/> },
                  { title: "ARMOR", sub: "大型犬", color: "blue", icon: <ShieldCheck size={16}/> },
                  { title: "INTEL", sub: "工作犬", color: "purple", icon: <TerminalIcon size={16}/> }
                ].map((t, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`p-4 border text-left transition-all ${activeTab === i ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'border-emerald-900/50 text-emerald-900 hover:border-emerald-500'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black uppercase tracking-tighter">Class_{t.title}</span>
                      {t.icon}
                    </div>
                    <div className="text-lg font-black italic">{t.sub}</div>
                  </div>
                ))}
              </div>
              
              {/* 動態內容切換 */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-emerald-950/10 border border-emerald-900/50 p-6 flex flex-col md:flex-row gap-8"
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-black italic uppercase">
                      {activeTab === 0 && "Reconnaissance_Unit (偵查型)"}
                      {activeTab === 1 && "Heavy_Armor_Division (重裝型)"}
                      {activeTab === 2 && "Tactical_Intel_Core (智力型)"}
                    </h3>
                    <p className="text-sm text-emerald-700 leading-relaxed">
                      {activeTab === 0 && "該單位具備極高的環境適應力與隱蔽性，適合狹窄居住環境。雖然體型小巧，但擁有極高的聲波偵測（聽覺）範圍。"}
                      {activeTab === 1 && "防禦力與心理穩定性的最高等級。該特工能承受高壓環境，並為指揮官提供最強力的情感護盾，是居家安全的最終解決方案。"}
                      {activeTab === 2 && "運算速度極快，能輕易破解人類的訓練指令。該特工需要大量的邏輯訓練與互動任務，以防止其系統（精力）過熱。"}
                    </p>
                  </div>
                  <div className="w-full md:w-48 aspect-square border border-emerald-500/20 relative flex items-center justify-center">
                     <div className="absolute inset-2 border border-emerald-500/10 rounded-full animate-spin-slow" />
                     <Activity size={40} className="text-emerald-500" />
                     <div className="absolute bottom-2 text-[8px] text-emerald-800">SCAN_ACTIVE_...</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>
          </div>

          {/* 右側互動數據側欄 (新增) */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-emerald-950/20 border border-emerald-900 p-6 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle size={14} className="text-amber-500" /> System_Alerts
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-amber-500 pl-3 py-1">
                  <div className="text-[10px] text-amber-500">CRITICAL_WARNING</div>
                  <div className="text-[11px] text-emerald-700">檢測到分離焦慮風險，建議部署前先完成「基礎訓練協議」。</div>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3 py-1">
                  <div className="text-[10px] text-emerald-500">INFO_UPDATE</div>
                  <div className="text-[11px] text-emerald-700">新一批「幼犬特工」已進入預覽序列，等待解碼。</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-emerald-900">
                <div className="text-[9px] mb-2 uppercase text-emerald-900">Bio_Sync_Compatibility</div>
                <div className="h-1.5 w-full bg-emerald-900/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "75%" }} 
                    transition={{ duration: 2 }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" 
                  />
                </div>
                <div className="flex justify-between mt-1 text-[8px] uppercase">
                  <span>Match_Potential</span>
                  <span>75%</span>
                </div>
              </div>
            </section>

            <div className="border border-emerald-900/50 p-4 text-center group cursor-pointer hover:border-emerald-500 transition-colors">
              <div className="text-[8px] text-emerald-800 mb-2 uppercase">Protocol_Manual</div>
              <div className="text-xs font-bold text-emerald-500 flex items-center justify-center gap-2">
                <Database size={12} /> DOWNLOAD_COMMAND_LOGS
              </div>
            </div>
          </div>
        </div>

        {/* 底部行動呼籲 */}
        <footer className="pt-12 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-emerald-800">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] tracking-widest uppercase italic">Live_Signal: Waiting for Command Authorization...</span>
          </div>
          
          <div 
            onClick={() => navigate('/XProject/archive')}
            className="group relative px-12 py-5 bg-emerald-500 text-slate-950 font-black tracking-[0.5em] overflow-hidden transition-all hover:bg-emerald-400"
          >
            <span className="relative z-10">ACCESS_FULL_DOSSIER_RECORDS</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default IntelPage;