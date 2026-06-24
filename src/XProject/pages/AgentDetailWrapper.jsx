import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AgentDetail from './AgentDetail';
import { mockDogs } from '../fakedata/mockDogs';

const AgentDetailWrapper = () => {
  const { agentId } = useParams(); // 取得 URL 中的 :agentId
  const navigate = useNavigate();

  // 模擬從資料庫查找 (正式環境可使用 useEffect 串接 API)
  const dog = mockDogs.find(d => d.id === agentId); 

  if (!dog) return <div className="p-20 text-red-500 uppercase">Error: Agent_Not_Found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950"
    >
      <AgentDetail 
        dog={dog} 
        onBack={() => navigate('/XProject/archive')} // 返回清單頁
      />
    </motion.div>
  );
};

export default AgentDetailWrapper