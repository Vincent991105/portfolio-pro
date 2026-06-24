import { useState, useRef, useEffect } from 'react'; // 1. 記得引入 useEffect
import { Maximize, Minimize } from 'lucide-react'; 

function DraggableVideo ({ src }){
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- 新增：處理全螢幕狀態同步 (解決 ESC 鍵問題) ---
  useEffect(() => {
    const handleFsChange = () => {
      // 檢查目前全螢幕的元素是否為此容器，更新狀態
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 5));
  };

  const handleMouseDown = (e) => {
    if (e.ctrlKey) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        alert(`無法開啟全螢幕: ${err.message}`);
      });
      // 這裡不需要手動 setIsFullscreen，useEffect 會幫你同步
    } else {
      document.exitFullscreen();
    }
  };

  const handleDoubleClick = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black/30 cursor-grab active:cursor-grabbing group"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onDoubleClick={handleDoubleClick}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <video src={src} className="w-full h-full object-contain pointer-events-none" autoPlay muted loop />
      </div>
      
      <button 
        onClick={toggleFullscreen}
        className="cs-bg-unset absolute top-2 right-2 p-2 text-[#00FFFF] transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>

      <div className="absolute bottom-4 left-4 text-white/50 text-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        Ctrl+左鍵拖曳 | 滾輪縮放 | 雙擊重置
      </div>
    </div>
  );
};

export default DraggableVideo;