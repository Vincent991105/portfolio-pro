import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fingerprint, Lock, ChevronRight, ChevronLeft, UserPlus, HelpCircle, Archive } from 'lucide-react';
import BrokenText from '../components/BrokenText';

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('IDLE'); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus('AUTHENTICATING');
    
    // 模擬驗證
    setTimeout(() => {
      if (password === 'DOG_COMMANDER') {
        onLoginSuccess ? onLoginSuccess() : navigate('/XProject/admin/dashboard');
      } else {
        setStatus('DENIED');
        setTimeout(() => setStatus('IDLE'), 2000);
      }
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full border border-emerald-500/30 bg-slate-900/50 p-8 backdrop-blur-xl relative z-10"
    >
      {/* 1. 頂部返回按鈕 (新增) */}
      <div className="absolute -top-12 left-0">
        <div 
          onClick={() => navigate('/XProject/archive')}
          className="flex items-center gap-2 text-[10px] text-emerald-800 hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Return_to_Archive
        </div>
      </div>

      <div className="text-center mb-10">
        <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-4">
          <Fingerprint className={`w-12 h-12 ${status === 'AUTHENTICATING' ? 'animate-pulse text-emerald-400' : 'text-emerald-600'}`} />
        </div>
        <h2 className="text-2xl font-black tracking-[0.2em] uppercase">
          {status === 'DENIED' ? <span className="text-red-500 animate-bounce">Access_Denied</span> : <BrokenText>Admin_Console</BrokenText>}
        </h2>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] text-emerald-700 uppercase font-bold tracking-widest">Commander_Key</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-900" size={16} />
            <input 
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-slate-950 border border-emerald-900 py-4 pl-10 pr-4 text-emerald-500 focus:outline-none focus:border-emerald-400 transition-all font-mono"
            />
          </div>
        </div>

        {/* 修正：將原本的 div 改為真正的 div 以支援提交 */}
        <div
          type="submit" 
          disabled={status === 'AUTHENTICATING'}
          className={`w-full py-4 font-black tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-2
            ${status === 'AUTHENTICATING' ? 'bg-emerald-900 text-emerald-500 cursor-wait' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'}`}
        >
          {status === 'AUTHENTICATING' ? 'Verifying...' : 'Authorize'}
          <ChevronRight size={18} />
        </div>
      </form>

      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-emerald-900/30 pt-6">
        <Link to="/XProject/admin/register" className="flex items-center gap-2 text-[10px] text-emerald-800 hover:text-emerald-400 transition-colors uppercase tracking-tighter">
          <UserPlus size={14} /> New_Registration
        </Link>
        <Link to="/XProject/admin/forget" className="flex items-center justify-end gap-2 text-[10px] text-emerald-800 hover:text-emerald-400 transition-colors uppercase tracking-tighter">
          <HelpCircle size={14} /> Forgot_Secret
        </Link>
      </div>

      {/* 2. 卡片底部備用返回按鈕 (裝飾性/備用) */}
      <div className="mt-6 text-center">
        <div 
          onClick={() => navigate('/XProject/archive')}
          className="text-[8px] text-emerald-950 hover:text-emerald-700 transition-colors uppercase tracking-[0.5em]"
        >
          // Close_Secure_Terminal
        </div>
      </div>
    </motion.div>
  );
};

export default AdminLogin;