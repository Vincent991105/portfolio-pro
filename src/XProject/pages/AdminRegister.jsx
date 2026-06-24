import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import AddAgentPage from './AddAgentPage'; // 調用原始組件

const AdminRegister = () => {
  const navigate = useNavigate();

  const handleRegisterSave = (formData) => {
    // 此處執行儲存邏輯
    console.log("AGENT_DATA_COMMIT:", formData);
    navigate('/XProject/admin/login'); // 註冊成功返回登入
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-6xl p-4"
    >
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-mono text-xs uppercase group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Abort_Registration_and_Return
        </button>
      </div>
      
      <div className="flex-1 border border-emerald-500/20 shadow-2xl">
        <AddAgentPage onSave={handleRegisterSave} onCancel={() => navigate('/XProject/admin/login')} />
      </div>
    </motion.div>
  );
};

export default AdminRegister;