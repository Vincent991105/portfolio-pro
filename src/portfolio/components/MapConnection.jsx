import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// 修正語法：設定預設值並傳入 props
function MapConnection({ 
  Apoint = [102.25, 2.19],  // 預設為麻六甲
  Bpoint = [121.56, 25.03], // 預設為台北
  lineColor = "#6366f1", 
  strokeWidth = 2.5 
}) {
  return (
    <div className="w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 800,        // 稍微再放大一點看亞洲
          center: [112, 16]  // 調整中心點讓兩點更均衡
        }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e293b"
                stroke="#334155"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#2d3748", outline: "none" }
                }}
              />
            ))
          }
        </Geographies>

        {/* 畫出 A 點到 B 點的連線 */}
        <Line
          from={Apoint}
          to={Bpoint}
          stroke={lineColor}
          strokeWidth={strokeWidth}
          strokeDasharray="10, 8"
          strokeLinecap="round"
          className="animate-dash-flow"
        />

        {/* A 點標記 (Melaka) */}
        <Marker coordinates={Apoint}>
          <circle r={5} fill="#fb7185" className="animate-ping opacity-75" />
          <circle r={4} fill="#fb7185" />
          <text textAnchor="middle" y={-15} className="text-[14px] fill-slate-300 font-bold select-none">
            Melaka
          </text>
        </Marker>

        {/* B 點標記 (Taipei) */}
        <Marker coordinates={Bpoint}>
          <circle r={5} fill="#34d399" className="animate-ping opacity-75" />
          <circle r={4} fill="#34d399" />
          <text textAnchor="middle" y={-15} className="text-[14px] fill-slate-300 font-bold select-none">
            Taipei
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
}

export default MapConnection;