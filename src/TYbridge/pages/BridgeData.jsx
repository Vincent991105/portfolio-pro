import { useState } from "react";
import DataChart from "../components/DataChart"
import TabMenu from "../components/TabMenu";

function BridgeData(){

    const [currentTab, setCurrentTab] = useState('list');

    const tabList = [
        { id: 'list', label: '資料列表' },
        { id: 'chart', label: '趨勢圖表' },
    ];

    const healthData = [
        { time: '01/08', score: 85 },
        { time: '01/09', score: 88 },
        { time: '01/10', score: 82 },
        { time: '01/11', score: 90 },
        { time: '01/12', score: 95 },
        { time: '01/13', score: 93 },
        { time: '01/14', score: 96 },
    ];

    return(
        <div className="flex-1 flex flex-col w-full h-full gap-5">
            <img className="w-full h-[200px] rounded" src="/futex.jpg" alt="logo" />
            <div className="flex w-full h-[80px] items-center gap-5">
                <img className="w-[80px] h-[80px] rounded" src="/Doting.jpg" alt="logo2" />
                <div className="flex flex-col flex-1 h-full rounded bg-white px-5 py-3 justify-between">
                    <h2 className="text-2xl font-bold text-[#e95097]">南崁橋</h2>
                    <p className="text-slate-60">新北市XX</p>
                </div>
            </div>
            <div className="flex w-full h-[40px] justify-between items-center">
                <div className="flex h-full gap-3 items-center"> {/* 使用固定高度 h-10 (40px) 較穩定 */}
                    <input 
                        className="h-full w-32 px-4 bg-white/80 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e95097] text-slate-700 text-sm transition-all" 
                        type="date" 
                    />
                    
                    <p className="text-slate-500 font-bold"> ~ </p>
                    
                    <input 
                        className="h-full w-32 px-4 bg-white/80 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e95097] text-slate-700 text-sm transition-all" 
                        type="date" 
                    />
                </div>
                <div className="h-full">
                    <TabMenu 
                        tabs={tabList} 
                        activeTab={currentTab} 
                        onChange={setCurrentTab} 
                    />
                </div>
            </div>
            <DataChart data={healthData} dataKey="score" color="#e95097"/>
        </div>
    )
}

export default BridgeData