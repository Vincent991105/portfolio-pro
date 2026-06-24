import './css/JYairport.css'
import { Outlet } from "react-router-dom"
import JYMenuContainer from './components/JYMenuContainer'
import RadioButton from '../portfolio/components/RadioButton'
import { useState } from 'react';
import { IoLogOut, IoFlower, IoPersonSharp } from "react-icons/io5";
import IconButtonWithTooltip from './components/IconButtonWithTooltip';

function JYairport (){

    const [isMonitor, setIsMonitor] = useState(false);

    return(
        <div className="flex flex-col w-full h-full bg-[#171F31] items-center gap-2">
            <div className="relative h-[80px] flex w-full justify-center items-center py-[10px]">
                <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-center items-center">
                    <span className="flex-1 h-[3px] bg-[#00FFFF] rounded"></span>
                    <div className="flex justify-center items-center p-5 gap-5">
                        <IconButtonWithTooltip icon={IoFlower} label="管理員中心" onClick={() => console.log("管理員中心")}/>
                        <IconButtonWithTooltip icon={IoPersonSharp} label="個任中心" onClick={() => console.log("個任中心")}/>
                        <IconButtonWithTooltip icon={IoLogOut} label="登出" onClick={() => console.log("登出")}/>
                    </div>
                </div>
                <RadioButton  optionA = "報靶系統" optionB = "中央監控系統" css='top-[40%] -translate-y-1/2 left-[-40%]' isOptionB={isMonitor} onToggle={() => setIsMonitor(!isMonitor)}/>
                <JYMenuContainer />
                {/* <h1>LOGO</h1> */}
                {/* <span className="flex-1 h-[3px] bg-[#00FFFF] rounded"></span> */}
            </div>
            {/* <div className="flex gap-8 items-center">
                <h1 className="text-[#00FFFF] border-b-2 border-[#00FFFF] cursor-pointer font-bold">
                    即時影像
                </h1>
                <h1 className="text-gray-400 hover:text-white cursor-pointer transition-all border-b-2 border-transparent">
                    歷史影像
                </h1>
                <h1 className="text-gray-400 hover:text-white cursor-pointer transition-all border-b-2 border-transparent">
                    監控畫面
                </h1>
            </div> */}
            <div className="flex flex-1 h-0 w-full px-[20px] py-[10px]">
                <Outlet />
            </div>
        </div>
    )
}

export default JYairport