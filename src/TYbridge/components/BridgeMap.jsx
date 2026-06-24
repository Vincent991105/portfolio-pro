import React, { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet";
import L, { bind } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";

// 處理地圖視角動態跳轉 (飛到指定中心點)
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || map.getZoom(), { animate: true });
    }
  }, [center, zoom, map]);
  return null;
}

// 解決容器寬度變動時，地圖圖磚載入不全的問題
function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

/**
 * @param {Array} initialCenter - 起始中心點 [lat, lng]
 * @param {Number} initialZoom - 起始縮放層級
 * @param {Array} listData - 橋梁或點位清單
 * @param {Array} earthquakeData - 地震資料 [{ place: [lat, lng], level: 5, impactRadius: 50 }]
 * @param {String} displayMode - "icon" (圖示) 或 "cluster" (統計)
 * @param {String} colormode - "dark" 或 "light"
 * @param {Function} onPointClick - 點擊點位回調
 */
function BridgeMap({ 
  initialCenter = [23.6978, 120.9605], 
  initialZoom = 7.5,
  listData = [], 
  earthquakeData = [], 
  displayMode = "icon", 
  colormode = "dark",
  onPointClick 
}) {

  const { bid } = useParams();
  
  const lightTileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const darkTileLayer = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  // --- 圖示生成邏輯 ---
  const icons = useMemo(() => ({
    bridge: (color = "#373F74") => L.divIcon({
      className: "custom-div-icon",
      html: `<svg width="25" height="20" viewBox="0 0 25 20"><path d="M12.5314 0C8.73692 0 5.42596 2.24434 3.65892 5.58109H0.539062V10.7471H6.77878C6.95478 7.45567 9.45778 4.84334 12.5305 4.84334C15.6033 4.84334 18.1063 7.45567 18.2823 10.7471H24.522V5.58109H21.4021C19.636 2.24434 16.3241 0 12.5296 0H12.5314ZM0.539062 11.667V20H6.7859V11.667H0.539062ZM18.2769 11.667V20H24.5238V11.667H18.2769Z" fill="${color}"/></svg>`,
      iconSize: [32, 32],
      iconAnchor: [16, 10]
    }),
    cluster: (count) => L.divIcon({
      className: "cluster-icon",
      html: `<div style="width:32px;height:32px;background:#e95098;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;border:2px solid white;box-shadow:0 2px 5px rgba(0,0,0,0.3)">${count}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })
  }), []);

  return (
    <div className="w-full h-full relative" style={{ minHeight: "400px" }}>
      <MapContainer
        center={initialCenter}
        zoom={initialZoom}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* 核心功能組件 */}
        <ResizeMap />
        <ChangeView center={initialCenter} zoom={initialZoom} />
        
        <TileLayer url={colormode === "dark" ? darkTileLayer : lightTileLayer} />

        {/* 1. 地震擴散效果 (多層 Circle 模擬) */}
        {earthquakeData.map((eq, idx) => (
          <React.Fragment key={`eq-${idx}`}>
            <Circle
              center={eq.place}
              radius={eq.impactRadius * 1000}
              pathOptions={{ fillColor: 'red', fillOpacity: 0.2, stroke: false }}
            />
            <Circle
              center={eq.place}
              radius={(eq.impactRadius * 1000) / 2}
              pathOptions={{ fillColor: 'red', fillOpacity: 0.4, stroke: false }}
            />
          </React.Fragment>
        ))}

        {/* 2. 橋梁或點位呈現 */}
        {listData.map((item, idx) => {
          const position = [parseFloat(item.latitude), parseFloat(item.longitude)];
          if (isNaN(position[0]) || isNaN(position[1])) return null;

          return (
            <Marker
              key={`point-${idx}`}
              position={position}
              icon={
                displayMode === "cluster" 
                ? icons.cluster(item.list?.length || 0) 
                : icons.bridge(item.bid === bid ? "#e95098" : "#373F74")
              }
              eventHandlers={{
                click: () => onPointClick && onPointClick(item.bid)
              }}
            />
          );
        })}
      </MapContainer>

      {/* SVG 定義漸層 (用於擴展視覺效果) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <radialGradient id="earthquake-gradient">
            <stop offset="0%" stopColor="red" stopOpacity="0.8" />
            <stop offset="100%" stopColor="red" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default BridgeMap;