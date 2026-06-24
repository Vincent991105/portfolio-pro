import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';
import ScannerOverlay from '../components/ScannerOverlay'; // 復用全域特效

const AdminGateWrapper = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-slate-950 text-emerald-500 font-mono relative flex items-center justify-center overflow-hidden">
      {/* 1. 管理員專屬背景：雷達掃描與數據網格 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
      {/* <ScannerOverlay /> */}

      {/* 2. 右側即時伺服器狀態裝飾 (增加專業感) */}
      <div className="fixed top-10 right-10 hidden lg:block space-y-4 opacity-40 select-none">
        <div className="text-[10px] border-l-2 border-emerald-500 pl-2">
          <p>CPU_LOAD: 24.5%</p>
          <p>MEM_USAGE: 1.2GB / 16GB</p>
          <p>UPLINK: ACTIVE</p>
        </div>
        <Activity className="animate-pulse text-emerald-800" size={40} />
      </div>

      {/* 3. 子路由出口：登入、註冊或忘記密碼會在這裡顯示 */}
      <div className="relative z-10 w-full flex justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            <Outlet /> 
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. 頁尾安全資訊 */}
      <div className="fixed bottom-6 w-full flex justify-center items-center gap-4 text-[9px] text-emerald-900 uppercase tracking-[0.3em]">
        <ShieldCheck size={12} />
        <span>Secure Terminal // Connection: End-to-End Encrypted</span>
      </div>
    </div>
  );
};

export default AdminGateWrapper;