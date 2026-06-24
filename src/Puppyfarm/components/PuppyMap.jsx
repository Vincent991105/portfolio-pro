import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// 台灣各縣市中心座標與數據 (範例)
const taiwanData = [
  { name: "台北市", coordinates: [121.56, 25.03], count: 88 },
  { name: "新北市", coordinates: [121.50, 24.91], count: 120 },
  { name: "桃園市", coordinates: [121.30, 24.99], count: 45 },
  { name: "台中市", coordinates: [120.67, 24.14], count: 72 },
  { name: "台南市", coordinates: [120.22, 22.99], count: 33 },
  { name: "高雄市", coordinates: [120.31, 22.62], count: 64 },
  { name: "宜蘭縣", coordinates: [121.75, 24.75], count: 12 },
  { name: "花蓮縣", coordinates: [121.60, 23.97], count: 9 },
  { name: "台東縣", coordinates: [121.15, 22.75], count: 5 },
  // ... 可持續加入其他縣市
];

// 台灣縣市邊界 TopoJSON (推薦使用 g0v 整理的開放資料)
const geoUrl = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/taiwan.geojson";

const PuppyMap = () => {
  const handleMarkerClick = (city) => {
    alert(`點選了 ${city.name}，數據量為：${city.count}`);
  };

  return (
    <div className="w-full h-[600px] bg-black/40 rounded-[2rem] border border-[#00FFFF]/20 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 10000,          // 台灣全島縮放比例
          center: [120.97, 23.6] // 台灣中心經緯度
        }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0a0f1d"
                stroke="#00FFFF"
                strokeWidth={0.8}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#162035", outline: "none", cursor: "pointer" },
                  pressed: { fill: "#00FFFF", opacity: 0.3, outline: "none" }
                }}
              />
            ))
          }
        </Geographies>

        {/* 渲染各縣市的數據圓圈 */}
        {taiwanData.map((city) => (
          <Marker 
            key={city.name} 
            coordinates={city.coordinates}
            onClick={() => handleMarkerClick(city)}
          >
            {/* 外圈發光效果 */}
            <circle r={14} fill="#00FFFF" className="opacity-20 animate-pulse cursor-pointer" />
            
            {/* 主圓圈 */}
            <circle 
              r={10} 
              fill="#00FFFF" 
              className="cursor-pointer hover:fill-white transition-all duration-300" 
            />
            
            {/* 數字文字 (不換行) */}
            <text
              textAnchor="middle"
              y={4}
              className="fill-black text-[11px] font-black pointer-events-none select-none"
            >
              {city.count}
            </text>

            {/* 縣市名稱標籤 (Hover 時顯示) */}
            <text
              textAnchor="middle"
              y={28}
              className="fill-[#00FFFF] text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              {city.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default PuppyMap;