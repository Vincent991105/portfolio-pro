import { useState } from 'react';
import JYarrow from '../public/JYarrow';

function JYMenuContainer(){
    const [activeIndex, setActiveIndex] = useState(0); // 0: 即時成績, 1: 資料內容, 2: 成績調閱

    const menus = ["即時成績", "成績調閱"];

    return (
        <div className='absolute left-1/2 -translate-x-1/2 h-[50px] flex justify-center items-center overflow-hidden'>
            {/* 左側箭頭：只有當 index 為 0 (第一個) 時 isActive 為 true */}
            <JYarrow reverse={false} isActive={activeIndex === 0} />

            {menus.map((menu, index) => (
                <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex h-[50px] cursor-pointer items-center justify-center border-y-2 border-[#00FFFF] px-[20px] font-bold transition-all transition-all duration-300 ease-in-out
                        ${activeIndex === index 
                            ? 'bg-[#00FFFF] text-black'    // 選中狀態
                            : 'bg-[#171F31] text-[#00FFFF]' // 未選中狀態
                        }`}
                >
                    <h2 className="tracking-widest">{menu}</h2>
                </div>
            ))}

            {/* 右側箭頭：只有當 index 為最後一個時 isActive 為 true */}
            <JYarrow reverse={true} isActive={activeIndex === menus.length - 1} />
        </div>
    );
};

export default JYMenuContainer