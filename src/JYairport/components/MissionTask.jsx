import { useState } from "react";

function MissionTask(){

    // 記錄當前選中的 ID (假設預設選中第 0 個)
    const [activeId, setActiveId] = useState('');

    const selectFilter = (id) =>{
        if(id === activeId){
            setActiveId('')
        }else{
            setActiveId(id)
        }
    }

    const colorMap = {
        0: { active: 'bg-red-500', inactive: 'bg-red-900', glow: 'shadow-[0_0_10px_rgba(239,68,68,0.5)]' },
        1: { active: 'bg-blue-500', inactive: 'bg-blue-900', glow: 'shadow-[0_0_10px_rgba(59,130,246,0.5)]' },
        2: { active: 'bg-green-500', inactive: 'bg-green-900', glow: 'shadow-[0_0_10px_rgba(34,197,94,0.5)]' },
        3: { active: 'bg-purple-500', inactive: 'bg-purple-900', glow: 'shadow-[0_0_10px_rgba(168,85,247,0.5)]' },
    };

    const missions = [
        { id: 0, name: 'A-380', status: 'XXX' },
        { id: 1, name: 'B-380', status: 'XXX' },
        { id: 2, name: 'C-380', status: 'XXX' },
        { id: 3, name: 'D-380', status: 'XXX' },
    ];

    const missionData = [
        { id: 0, name: 'A-380', x: 52, y: 48, time: '11:12:13', degree: '126', feet: '32', offset: '31' },
        { id: 1, name: 'B-380', x: 35, y: 25, time: '11:14:05', degree: '45',  feet: '110', offset: '15' },
        { id: 2, name: 'C-380', x: 68, y: 72, time: '11:15:22', degree: '210', feet: '85',  offset: '42' },
        { id: 3, name: 'D-380', x: 15, y: 85, time: '11:16:41', degree: '315', feet: '220', offset: '12' },
        { id: 4, name: 'C-380', x: 28, y: 62, time: '11:17:10', degree: '195', feet: '45',  offset: '8'  },
        { id: 5, name: 'A-380', x: 55, y: 55, time: '11:18:00', degree: '130', feet: '35',  offset: '28' },
        { id: 6, name: 'B-380', x: 42, y: 38, time: '11:18:45', degree: '50',  feet: '95',  offset: '20' },
        { id: 7, name: 'D-380', x: 80, y: 20, time: '11:19:30', degree: '20',  feet: '310', offset: '55' }
    ];

    const colorRef = {};
    missions.forEach((item, index) => {
        colorRef[item.name] = index % 4; // 0:紅, 1:藍, 2:綠, 3:紫
    });

    return(
        <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-3 pl-5 py-3 border-l-2 border-l-[#00FFFF]">
                <div className="flex w-full gap-3">
                    <h4 className="flex-1 text-[#00FFFF] font-bold text-xl">任務編號:3684</h4>
                    <div className="px-3 py-1 bg-[#254754] text-[#00FFFF] shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded cursor-pointer hover:bg-white/20">投彈</div>
                    <div className="px-3 py-1 bg-[#254754] text-[#00FFFF] shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded cursor-pointer hover:bg-white/20">結束任務</div>
                </div>
                <div className="flex gap-5 w-full">
                    {missions.map((mission, index) => {
                        const isActive = activeId === mission.name;
                        const colors = colorMap[index]; // 取得該 index 的顏色配置

                        return (
                        <div
                            key={mission.id}
                            onClick={() => selectFilter(mission.name)}
                            className={`flex flex-col w-[calc(25%-15px)] gap-2 px-5 py-2 items-center rounded cursor-pointer transition-all shadow-[0_4px_4px_rgba(0,0,0,0.5)]
                            ${isActive ? "bg-[#1A6B93] text-white" : "bg-black/40 text-gray-400"}
                            `}
                        >
                            <div className="flex h-full w-full gap-3 items-center h-2">
                            {/* 2. 根據 index 顯示對應顏色，且選中時增加發光效果 */}
                            <span className={`h-2 flex-1 rounded transition-all ${
                                isActive ? `${colors.active} ${colors.glow}` : colors.inactive
                            }`}></span>
                            <h4 className="font-bold">{mission.name}</h4>
                            </div>

                            <div className={`flex w-full justify-center gap-3 rounded py-1 ${isActive ? 'bg-black/20' : 'bg-black/40'}`}>
                            <h4>{mission.status}</h4>
                            <h4>{mission.status}</h4>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-1 h-0 w-full gap-5">
                <div className="relative flex h-full border-2 border-white/20 rounded overflow-hidden">
                    <img src="/三環靶_black.png" alt="三環靶" className="h-full object-contain" />

                    {missionData
                    .filter((data) => {
                        if (!activeId) return true;
                        return data.name === activeId;
                    })
                    .map((mission, index) => { // 加上 index
                        const planeKey = mission.name;
                        const colorIndex = colorRef[planeKey] ?? 0;
                        const config = colorMap[colorIndex];

                        return (
                            <span
                                key={mission.id || index} // 使用唯一的 id 或 index 作為 key
                                className={`absolute h-[10px] w-[10px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500
                                    ${config.active} ${config.glow}`}
                                style={{ 
                                    left: `${mission.x}%`, 
                                    top: `${mission.y}%` 
                                }}
                            />
                        );
                    })
                }
                </div>
                <div className="flex h-full flex-1 pl-4 pr-2 py-4 bg-[#000000]/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] rounded">
                    
                    <div className="flex flex-col h-full pr-2 w-full items-start overflow-y-auto custom-scrollbar">
                        {missionData.
                        filter((data) => {
                            if(!activeId){
                                return true;
                            }
                            return data.name === activeId;
                        })
                        .reverse()
                        .map((data, index) => {
                            // 1. 取得該飛機名稱對應的顏色索引 (A-380=0, B-380=1...)
                            const planeKey = data.name;
                            const colorIndex = colorRef[planeKey] ?? 0;
                            const config = colorMap[colorIndex];

                            return (
                                <div 
                                    key={index} 
                                    className="flex w-full flex-col gap-2 bg-[#253544] px-5 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.5)] rounded mb-3 last:mb-0 flex-none border border-white/5"
                                >
                                    {/* 頂部：顏色條、名稱、時間 */}
                                    <div className="flex w-full gap-5 items-center">
                                        <span className={`h-2 flex-1 rounded-full ${config.active} ${config.glow}`} />
                                        <h4 className="font-bold text-white tracking-wider">{data.name}</h4>
                                        {/* 如果 data 有時間就顯示，沒有就給預設值 */}
                                        <p className="text-xs text-gray-400 font-mono">{data.time || '00:00:00'}</p>
                                    </div>
                                    
                                    {/* 數據列：角度/呎數 與 偏差 */}
                                    <div className="flex justify-between gap-2">
                                        <div className="flex-1 p-2 bg-black/40 text-xs text-white rounded text-center border border-white/5">
                                            {data.degree || '--'}度  {data.feet || '--'}呎
                                        </div>
                                        <div className="flex-1 p-2 bg-black/40 text-xs text-cyan-400 rounded text-center border border-white/5">
                                            偏差: {data.offset || '0'}呎
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MissionTask