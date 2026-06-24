import { AiFillFileUnknown } from "react-icons/ai";
import { styled, Tooltip, tooltipClasses } from "@mui/material";

function BridgeList ({ list, onSelect, getColor }){

    const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
        ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: { backgroundColor: "#36454F", fontSize: "18px" },
    }));

    return (
        <div className="w-full overflow-hidden rounded border border-white/10 shadow-2xl bg-slate-900/50">
            {/* 關鍵修正：確保這裡有 overflow-auto 與 max-height */}
            <div className="overflow-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-slate-700">
                <table className="w-full text-center border-collapse">
                    {/* 表頭固定：必須設定背景顏色，否則捲動時文字會重疊 */}
                    <thead className="sticky top-0 z-20 bg-[#36454F] text-white">
                        <tr className="text-sm uppercase tracking-wider">
                            <th className="p-4 font-bold border-b border-white/10">建物名稱</th>
                            <th className="p-4 font-bold border-b border-white/10">觀測站</th>
                            <th className="p-4 font-bold border-b border-white/10">異常感測器</th>
                            <th className="p-4 font-bold border-b border-white/10">健康度</th>
                            <th className="p-4 font-bold border-b border-white/10">斜率值</th>
                            <th className="p-4 font-bold border-b border-white/10">地震影響</th>
                            <th className="p-4 font-bold border-b border-white/10">颱風影響</th>
                        </tr>
                    </thead>

                    <tbody className="overflow-auto text-black bg-white">
                        {list?.length > 0 ? (
                        list.map((item) => {
                            const eqStyle = getColor(Number(item.earthquake?.beforeAfter ?? 0));
                            const tyStyle = getColor(Number(item.typhoon?.beforeAfter ?? 0));

                            return (
                            <tr
                                key={item.bid}
                                onClick={() => onSelect(item.bid)}
                                className="cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5"
                            >
                                <td className="p-3 font-bold">{item.name}</td>
                                <td className="p-3">
                                <CustomTooltip
                                    title={
                                    <div className="text-xs p-1 leading-relaxed">
                                        雨量: {item.station.detail.precipitation} mm<br />
                                        溫度: {item.station.detail.temperature} °C<br />
                                        風速: {item.station.detail.windSpeed} m/s
                                    </div>
                                    }
                                >
                                    <span className="text-blue-400 underline decoration-dotted cursor-help">
                                    {item.station.name}
                                    </span>
                                </CustomTooltip>
                                </td>
                                <td className="p-3 font-bold text-red-500">
                                {item.anomaly_sensor_list.counts} 顆
                                </td>
                                <td className="p-3">
                                {item.latest_health ? `${item.latest_health}%` : "無資料"}
                                </td>
                                <td className="p-3 text-xs leading-tight">
                                <div className="text-orange-400">警戒: {item.slope.daysUntilAlert ?? "--"}天</div>
                                <div className="text-red-400">行動: {item.slope.daysUntilMove ?? "--"}天</div>
                                </td>
                                
                                {/* 地震影響單元格 */}
                                <td 
                                className="p-2 text-[10px] border-l border-white/5"
                                style={{ backgroundColor: eqStyle.bg, color: eqStyle.font }}
                                >
                                <div className="font-bold">前後: {item.earthquake.beforeAfter?.toFixed(4) ?? "N/A"}</div>
                                <div>最大: {item.earthquake.maxDuring?.toFixed(4) ?? "N/A"}</div>
                                </td>

                                {/* 颱風影響單元格 */}
                                <td 
                                className="p-2 text-[10px] border-l border-white/5"
                                style={{ backgroundColor: tyStyle.bg, color: tyStyle.font }}
                                >
                                <div className="font-bold">前後: {item.typhoon.beforeAfter?.toFixed(4) ?? "N/A"}</div>
                                <div>最大: {item.typhoon.maxDuring?.toFixed(4) ?? "N/A"}</div>
                                </td>
                            </tr>
                            );
                        })
                        ) : (
                        <tr>
                            <td colSpan="9" className="py-20 text-slate-500">
                            <AiFillFileUnknown className="mx-auto text-6xl mb-4 opacity-20" />
                            <p className="text-xl font-bold">未發現任何資料</p>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BridgeList;