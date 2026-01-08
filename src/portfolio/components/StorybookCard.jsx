import { BookOpen, ExternalLink, Box, CheckCircle2 } from 'lucide-react';

function StorybookCard({ url = "https://your-storybook-link.com" }) {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 py-10">
      <div className="group relative bg-white border-2 border-[#747bff]/20 rounded-3xl p-8 transition-all duration-300 hover:border-[#747bff] hover:shadow-[0_20px_50px_-12px_rgba(116,123,255,0.15)] overflow-hidden">
        
        {/* 背景裝飾：模擬代碼線條 */}
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <BookOpen size={200} className="text-[#747bff] -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 左側：資訊區 */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#747bff]/10 text-[#747bff] text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#747bff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#747bff]"></span>
              </span>
              Live Documentation
            </div>
            
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Design System & <span className="text-[#747bff]">Storybook</span>
            </h2>
            
            <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
              這是我為多個專案提取出的 UI 規範與組件庫。包含原子組件、佈局模組及多種狀態測試，確保 UI 的一致性與代碼的可重用性。
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#747bff]" /> 原子設計</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#747bff]" /> 單元測試</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#747bff]" /> 響應式預覽</div>
            </div>
          </div>

          {/* 右側：數據與按鈕 */}
          <div className="flex flex-col items-center gap-4 min-w-[200px]">
            <div className="flex flex-col items-center bg-slate-50 rounded-2xl p-6 border border-slate-100 w-full shadow-sm">
              <Box size={32} className="text-[#747bff] mb-2" />
              <span className="text-2xl font-black text-slate-800">50+</span>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Components</span>
            </div>

            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#747bff] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-[#5a61e6] hover:shadow-[0_10px_20px_-10px_rgba(116,123,255,0.5)] group/btn"
            >
              瀏覽 Storybook
              <ExternalLink size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StorybookCard;