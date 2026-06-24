import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Fingerprint, Lock, ShieldAlert, ChevronRight, 
  UserPlus, HelpCircle, ArrowLeft, Terminal 
} from 'lucide-react';
import BrokenText from '../components/BrokenText';
import AddAgentPage from './AddAgentPage'; // 引入你之前的註冊頁面

const AdminGate = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('IDLE'); // IDLE, AUTHENTICATING, DENIED
  const [mode, setMode] = useState('SIGN_IN'); // SIGN_IN, REGISTER, RECOVER

  const handleLogin = (e) => {
    e.preventDefault();
    if (status === 'AUTHENTICATING') return;

    setStatus('AUTHENTICATING');
    // 模擬驗證
    setTimeout(() => {
      if (password === 'DOG_COMMANDER') {
        onLoginSuccess();
      } else {
        setStatus('DENIED');
        setTimeout(() => setStatus('IDLE'), 2000);
      }
    }, 1500);
  };

  const handleRegisterSave = (agentData) => {
    console.log("New Agent Registered:", agentData);
    setStatus('AUTHENTICATING');
    // 註冊成功後的邏輯，例如自動登入
    setTimeout(() => {
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className=" w-full bg-slate-950 flex items-center justify-center p-4 relative overflow-y-auto">
      {/* 裝飾性背景 */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {mode === 'SIGN_IN' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-md w-full border border-emerald-500/30 bg-slate-900/50 p-8 backdrop-blur-xl relative z-10"
          >
            <div className="text-center mb-10">
              <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-4">
                <Fingerprint className={`w-12 h-12 ${status === 'AUTHENTICATING' ? 'animate-pulse text-emerald-400' : 'text-emerald-600'}`} />
              </div>
              <h2 className="text-2xl font-black tracking-[0.2em] uppercase">
                {status === 'DENIED' ? (
                  <span className="text-red-500 animate-bounce">Access_Denied</span>
                ) : (
                  <BrokenText>Admin_Console</BrokenText>
                )}
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-emerald-700 uppercase font-bold ml-1 tracking-widest">Commander_Key</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-900" size={16} />
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950 border border-emerald-900 py-4 pl-10 pr-4 text-emerald-500 focus:outline-none focus:border-emerald-400 transition-all font-mono"
                  />
                </div>
              </div>

              <div
                type="submit"
                disabled={status === 'AUTHENTICATING'}
                className={`w-full py-4 font-black tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-2
                  ${status === 'AUTHENTICATING' 
                    ? 'bg-emerald-900 text-emerald-500 cursor-wait' 
                    : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'}`}
              >
                {status === 'AUTHENTICATING' ? 'Verifying...' : 'Authorize'}
                <ChevronRight size={18} />
              </div>
            </form>

            {/* 功能連結區 */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-emerald-900/30 pt-6">
              <div 
                onClick={() => setMode('REGISTER')}
                className="flex items-center gap-2 text-[10px] text-emerald-800 hover:text-emerald-400 transition-colors uppercase tracking-tighter"
              >
                <UserPlus size={14} /> New_Registration
              </div>
              <div 
                onClick={() => setMode('RECOVER')}
                className="flex items-center justify-end gap-2 text-[10px] text-emerald-800 hover:text-emerald-400 transition-colors uppercase tracking-tighter"
              >
                <HelpCircle size={14} /> Forgot_Secret
              </div>
            </div>
          </motion.div>
        )}

        {mode === 'REGISTER' && (
          <motion.div 
            key="register"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-6xl z-10"
          >
            <div className="mb-4 flex items-center justify-between">
              <div onClick={() => setMode('SIGN_IN')} className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-mono text-xs uppercase">
                <ArrowLeft size={16} /> Return_to_Auth
              </div>
              <div className="text-emerald-900 text-[10px] uppercase font-mono tracking-widest animate-pulse">
                Initiating_New_Agent_Protocol...
              </div>
            </div>
            {/* 直接復用你的 AddAgentPage 組件 */}
            <div className="border border-emerald-500/20 rounded-lg overflow-hidden shadow-2xl">
              <AddAgentPage onSave={handleRegisterSave} onCancel={() => setMode('SIGN_IN')} />
            </div>
          </motion.div>
        )}

        {mode === 'RECOVER' && (
          <motion.div 
            key="recover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full border border-red-500/30 bg-slate-900/50 p-8 backdrop-blur-xl z-10"
          >
            <div className="text-center mb-8">
              <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4 animate-pulse" />
              <h2 className="text-xl font-black text-red-500 uppercase tracking-widest">Protocol_Recovery</h2>
              <p className="text-[10px] text-red-900 mt-2 uppercase italic leading-relaxed">
                遺失密鑰將啟動身份重新掃描程序。請輸入您的註冊信箱以獲取臨時連結。
              </p>
            </div>
            <div className="space-y-4">
              <input 
                type="email"
                placeholder="COMMANDER_EMAIL@NET.COM"
                className="w-full bg-slate-950 border border-red-900/50 py-4 px-4 text-red-500 text-xs focus:outline-none focus:border-red-500 font-mono"
              />
              <div className="w-full py-4 bg-red-900 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all">
                Send_Recovery_Signal
              </div>
              <div onClick={() => setMode('SIGN_IN')} className="w-full text-[10px] text-red-900 hover:text-red-500 uppercase underline">
                Back_to_Auth
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 裝飾性警告與底部資訊 */}
      {mode === 'SIGN_IN' && (
        <div className="fixed bottom-24 max-w-md px-8 opacity-40 pointer-events-none">
           <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-900/30">
            <ShieldAlert className="text-red-900 shrink-0" size={16} />
            <p className="text-[9px] text-red-900/70 leading-relaxed uppercase">
              Warning: Unauthorized access attempts are logged and reported to the central network. Use of this terminal implies consent to monitoring.
            </p>
          </div>
        </div>
      )}

      {/* 底部浮動文字 */}
      <div className="fixed bottom-6 left-6 text-[8px] text-emerald-950 font-mono tracking-tighter opacity-50">
        SYSTEM_PORT: 8080 // AUTH_MODE: {mode} // NODE: {Math.random().toString(36).substring(7).toUpperCase()}
      </div>
    </div>
  );
};

export default AdminGate;