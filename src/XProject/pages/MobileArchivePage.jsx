import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, LayoutGrid, List } from 'lucide-react';
import AgentDetail from './AgentDetail';
import { useNavigate } from 'react-router-dom';

const MobileArchiveGridPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);

  const navigate = useNavigate();

  const mockDogs = [
    { id: 'D-0812', name: 'Buddy', icon: '/DemoPuppy.png' },
    { id: 'D-1103', name: 'Ghost', icon: '/DemoPuppy.png' },
    { id: 'D-4402', name: 'Rusty', icon: '/DemoPuppy.png' },
    { id: 'D-9981', name: 'Shadow', icon: '/DemoPuppy.png' },
    { id: 'D-7721', name: 'Rex', icon: '/DemoPuppy.png' },
    { id: 'D-2234', name: 'Luna', icon: '/DemoPuppy.png' },
  ];

  const filteredDogs = useMemo(() => {
    return mockDogs.filter(dog => 
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-950 text-emerald-500 font-mono flex flex-col relative">
      
      {/* 頂部：搜尋 + 選單按鈕 */}
      <header className="p-4 flex items-center gap-3 z-40 bg-slate-950/80 backdrop-blur-md sticky top-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-800" size={14} />
          <input 
            type="text"
            placeholder="FIND_AGENT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-emerald-900/50 py-2 pl-9 pr-4 text-[10px] tracking-widest text-emerald-400 focus:border-emerald-500 outline-none transition-all"
          />
        </div>
      </header>

      {/* APP Icon 矩陣區 */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
          <AnimatePresence>
            {filteredDogs.map((dog, idx) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(`/XProject/archive/${dog.id}`)}
                className="flex flex-col items-center gap-2 group active:scale-90 transition-transform"
              >
                {/* Icon 外殼 */}
                <div className="relative w-20 h-20">
                  {/* 背景裝飾光暈 */}
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors" />
                  
                  {/* 主要 Icon */}
                  <div className="relative w-full h-full border border-emerald-500/30 rounded-2xl bg-slate-900 p-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src={dog.icon} 
                      alt={dog.name} 
                      className="w-full h-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" 
                    />
                    {/* 掃描線動畫 (僅限個別 Icon) */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
                  </div>

                  {/* 狀態小紅點 */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 border-2 border-slate-950 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>

                {/* 文字標籤 */}
                <div className="text-center">
                  <div className="text-[10px] font-bold tracking-tighter text-emerald-400 truncate w-20">
                    {dog.name.toUpperCase()}
                  </div>
                  <div className="text-[7px] text-emerald-900 tracking-tighter">
                    {dog.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* 詳情視窗 */}
      {selectedDog && (
        <div className="fixed inset-0 z-[100]">
          <AgentDetail dog={selectedDog} onBack={() => setSelectedDog(null)} />
        </div>
      )}
    </div>
  );
};

export default MobileArchiveGridPage;