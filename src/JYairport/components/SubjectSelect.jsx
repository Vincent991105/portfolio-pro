import { useState, useMemo } from "react"
import { subjectData } from "../fakedata/subjectData";

function SubjectSelect() {
    // 狀態管理
    const [select, setSelect] = useState('AWD'); 
    const [selectedId, setSelectedId] = useState(15); // 初始 ID
    const [currentAircraft, setCurrentAircraft] = useState('F-16'); 

    // 1. 根據機型過濾
    const filteredByModel = useMemo(() => {
        return subjectData.data.filter(opt => opt.aircraft_model === currentAircraft);
    }, [currentAircraft]);

    // 2. 根據戰術分類過濾 (僅決定下方顯示哪些按鈕)
    const displaySubjects = useMemo(() => {
        return filteredByModel.filter(item => item.tactic === select);
    }, [filteredByModel, select]);

    // --- 移除自動選取的 useEffect ---
    // 現在只有手動點擊才會更換 selectedId

    return (
        <div className="flex flex-col gap-[20px] w-full">
            {/* 上方類別切換區 */}
            <div className="flex gap-[10px] pl-[20px] items-center border-l-4 border-[#00FFFF]">
                <h4 className="flex-1 font-black text-lg tracking-wide text-[#00FFFF]">
                    課目設定：{currentAircraft}
                </h4>
                
                {['AWD', 'BWD', 'RDR'].map((cat) => (
                    <div 
                        key={cat}
                        onClick={() => setSelect(cat)} // 僅切換顯示類別，不更動 ID
                        className={`flex px-[20px] py-[8px] justify-center font-black rounded-xl transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)] cursor-pointer
                        ${select === cat ? 'bg-white text-black scale-105' : 'bg-[#00FFFF] text-black hover:bg-white/80'}`}
                    >
                        {cat === 'AWD' ? '標準' : cat === 'BWD' ? '戰術' : '雷達'}
                    </div>
                ))}
            </div>

            {/* 下方課目按鈕區 */}
            <div className="grid grid-cols-3 gap-[15px] p-[5px]">
                {displaySubjects.map((sub) => {
                    // 比對選中的 ID
                    const isActive = selectedId === sub.id;

                    return (
                        <div 
                            key={sub.id}
                            onClick={() => setSelectedId(sub.id)} // 只有這裡會更換 ID
                            className={`flex flex-col items-center justify-center py-[15px] rounded-2xl cursor-pointer transition-all group border
                                ${isActive 
                                    ? 'bg-[#00FFFF] border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.5)] scale-105' 
                                    : 'bg-[#FFFFFF]/10 border-white/10 hover:border-[#00FFFF]/50'
                                }`}
                        >
                            <span className={`font-bold transition-colors 
                                ${isActive ? 'text-black' : 'text-white group-hover:text-[#00FFFF]'}`}>
                                {sub.display_label}
                            </span>
                            <span className={`text-xs uppercase tracking-tighter transition-colors
                                ${isActive ? 'text-black/60' : 'text-white/40'}`}>
                                {sub.mission_type}
                            </span>
                        </div>
                    );
                })}

                {/* 查無課目提示 */}
                {displaySubjects.length === 0 && (
                    <div className="col-span-3 text-center py-10 text-white/20 italic">
                        NO SUBJECTS IN THIS CATEGORY
                    </div>
                )}
            </div>
        </div>
    )
}

export default SubjectSelect