import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BridgeMap from "../components/BridgeMap";
import { FakeBridgePoint } from "../fakeDatabase/FakeBridgeData";

function BridgeMonitor() {

  const { bid } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const showOverlay = location.pathname === '/TYbridge/bridge';

  // 1. 先尋找當前 bid 對應的橋梁資料
  const currentBridge = useMemo(() => {
    return FakeBridgePoint.find(b => b.bid === bid);
  }, [bid]);

  // 2. 設定中心點：如果有找到對應的 bid 資料，就用該點的座標；否則回全台灣中心
  const initialCenter = currentBridge 
    ? [parseFloat(currentBridge.latitude), parseFloat(currentBridge.longitude)] 
    : [23.6978, 120.9605];

  // 3. 設定縮放層級：有 bid 時放大到 15，沒資料（全台）時設為 7.5
  const initialZoom = currentBridge ? 15 : 7.5;

  // 假設地震資料也可以從 fakeDatabase 引入，或者先給空陣列
  const fakeEarthquake = [{
    place: [24.144, 121.617], // 花蓮外海
    level: 6.2,
    impactRadius: 80, // 影響半徑 80 公里
  }]; 

  return (
    /** * 1. 確保外層 div 有高度，否則地圖會縮成一條線 (h-screen 代表全螢幕高度)
     * 2. bg-slate-900 配合地圖的 dark 模式
     */
    <div className="w-full h-screen bg-[#a7d3e0] flex flex-col">
      {/* 容器設為 relative 讓內部的 absolute 有參考點 */}
      <div className="flex-1 relative overflow-hidden">
        
        {/* 1. 地圖層：撐滿整個底層 */}
        <div className="absolute inset-0 z-0">
          <BridgeMap 
            initialCenter = {initialCenter}
            initialZoom = {initialZoom}
            listData={FakeBridgePoint}
            earthquakeData={fakeEarthquake} 
            displayMode="icon"
            colormode="light"
            onPointClick={(item) => navigate(item)}
          />
        </div>

        {/* 2. 內容層 (Outlet)：浮動在地圖右上角 */}
        {/* 使用 absolute，並設定 z-index 確保在最上層 */}
        {!showOverlay && <div className="absolute flex flex-col top-5 right-5 z-10 
                        w-[700px] h-[calc(100vh-2.5rem)]
                        bg-white/60 backdrop-blur-md 
                        shadow-2xl rounded-2xl
                        overflow-hidden">
          {/* 標題列：固定在最上方 */}
          <div className="flex w-full h-[60px] bg-[#e95097] px-6 items-center justify-between shadow-lg">
            <h3 className="text-white font-bold text-xl tracking-wide">功能視窗</h3>
            <button 
              id="close" 
              className="w-8 h-8 flex items-center justify-center rounded-full 
                        bg-white/20 text-white 
                        hover:bg-white hover:text-[#e95097] 
                        transition-all duration-200 shadow-sm"
              onClick={() => navigate('..')}
            >
              <span className="text-lg font-bold text-[#e95097]">✕</span>
            </button>
          </div>

          {/* 內容區：自動撐開並在內容過多時顯示捲軸 */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-300">
            <Outlet />
          </div>
        </div>}
      </div>
    </div>
  );
}

export default BridgeMonitor;