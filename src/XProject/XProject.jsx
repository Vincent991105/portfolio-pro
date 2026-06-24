import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Zap, Target, Cpu, Home } from 'lucide-react';
import ScannerOverlay from './components/ScannerOverlay';

const navItems = [
//   { path: '/XProject', label: 'MAIN', icon: <Home size={20} /> },
  { path: '/XProject/intel', label: 'INTEL', icon: <Target size={20} /> },
  { path: '/XProject/archive', label: 'AGENTS', icon: <Terminal size={20} /> },
  { path: '/XProject/admin', label: 'ADMIN', icon: <Cpu size={20} /> },
];

const XProject = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideBottomBarPaths = [
    '/xproject',         // LandingPage
    '/xproject/admin/register',
    '/xproject/admin/forget',
    '/xproject/admin/createpuppy',
    '/xproject/admin/personalitytest'
  ];

  // 判斷是否為詳情頁 (例如 /XProject/archive/D-0812)
  const currentPath = location.pathname.toLowerCase();

  // 3. 判斷是否為詳情頁（同樣轉小寫比對）
  const isDetailPage = currentPath.includes('/archive/');

  // 4. 執行無視大小寫的比對
  const shouldHideBar = hideBottomBarPaths.includes(currentPath) || isDetailPage;

  return (
    <div className="h-screen w-full bg-slate-950 text-emerald-500 font-mono relative flex flex-col overflow-hidden">
      
      {/* 2. 確保 Overlay 不攔截滑鼠事件 */}
      <div className="pointer-events-none">
        <ScannerOverlay />
      </div>
      
      {/* 3. 重要：main 必須設定高度填滿剩餘空間，且 overflow-y-auto */}
      <main className="flex-1 w-full overflow-y-auto overflow-x-hidden scrollbar-hide relative z-10">
        <Outlet />
      </main>

      {/* 戰術底欄 (Tactical Bottom Bar) */}
      {!shouldHideBar &&<nav className="fixed bottom-0 inset-x-0 z-[200] p-4 bg-slate-950/80 backdrop-blur-lg border-t border-emerald-500/20">
        <div className="max-w-md mx-auto flex justify-around items-center relative">
          
          {/* 背景裝飾線條 */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-emerald-500/20 rounded-full" />

          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative flex flex-col items-center gap-1 group"
              >
                {/* 活性指示燈 */}
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0 
                  }}
                  className="absolute -top-2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]"
                />
                
                <div className={`p-2 transition-all duration-300 ${
                  isActive 
                  ? 'text-emerald-400 scale-110' 
                  : 'text-emerald-900 group-hover:text-emerald-600'
                }`}>
                  {item.icon}
                </div>
                
                <span className={`text-[8px] uppercase tracking-tighter transition-colors ${
                  isActive ? 'text-emerald-400 font-black' : 'text-emerald-900'
                }`}>
                  {item.label}
                </span>

                {/* 點擊時的波紋效果 */}
                {isActive && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-full -z-10"
                  />
                )}
              </div>
            );
          })}
        </div>
      </nav>}

      {/* 全域裝飾：移動到頂部或不影響操作的位置 */}
      <div className="fixed top-4 left-4 text-[8px] text-emerald-950 z-50 pointer-events-none">
        SYS_OS: OMEGA_V4 // {location.pathname.toUpperCase()}
      </div>
    </div>
  );
};

export default XProject;