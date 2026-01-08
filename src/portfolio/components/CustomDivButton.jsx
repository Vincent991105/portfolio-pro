import { useState, useEffect } from 'react';

function CustomDivButton({ 
  text = "Click Me", 
  onClick, 
  delay = 0,
  bgColor = "bg-white",
  borderColor = "border-black",
  textColor = "text-black",
  activeBgColor = "active:bg-black",
  activeTextColor = "active:text-white",
  className = "" 
}) {
  const [shouldRender, setShouldRender] = useState(false); // 控制是否進入 DOM
  const [isAnimate, setIsAnimate] = useState(false);       // 控制動畫狀態

  useEffect(() => {
    // 1. 延遲後先放進 DOM
    const timer = setTimeout(() => {
      setShouldRender(true);
      // 2. 給予極短延遲（20ms）後觸發 CSS 過渡，確保瀏覽器捕捉到動畫起始點
      setTimeout(() => setIsAnimate(true), 20);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldRender) return null;

  return (
    <div
      onClick={onClick}
      style={{padding:'10px 20px'}}
      className={`
        /* 基礎佈局：確保點擊反應靈敏 */
        cursor-pointer select-none inline-flex items-center justify-center
        px-10 py-4 font-bold border-2 transition-all duration-75
        rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.1)]
        
        /* 初始顏色 */
        ${bgColor} ${borderColor} ${textColor}
        
        /* 物理觸感：按下下沉 4px，放開瞬間彈回 */
        active:translate-y-1 active:shadow-none
        
        /* 按住時的顏色切換 */
        ${activeBgColor} ${activeTextColor}

        /* --- 流暢動畫核心 --- */
        transition-all duration-700 ease-out
        ${isAnimate 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'}
        
        ${className}
      `}
    >
      {text}
    </div>
  );
}

export default CustomDivButton;