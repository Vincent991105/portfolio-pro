import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, AlertTriangle, ArrowLeft } from 'lucide-react';

const AdminForget = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full border border-red-500/30 bg-slate-900/50 p-8 backdrop-blur-xl z-10"
    >
      <div className="text-center mb-8">
        <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4 animate-pulse" />
        <h2 className="text-xl font-black text-red-500 uppercase tracking-widest text-shadow-red">Protocol_Recovery</h2>
        <p className="text-[10px] text-red-900 mt-2 uppercase italic leading-relaxed">
          遺失密鑰將啟動身份重新掃描程序。
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[9px] text-red-900 uppercase font-bold tracking-[0.2em]">REGISTERED_COMMANDER_EMAIL</label>
          <input 
            type="email" placeholder="USER@STRAY_AGENTS.NET"
            className="w-full bg-slate-950 border border-red-900/50 py-4 px-4 text-red-500 text-xs focus:outline-none focus:border-red-500 font-mono transition-all"
          />
        </div>

        <button className="w-full py-4 bg-red-900 text-white font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)]">
          Send_Recovery_Signal
        </button>

        <Link to="/XProject/admin/login" className="flex items-center justify-center gap-2 text-[10px] text-red-900 hover:text-red-500 transition-colors uppercase">
          <ArrowLeft size={12} /> Back_to_Authentication
        </Link>
      </div>

      <div className="mt-8 flex items-start gap-3 p-4 bg-red-500/5 border border-red-900/20">
        <AlertTriangle className="text-red-900 shrink-0" size={16} />
        <p className="text-[8px] text-red-900/60 leading-tight uppercase">
          WARNING: Excessive recovery requests will trigger a global account lockout.
        </p>
      </div>
    </motion.div>
  );
};

export default AdminForget;