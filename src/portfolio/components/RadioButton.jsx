function RadioButton ({ optionA = "報靶系統", optionB = "中央監控系統", isOptionB, onToggle, css = "" }) {
  return (
    <div className={`relative group ${css}`}>
      {/* --- Tooltip 區塊：置於右側 --- */}
      <div className="absolute left-[calc(100%+15px)] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black border border-[#00FFFF] text-[#00FFFF] text-xs font-bold rounded shadow-[0_0_15px_rgba(0,255,255,0.4)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50">
        {isOptionB ? `切換回 ${optionA}` : `切換至 ${optionB}`}
        
        {/* Tooltip 的指向小箭頭（左側） */}
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-black border-l border-b border-[#00FFFF] rotate-45"></div>
      </div>

      {/* --- 主按鈕區塊 --- */}
      <div 
        onClick={onToggle}
        className="relative flex h-[45px] w-[260px] cursor-pointer items-center rounded-full border-2 border-[#00FFFF] bg-black shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] overflow-hidden"
      >
        {/* 文字區塊 */}
        <div className="relative flex w-full items-center justify-center px-4">
          <span className="font-bold text-lg tracking-widest text-[#00FFFF] transition-all duration-500">
            {isOptionB ? optionB : optionA}
          </span>
        </div>

        {/* 滑動圓鈕 */}
        <div className={`
          absolute h-[35px] w-[35px] rounded-full bg-[#00FFFF] shadow-[0_0_15px_#00FFFF] transition-all duration-500 ease-in-out
          ${isOptionB ? 'left-[calc(100%-40px)]' : 'left-[5px]'}
          group-hover:scale-105
        `} />
      </div>
    </div>
  );
};

export default RadioButton;