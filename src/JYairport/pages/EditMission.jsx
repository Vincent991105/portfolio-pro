import { useEffect, useState } from "react";
import DraggablePlane from "../components/DraggablePlane"
import MissionSubject from "../components/MissionSubject";
import { useNavigate, useParams } from "react-router-dom";
import { MissonData } from "../fakedata/MissionData";

function EditMission() {
    // 1. 初始化狀態改為空字串，避免受控元件警告
    const [Data, setData] = useState({
        task_no: '',
        aircraft_model: 'F-16',
        scheduled_start_time: '',
        scheduled_end_time: '',
    });
    const [planeData, setPlaneData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { id: activeId } = useParams();

    // 模擬從之前提供的 JSON 格式抓取資料
    useEffect(() => {
        const loadData = async () => {
            if (!activeId) return; // 如果沒有 ID 就不用抓
            
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 400));

            setData({
                task_no: MissonData.task_no,
                aircraft_model: MissonData.aircraft_model,
                scheduled_start_time: MissonData.scheduled_start_time.split(' ')[1],
                scheduled_end_time: MissonData.scheduled_end_time.split(' ')[1],
            });
            setPlaneData(MissonData.assignments);
            setSubjectData(MissonData.waves);
            setLoading(false);
        };
        loadData();
    }, [activeId]);

    // 2. 處理輸入變更，讓 Input 可以編輯
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const addPlane = () => {
        const newPlane = {
            "id": `temp_${Date.now().toString()}`,
            "mission_label": planeData.length + 1,
            "tail_no": "",
            "pilot_front": "",
            "pilot_back": "",
        }
        setPlaneData(prev => [...prev, newPlane]);
    };

    const handleSave = () => {
        // 對飛機編隊進行重新編號(API:/shoot/mission/assignments/save/)
        const finalPlaneData = planeData.map((plane, index) => ({
            ...plane,
            // 關鍵：將排序改為 index + 1 (從 1 開始)
            mission_label: index + 1,
            sort_order: index + 1,
            aircraft_model: Data.aircraft_model,
            id: null
        }));

        // 對演練課目進行重新編號 (wave_no)(API:/shoot/mission/waves/save/)
        const finalSubjectData = subjectData.map((subject, index) => ({
            ...subject,
            wave_no: index + 1
        }));

        const payload = {
            ...Data,
            assignments: finalPlaneData,
            waves: finalSubjectData
        };

        console.log("最終送出的 JSON 資料:", payload);
        // axios.put(`/api/missions/${activeId}`, payload)...
        navigate('..')
    };
    
    if (loading && activeId) return <div className="flex-2 text-[#00FFFF]">LOADING MISSION...</div>;

    return (
        <div className="flex flex-2 flex-col w-full h-full gap-[20px] overflow-hidden">
            {/* 上方表單區 */}
            <div className="flex gap-[15px] text-[#00FFFF] font-bold">
                <div className="cyber-form-group flex-1">
                    <p className="cyber-label">任務編號</p>
                    <span>:</span>
                    <input 
                        name="task_no"
                        value={Data.task_no || ''}
                        onChange={handleChange}
                        type="text" 
                        className="cyber-input flex-1" 
                        placeholder="ENTER ID..."
                    />
                </div>
                <div className="cyber-form-group">
                    <p className="cyber-label">機型</p>
                    <span>:</span>
                    <select 
                        name="aircraft_model" 
                        className="cyber-select" 
                        value={Data.aircraft_model}
                        onChange={handleChange}
                    >
                        <option value="F-16">F-16</option>
                        <option value="IDF">IDF</option>
                    </select>
                </div>
                <div className="cyber-form-group flex-1">
                    <p className="cyber-label">靶場時間</p>
                    <span>:</span>
                    <input 
                        name="scheduled_start_time"
                        value={Data.scheduled_start_time || ''}
                        onChange={handleChange}
                        type="time" 
                        className="cyber-input flex-1" 
                    />
                    <span>~</span>
                    <input 
                        name="scheduled_end_time"
                        value={Data.scheduled_end_time || ''}
                        onChange={handleChange}
                        type="time" 
                        className="cyber-input flex-1" 
                    />
                </div>
                <div 
                    onClick={() => {
                        // 關鍵：如果已經 4 架（或以上），直接 return 不執行新增
                        if (planeData.length >= 4) return;
                        addPlane();
                    }} 
                    className={`
                        flex px-[20px] py-[8px] justify-center font-black rounded-xl transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)]
                        ${planeData.length >= 4 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50 shadow-none' // 禁用樣式
                        : 'bg-[#00FFFF] text-black cursor-pointer hover:bg-white hover:scale-105 active:scale-95' // 啟用樣式
                        }
                    `}
                    >
                    {planeData.length >= 4 ? '已達上限' : '新增任務機'}
                </div>
            </div>

            {/* 中間拖曳區：h-0 配合 flex-1 是撐開高度的秘訣 */}
            <div className="flex flex-1 h-0 w-full gap-[10px]">
                <DraggablePlane data={planeData} onUpdate={(newData) => setPlaneData(newData)} />
                <MissionSubject data={subjectData} onUpdate={(newData) => setSubjectData(newData)} currentAircraft={Data.aircraft_model}/>
            </div>

            {/* 下方按鈕區 */}
            <div className="flex gap-[10px] justify-end">
                <div 
                    onClick={() => navigate('..')}
                    className="flex px-[20px] py-[8px] justify-center bg-[#000000]/30 text-white font-black rounded-xl cursor-pointer hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all"
                >
                    取消
                </div>
                <div 
                    onClick={() => handleSave()}
                    className="flex px-[20px] py-[8px] justify-center bg-[#00FFFF] text-black font-black rounded-xl cursor-pointer hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                >
                    儲存
                </div>
            </div>
        </div>
    );
}

export default EditMission;