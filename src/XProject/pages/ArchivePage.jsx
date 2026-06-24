import React, { useRef, useState, useMemo } from 'react'; // 加入 useState, useMemo
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal as TerminalIcon } from 'lucide-react';
import DossierCard from '../components/DossierCard';
import AgentDetail from './AgentDetail';
import { useNavigate } from 'react-router-dom';

const mockDogs = [
  {
    id: 'D-0812',
    name: 'Agent Buddy',
    breed: 'Golden Retriever',
    birthday: '2021-08-12',
    location: 'Taipei (Xinyi District)',
    favoriteToy: 'Tactical Rubber Chicken',
    description: '該特工表面上是溫和的黃金獵犬，實則擅長利用高頻率尾巴擺動干擾敵人判斷。目前正潛伏於信義區公園，執行「討摸摸」秘密任務。',
    icon: '/DemoPuppy.png',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500',
    social: {
      facebook: 'https://facebook.com/agentbuddy',
      instagram: 'https://instagram.com/agentbuddy',
      twitter: 'https://twitter.com/agentbuddy'
    },
    stats: [
      { label: "Bark Volume (吠叫音量)", val: "45%", icon: "Skull" },
      { label: "Cuteness (萌度指數)", val: "99%", icon: "Heart" },
      { label: "Sleep Duration (睡眠時數)", val: "80%", icon: "Terminal" }
    ],
    evidenceImages: [
      { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500', label: 'IDENTIFICATION' },
      { url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500', label: 'SURVEILLANCE_01' },
      { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500', label: 'TARGET_SIGHTING' },
      { url: 'https://images.unsplash.com/photo-1541591419107-f62b613965bb?auto=format&fit=crop&w=500', label: 'THERMAL_SCAN' }
    ]
  },
  {
    id: 'D-1103',
    name: 'Ghost',
    breed: 'Samoyed',
    birthday: '2022-11-03',
    location: 'Tainan (Old Town)',
    favoriteToy: 'Sonic Squeaky Bone',
    description: '代號「幽靈」，因其極其蓬鬆的白色毛皮能在大雪（或白色沙發）中完美隱形而得名。根據情報，他能透過微笑瞬間瓦解人類的防禦心。',
    icon: '/DemoPuppy.png',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500',
    social: {
      facebook: '#',
      instagram: 'https://instagram.com/ghost_samoyed',
      twitter: '#'
    },
    stats: [
      { label: "Bark Volume (吠叫音量)", val: "70%", icon: "Skull" },
      { label: "Cuteness (萌度指數)", val: "95%", icon: "Heart" },
      { label: "Sleep Duration (睡眠時數)", val: "65%", icon: "Terminal" }
    ],
    evidenceImages: [
      { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500', label: 'IDENTIFICATION' },
      { url: 'https://images.unsplash.com/photo-1529429617329-8a79b052b327?auto=format&fit=crop&w=500', label: 'FIELD_OP_01' },
      { url: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=500', label: 'NIGHT_VISION' },
      { url: 'https://images.unsplash.com/photo-1591768793355-74d750d603a7?auto=format&fit=crop&w=500', label: 'TRACE_ANALYSIS' }
    ]
  },
  {
    id: 'D-4402',
    name: 'Rusty',
    breed: 'Shiba Inu',
    birthday: '2020-04-02',
    location: 'Taichung (Green Park)',
    favoriteToy: 'Electronic Frisbee',
    description: '性格固執的特務，對指令的執行取決於零食的質量。專長是「原地石化」，當他不願意走路時，三名特勤人員也無法將其移動。',
    icon: '/DemoPuppy.png',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    },
    stats: [
      { label: "Bark Volume (吠叫音量)", val: "60%", icon: "Skull" },
      { label: "Cuteness (萌度指數)", val: "88%", icon: "Heart" },
      { label: "Sleep Duration (睡眠時數)", val: "50%", icon: "Terminal" }
    ],
    evidenceImages: [
      { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500', label: 'IDENTIFICATION' },
      { url: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=500', label: 'INTEL_COLLECTION' },
      { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500', label: 'STUBBORN_MODE' },
      { url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=500', label: 'TARGET_LOCKED' }
    ]
  },
  {
    id: 'D-9981',
    name: 'Shadow',
    breed: 'Border Collie',
    birthday: '2019-12-25',
    location: 'Kaohsiung (Harbor)',
    favoriteToy: 'Intelligence Puzzle Box',
    description: '智商極高的戰略家。能在 0.5 秒內計算出球的落點，並已成功破解了家中三個不同型號的零食櫃門鎖。懷疑其具有讀心能力。',
    icon: '/DemoPuppy.png',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=500',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    },
    stats: [
      { label: "Bark Volume (吠叫音量)", val: "30%", icon: "Skull" },
      { label: "Cuteness (萌度指數)", val: "85%", icon: "Heart" },
      { label: "Sleep Duration (睡眠時數)", val: "40%", icon: "Terminal" }
    ],
    evidenceImages: [
      { url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=500', label: 'IDENTIFICATION' },
      { url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500', label: 'SATELLITE_TRACK' },
      { url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500', label: 'PATROL_LOG' },
      { url: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=500', label: 'DNA_PROFILE' }
    ]
  }
];

const ArchivePage = () => {

  const navigate = useNavigate();

  const scrollRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState(''); // 搜尋狀態
  const [selectedDog, setSelectedDog] = useState(null);

  // 搜尋過濾邏輯：同時對應 ID 和 名字
  const filteredDogs = useMemo(() => {
    return mockDogs.filter(dog => 
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="h-screen bg-slate-950 text-emerald-500 font-mono overflow-hidden flex flex-col">
      <AnimatePresence>
        {selectedDog && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[100]" // 確保 z-index 最高
          >
            <AgentDetail 
              dog={selectedDog} 
              onBack={() => setSelectedDog(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* 頂部狀態列 */}
      <header className="p-6 border-b border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 shrink-0">
        <div>
          <p className="text-[10px] text-emerald-800 tracking-[0.3em]">DATABASE_RECORDS</p>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">特工檔案瀏覽器</h2>
        </div>

        {/* 搜尋終端框 */}
        <div className="relative group w-full md:w-96">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-emerald-800 group-focus-within:text-emerald-400 transition-colors">
            <Search size={16} />
          </div>
          <input 
            type="text"
            placeholder="SEARCH_BY_ID_OR_NAME..."
            className="w-full bg-slate-900 border border-emerald-900/50 py-2 pl-10 pr-4 text-xs tracking-widest text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* 裝飾性的小標籤 */}
          <div className="absolute -top-2 -right-2 bg-emerald-900 text-slate-950 text-[8px] px-1 font-bold">
            QUERY_v1.0
          </div>
        </div>

        <div className="text-[10px] text-right hidden lg:block">
          <p className="animate-pulse">SCROLL_WHEEL_NAVIGATE →</p>
          <p className="opacity-40 uppercase">Filter: {searchTerm ? 'Active' : 'All_Records'}</p>
        </div>
      </header>

      {/* 橫向滾動容器 */}
      <div 
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex-1 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide flex items-center"
      >
        <div className="inline-flex h-[80%] items-center px-[10vw] flex-nowrap min-w-max py-10">
          <AnimatePresence mode="popLayout">
            {filteredDogs.length > 0 ? (
              filteredDogs.map((dog, index) => (
                <motion.div
                  layout // 重要：讓檔案在搜尋過濾時平滑移動位置
                  key={dog.id}
                  // 點擊後跳轉到對應 ID 的路由
                  onClick={() => navigate(`/XProject/archive/${dog.id}`)}
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="snap-center shrink-0 w-[85vw] md:w-[450px] relative"
                  style={{
                    zIndex: index,
                    marginLeft: index === 0 ? '0' : '-220px' 
                  }}
                >
                  <div className="group transition-all duration-500 hover:-translate-y-20 hover:rotate-0 rotate-1 relative hover:z-50">
                    <div className="bg-emerald-950/60 backdrop-blur-md border-t border-x border-emerald-500/30 w-32 py-1.5 px-4 rounded-t-lg text-[10px] ml-6 shadow-[-10px_-5px_20px_rgba(0,0,0,0.5)]">
                       FILE: {dog.id}
                    </div>
                    <div className="bg-slate-900 border-2 border-emerald-500/50 p-6 shadow-[-30px_0_60px_rgba(0,0,0,0.9)] group-hover:shadow-[0_20px_80px_rgba(16,185,129,0.2)]">
                       <DossierCard dog={dog} />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // 無結果時的顯示
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-screen flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="text-red-900 animate-bounce">
                  <TerminalIcon size={64} />
                </div>
                <h3 className="text-2xl font-black text-red-700 uppercase italic">數據異常：查無特工資料</h3>
                <p className="text-red-900 text-xs tracking-widest uppercase">Error 404: No dossiers match the current query string.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="border border-red-900 text-red-900 px-4 py-1 text-[10px] hover:bg-red-900 hover:text-slate-950 transition-colors"
                >
                  RESET_DATABASE_QUERY
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="shrink-0 w-[50vw]" />
        </div>
      </div>

      {/* 底部進度條 */}
      <footer className="p-4 border-t border-emerald-900/30 flex justify-between text-[10px] shrink-0">
        <div className="flex gap-4">
          <span>DIR: /VAR/LOG/STRAY_AGENTS</span>
          <span className="text-emerald-900">|</span>
          <span>MATCHES_FOUND: {filteredDogs.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${searchTerm ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
          <span className="uppercase">{searchTerm ? 'Scanning...' : 'Idle'}</span>
        </div>
      </footer>
    </div>
  );
};

export default ArchivePage;