import React from 'react';
import { motion } from 'framer-motion';
import { LocateFixed, Activity, Shield } from 'lucide-react';

const DossierCard = ({ dog }) => {
  return (
    <div className="relative w-full h-full bg-slate-900 flex flex-col font-mono group">
      {/* 檔案夾頂部標籤與裝飾 */}
      <div className="flex justify-between items-center mb-4 border-b border-emerald-500/30 pb-2">
        <div className="flex items-center gap-2">
          <Shield size={14} className="text-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-tighter text-emerald-500">
            Subject_{dog.id}
          </span>
        </div>
        <div className="text-[8px] text-emerald-900 italic">CLASSIFIED</div>
      </div>

      {/* 照片區：加入網格背景與噪點處理 */}
      <div className="relative aspect-video w-full bg-slate-800 border border-emerald-900/50 overflow-hidden">
        {/* 掃描線動畫 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.05)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
        
        <img 
          src={dog.image} 
          alt={dog.name}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
        />

        {/* --- 新增：專屬 Icon 標誌 --- */}
        <div className="absolute top-2 right-2 w-10 h-10 border border-emerald-500/50 bg-slate-900/80 p-1 z-20 backdrop-blur-sm group-hover:border-emerald-500 transition-colors">
          <img 
            src={dog.icon} 
            alt="icon" 
            className="w-full h-full object-contain mix-blend-screen opacity-70 group-hover:opacity-100" 
          />
        </div>
        
        {/* 浮水印文字 */}
        <div className="absolute bottom-2 right-2 text-[40px] font-black text-emerald-500/10 pointer-events-none select-none tracking-tighter">
          TOP SECRET
        </div>
      </div>

      {/* 數據資訊區 */}
      <div className="mt-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-black italic uppercase text-emerald-500 tracking-tighter leading-none mb-2">
            {dog.name}
          </h3>
          <p className="text-[11px] text-emerald-800 leading-tight border-l-2 border-emerald-900 pl-3 py-1">
            偵測到高度親人反應，該特工擅長滲透家庭沙發，並執行長時間的「午睡任務」。
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-emerald-900/30 pt-4">
          <div className="space-y-1">
            <span className="text-[8px] text-slate-500 uppercase block">Last Sight</span>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400">
              <LocateFixed size={12} /> {dog.location}
            </div>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-[8px] text-slate-500 uppercase block">Health_Status</span>
            <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-400">
              <Activity size={12} /> STABLE
            </div>
          </div>
        </div>

        {/* 底部按鈕 */}
        <div className="mt-6 w-full py-2 border border-emerald-500 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300">
          Open_Dossier_Full_Access
        </div>
      </div>

      {/* 物理質感細節：檔案側邊的褶皺感 */}
      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-emerald-500/20 pointer-events-none" />
    </div>
  );
};

export default DossierCard;