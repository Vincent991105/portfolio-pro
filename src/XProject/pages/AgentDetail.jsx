import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, ChevronLeft, Terminal, Skull, Heart, 
  Facebook, Instagram, Twitter, Share2,
  Cake, Fingerprint, ToyBrick // 新增圖示
} from 'lucide-react';

const AgentDetail = ({ dog, onBack }) => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = `DECRYPTING_FILE_FOR_${dog.name.toUpperCase()}...`;

  // 模擬終端機解碼文字效果
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [dog]);

  return (
    <div className="fixed inset-0 z-[200] bg-slate-950 text-emerald-500 font-mono overflow-y-auto overflow-x-hidden">
      {/* 掃描線 Overlay (保留原本設計) */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[201] bg-[length:100%_2px,3px_100%]" />

      {/* 頂部導航 (保留原本設計) */}
      <nav className="sticky top-0 p-6 bg-slate-950/80 backdrop-blur-md border-b border-emerald-900/50 flex justify-between items-center z-[202]">
        <div 
          onClick={onBack}
          className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>RETURN_TO_ARCHIVE</span>
        </div>
        <div className="text-[10px] text-emerald-800 animate-pulse hidden md:block">
          {loadingText}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12 relative">
        {/* 背景大印章 (保留原本設計) */}
        <div className="absolute top-40 right-10 opacity-10 -rotate-12 pointer-events-none select-none">
          <div className="border-8 border-red-600 p-4 text-red-600 text-9xl font-black">
            TOP SECRET
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* 左側：照片與基礎狀態 (保留原本設計) */}
          <div className="md:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-2 border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500" />
              <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                <img 
                  src={dog.image} 
                  alt={dog.name} 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-screen"
                />

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-900 border-2 border-emerald-500 p-1 shadow-[0_0_20px_rgba(16,185,129,0.4)] z-10 rotate-3 group-hover:rotate-0 transition-transform">
                  <img src={dog.icon} className="w-full h-full object-contain mix-blend-screen" />
                  <div className="absolute -top-2 -left-2 bg-emerald-500 text-slate-950 text-[8px] px-1 font-bold">VERIFIED</div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-emerald-500/30">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-900 p-6 space-y-4 shadow-inner">
              <h3 className="text-xs font-bold text-emerald-800 border-b border-emerald-900 pb-2 flex items-center gap-2">
                <Terminal size={14} /> AGENT_BIOMETRICS
              </h3>
              <ul className="text-xs space-y-3">
                <li className="flex justify-between"><span>NAME:</span> <span className="text-emerald-400 font-bold">{dog.name}</span></li>
                <li className="flex justify-between"><span>ID:</span> <span className="text-emerald-400">{dog.id}</span></li>
                {/* 新增：品種與生日 */}
                <li className="flex justify-between">
                  <span className="flex items-center gap-1"><Fingerprint size={12}/> BREED:</span> 
                  <span className="text-emerald-400">{dog.breed || 'CLASSIFIED'}</span>
                </li>
                <li className="flex justify-between">
                  <span className="flex items-center gap-1"><Cake size={12}/> BORN:</span> 
                  <span className="text-emerald-400">{dog.birthday || 'UNKNOWN'}</span>
                </li>
                <li className="flex justify-between"><span>LOCATION:</span> <span className="text-emerald-400">{dog.location}</span></li>
                <li className="flex justify-between"><span>LEVEL:</span> <span className="text-red-500 font-black tracking-widest">RANK_S</span></li>
              </ul>
              
              {/* 原本設計的社群連結區塊 */}
              <div className="mt-8 pt-4 border-t border-emerald-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <Share2 size={12} className="text-emerald-700" />
                  <span className="text-[10px] text-emerald-800 uppercase tracking-widest">Digital_Footprint_Intercept</span>
                </div>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={18} />, label: 'FB_LOG', link: dog.social?.facebook },
                    { icon: <Instagram size={18} />, label: 'IG_DATA', link: dog.social?.instagram },
                    { icon: <Twitter size={18} />, label: 'X_INTEL', link: dog.social?.twitter }
                  ].map((social, idx) => (
                    <a key={idx} href={social.link || "#"} className="relative flex flex-col items-center group cursor-pointer">
                      <div className="w-10 h-10 border border-emerald-900 flex items-center justify-center text-emerald-800 group-hover:text-emerald-400 group-hover:border-emerald-500 transition-all duration-300">
                        {social.icon}
                      </div>
                      <span className="text-[8px] mt-2 text-emerald-900 group-hover:text-emerald-500 tracking-tighter">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右側：詳細敘述與能力值 (保留原本設計) */}
          <div className="md:col-span-7 space-y-10">
            <section>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 flex items-baseline gap-4">
                {dog.name}
                <span className="text-xs text-emerald-900 not-italic">FILE_REV_2024.03</span>
              </h2>
              {/* 新增：喜歡的玩具顯示區塊 */}
              <div className="mb-4 flex items-center gap-3 bg-emerald-500/5 p-3 border border-emerald-900/30">
                <ToyBrick className="text-emerald-500" size={20} />
                <div className="text-[10px] uppercase">
                  <div className="text-emerald-800">Primary_Tactical_Gear (喜歡的玩具)</div>
                  <div className="text-emerald-400 font-bold text-sm tracking-widest">{dog.favoriteToy || 'STANDARD_SQUEAKY_BALL'}</div>
                </div>
              </div>
              
              <div className="p-4 bg-red-950/10 border-l-4 border-red-900">
                <p className="text-xs text-red-500/80 leading-relaxed font-bold">
                  警告：此個體具有高度危險的誘惑力。與其接觸時，任何試圖保持嚴肅的行為均已被證明是無效的。
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm border-b border-emerald-900 pb-2 font-bold uppercase">Mission_Background (使命背景)</h3>
              <p className="text-sm text-emerald-300 leading-relaxed">
                {dog.description || "尚無詳細情報..."}
              </p>
            </section>

            {/* 能力值 (保留原本動畫與設計) */}
            <section className="space-y-6">
              <h3 className="text-sm border-b border-emerald-900 pb-2 font-bold uppercase tracking-widest">Combat_Stats (特務數值)</h3>
              <div className="space-y-4">
                {dog.stats?.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[10px] uppercase">
                      <span className="flex items-center gap-2">
                        {stat.icon === "Skull" && <Skull size={14}/>}
                        {stat.icon === "Heart" && <Heart size={14}/>}
                        {stat.icon === "Terminal" && <Terminal size={14}/>}
                        {stat.label}
                      </span>
                      <span>{stat.val}</span>
                    </div>
                    <div className="h-2 bg-emerald-900/30 border border-emerald-900">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: stat.val }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 space-y-6">
              <h3 className="text-sm border-b border-emerald-900 pb-2 font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert size={16} /> FIELD_EVIDENCE_LOG (現場採證圖檔)
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dog.evidenceImages?.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative aspect-square bg-slate-900 border border-emerald-900/50 p-1 group cursor-zoom-in"
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      <img 
                        src={img.url || dog.image} 
                        alt={img.label}
                        className={`w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0`}
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-emerald-500 text-slate-950 text-[8px] font-bold text-center py-0.5 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                        {img.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部文字註解 (保留原本設計) */}
              <div className="bg-emerald-950/10 border border-dashed border-emerald-900/50 p-4 mt-4">
                <p className="text-[10px] text-emerald-700 italic leading-relaxed">
                  註記：圖 4 (THERMAL_SCAN) 顯示該目標在睡眠狀態下體溫偏高，且伴隨明顯的尾部震動現象。建議持續追蹤其與「零食罐」之間的電磁感應關係。
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <div className="h-20 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default AgentDetail;