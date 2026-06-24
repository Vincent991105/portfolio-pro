import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MissonListData } from '../fakedata/MissonListData'; // 確保路徑正確

function MissionList() {
    const [missions, setMissions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();
    const { id: activeId } = useParams();

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            // 模擬一點延遲感
            await new Promise(resolve => setTimeout(resolve, 400));
            setMissions(MissonListData.data);
            setLoading(false);
        };
        loadData();
    }, []);

    const filteredData = useMemo(() => {
        return missions.filter(item => 
            item.task_no.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, missions]);

    return (
        <div className="flex flex-col flex-1 gap-[10px] overflow-hidden h-full">
            {/* --- 搜尋框：一定要在 map 之外 --- */}
            <input 
                type="text" 
                className="cyber-input" 
                placeholder="請輸入任務編號"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* --- 列表區塊 --- */}
            <div className="flex flex-col flex-1 px-[10px] gap-[10px] overflow-y-auto custom-scrollbar">
                {loading ? (
                    <div className="flex justify-center items-center py-10 text-[#00FFFF] animate-pulse">
                        SYSTEM LOADING...
                    </div>
                ) : (
                    filteredData.map((item) => {
                        const isActive = activeId === String(item.id);
                        
                        return (
                            <div 
                                key={item.id} 
                                onClick={() => navigate(`${item.id}`)}
                                className={`flex w-full gap-[20px] px-[20px] py-[15px] justify-center items-center rounded-2xl border transition-all mb-3 cursor-pointer
                                    ${isActive 
                                        ? 'bg-[#00FFFF]/20 border-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.2)]' 
                                        : 'bg-[#FFFFFF]/10 border-white/5 hover:bg-[#FFFFFF]/20 hover:border-[#00FFFF]/30'
                                    }`}
                            >
                                {/* 左側狀態燈點 */}
                                <span className={`w-[12px] h-[12px] rounded-full shadow-[0_0_10px] 
                                    ${item.is_active ? 'bg-[#00FFFF] shadow-[#00FFFF]' : 'bg-gray-600 shadow-transparent'}`}>
                                </span>
                                
                                {/* 中間資訊區 */}
                                <div className="flex flex-col flex-1 gap-[2px] text-[#FFFFFF]">
                                    <h4 className={`font-black text-lg tracking-wide transition-colors ${isActive ? 'text-white' : 'text-[#00FFFF]'}`}>
                                        任務編號：{item.task_no}
                                    </h4>
                                    <div className="flex gap-4 opacity-80 text-sm">
                                        <span className="font-bold">機型：{item.aircraft_model}</span>
                                        <span>|</span>
                                        <p>靶場時間：{item.scheduled_start_time.split(' ')[1]} ~ {item.scheduled_end_time.split(' ')[1]}</p>
                                    </div>
                                </div>
                                
                                {/* 右側按鈕 */}
                                <div 
                                    onClick={(e) => {
                                        // 1. 確保這裡有傳入 (e)
                                        e.stopPropagation(); 
                                        
                                        // 2. 只有在非啟動狀態下才執行跳轉
                                        if (!isActive) {
                                            navigate('../JYMissionResult');
                                        }
                                    }} 
                                    className={`flex px-[20px] py-[8px] justify-center font-black rounded-xl transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)]
                                        ${isActive ? 'bg-white text-black' : 'bg-[#00FFFF] text-black hover:bg-white'}`}
                                >
                                    {isActive ? '檢視中' : '選擇任務'}
                                </div>
                            </div>
                        );
                    })
                )}

                {/* 查無資料提示 */}
                {!loading && filteredData.length === 0 && (
                    <div className="text-center py-10 text-white/30 italic">
                        未找到相關任務編號
                    </div>
                )}
            </div>
        </div>
    );
}

export default MissionList;