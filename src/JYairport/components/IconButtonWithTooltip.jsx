function IconButtonWithTooltip({ icon: Icon, label, onClick }) {
    return (
        <div 
            className="relative group cursor-pointer" 
            onClick={onClick}
        >
            <Icon size={30} color='#00FFFF'/>
            
            {/* Tooltip 容器 - 改為向下顯示 */}
            <div className="absolute left-1/2 top-[calc(100%+15px)] -translate-x-1/2 px-3 py-1.5 bg-black border border-[#00FFFF] text-[#00FFFF] text-xs font-bold rounded shadow-[0_0_15px_rgba(0,255,255,0.4)] opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none whitespace-nowrap z-50">
                {label}
                
                {/* Tooltip 的上方小箭頭 */}
                <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 bg-black border-l border-t border-[#00FFFF] rotate-45"></div>
            </div>
        </div>
    );
}

export default IconButtonWithTooltip;