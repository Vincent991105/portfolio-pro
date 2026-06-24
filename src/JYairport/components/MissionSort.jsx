import { IoBuild } from "react-icons/io5";
import IconButtonWithTooltip from "./IconButtonWithTooltip";

function MissionSort(){
    return(
        <div className="flex flex-col flex-1 w-full gap-[10px] p-[20px] bg-[#000000]/40 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex w-full items-center gap-[10px]">
                <IconButtonWithTooltip icon={IoBuild} label="調整任務機資訊" onClick={() => console.log("調整任務機資訊")}/>
                <h4 className="flex-1 font-black text-lg tracking-wide text-white">
                    任務編號：FC-135
                </h4>
                <div 
                    className={`flex px-[20px] py-[8px] justify-center font-black rounded-xl transition-all cursor-pointer border-1 border-white/20 bg-white/10 text-[#FF0000] hover:border-[#FF0000]`}
                >
                    終止任務
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-[15px] text-[#00FFFF] bg-[#FFFFFF]/10 rounded-2xl p-4 border border-white/5 shadow-[inset_0_0_15px_rgba(0,0,0,0.2)] w-full transition-colors">
                    <h4># 1</h4>
                    <h4></h4>
                </div>
            </div>
        </div>
    )
}

export default MissionSort