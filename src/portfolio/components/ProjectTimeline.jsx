import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

function ProjectTimeline({ projects }) {
  const chartData = useMemo(() => {
  const GLOBAL_START_YEAR = 2021; // X 軸的起點

  return projects
    .map(p => {
      const start = parseInt(p.開始);
      const end = parseInt(p.結束);
      return {
        name: p.名稱.length > 10 ? p.名稱.substring(0, 10) + '...' : p.名稱,
        fullName: p.名稱,
        // ❌ 原本: start (2021)
        // ✅ 修正: 計算相對於起點的偏移量
        offset: start - GLOBAL_START_YEAR, 
        duration: end - start || 0.5, 
        isFE: p.擔任職務.includes("前端工程師"),
        displayRange: `${p.開始} - ${p.結束}`
      };
    })
    .sort((a, b) => a.offset - b.offset);
}, [projects]);

  // 自定義 Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-[#747bff]/30 p-3 rounded-lg shadow-xl">
          <p className="text-white font-bold mb-1">{data.fullName}</p>
          <p className="text-[#747bff] text-xs font-mono">{data.displayRange}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-slate-800 text-xl font-black tracking-tight">專案經歷時序圖</h3>
          <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">Project Lifecycle & Overlap</p>
        </div>
        {/* 圖例 */}
        <div className="flex gap-4 text-[10px] font-bold">
          <div className="flex items-center gap-1.5 text-slate-500">
            <div className="w-3 h-3 bg-[#747bff] rounded-sm" /> 前端開發
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <div className="w-3 h-3 bg-slate-200 rounded-sm" /> 專案管理
          </div>
        </div>
      </div>

      <div className="h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ left: 20, right: 60, top: 0, bottom: 0 }}
          >
            <XAxis 
                type="number" 
                domain={[0, 4]} // 2026 - 2021 = 5 年的跨度
                ticks={[0, 1, 2, 3, 4, 5]}
                // ✅ 格式化標籤，讓 0 顯示為 2021，1 顯示為 2022
                tickFormatter={(value) => 2021 + value}
                stroke="#cbd5e1"
                fontSize={12}
                axisLine={false}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="#64748b"
              fontSize={12}
              width={120}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9' }} />
            
            {/* 這裡的 stackId 讓柱狀圖從 start 開始推算 */}
            <Bar dataKey="offset" stackId="a" fill="transparent" />
            <Bar dataKey="duration" stackId="a" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                    <Cell 
                    key={`cell-${index}`} 
                    fill={entry.isFE ? '#747bff' : '#e2e8f0'} 
                    />
                ))}
                <LabelList 
                    dataKey="displayRange" 
                    position="right" 
                    style={{ fill: '#94a3b8', fontSize: '10px', fontWeight: 'bold' }} 
                    offset={10}
                />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectTimeline;