import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Settings, Check, X } from 'lucide-react';

const ProjectStats = ({ projects = [], tablename }) => {
  // 取得資料中所有可能的欄位 (用於設定面板)
  const allPossibleFields = useMemo(() => {
    if (projects.length === 0) return [];
    // 排除掉明顯不適合統計的欄位
    const exclude = ['id', 'image', 'description', 'title', 'link'];
    return Object.keys(projects[0]).filter(key => !exclude.includes(key));
  }, [projects]);

  // 2. 狀態管理
  // 預設顯示你指定的四個選項
  const [visibleFilters, setVisibleFilters] = useState(['類型', '年份', '工具', '擔任職務']);
  const [filterType, setFilterType] = useState('類型');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // 3. 處理統計資料
  const chartData = useMemo(() => {
    if (!filterType) return [];
    const stats = {};
    
    projects.forEach(project => {
      // 特殊處理：當使用者選中「年份」時
      if (filterType === '年份') {
        const start = parseInt(project.開始);
        const end = parseInt(project.結束);
        if (start && end) {
          // 將區間內的每一年都計入統計
          for (let year = start; year <= end; year++) {
            stats[year] = (stats[year] || 0) + 1;
          }
        }
      } 
      // 一般處理：處理陣列 (職務、工具)
      else {
        let value = project[filterType];
        if (Array.isArray(value)) {
          value.forEach(item => {
            if (item) stats[item] = (stats[item] || 0) + 1;
          });
        } else if (value) {
          stats[value] = (stats[value] || 0) + 1;
        }
      }
    });

    return Object.keys(stats)
      .map(name => ({ name, count: stats[name] }))
      // 年份按數字排，其他按數量排
      .sort((a, b) => filterType === '年份' ? a.name - b.name : b.count - a.count);
  }, [projects, filterType]);

  const toggleFilterVisibility = (field) => {
    setVisibleFilters(prev => 
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full h-[450px] bg-slate-900 p-8 rounded-2xl gap-8 border border-slate-800 shadow-2xl">
      
      {/* 左側：圖表區 */}
      <div className="flex-1 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
                cursor={{ fill: '#334155', opacity: 0.4 }} // 懸浮在柱狀圖上的背景色
                contentStyle={{ 
                    backgroundColor: '#1e293b', // Tooltip 框背景
                    border: 'none', 
                    borderRadius: '12px', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)' 
                }}
                // 1. 修改標題（例如：React）的顏色
                labelStyle={{ 
                    color: '#94a3b8', 
                    marginBottom: '4px',
                    fontWeight: 'bold' 
                }}
                // 2. 強制修改數值（例如：count: 5）的顏色為白色或品牌紫
                itemStyle={{ 
                    color: '#747bff', // 這裡設定你想要的顏色，#fff 或 #747bff
                    fontSize: '14px',
                    fontWeight: '600'
                }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#22d3ee' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 右側：控制區 */}
      <div className="w-full md:w-56 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-slate-400 text-xs font-bold text-[20px] tracking-[0.2em] uppercase">
            {isSettingsOpen ? "篩選設定" : tablename}
          </h3>
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={`p-2 rounded-lg transition-all ${isSettingsOpen ? 'bg-[#747bff] text-black shadow-[0_0_10px_rgba(116,123,255,0.5)]' : 'text-slate-500 hover:bg-slate-800'}`}
          >
            {isSettingsOpen ? <X size={18} /> : <Settings size={18} />}
          </button>
        </div>

        <div className="flex flex-col gap-2.5 overflow-y-auto pr-1 custom-scrollbar">
          {isSettingsOpen ? (
            /* 設定模式：從資料中抓取的所有欄位 */
            allPossibleFields.map(field => (
              <button 
                key={field}
                onClick={() => toggleFilterVisibility(field)}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-800 bg-slate-800/30 hover:bg-slate-800 transition-all text-left"
              >
                <span className="text-sm text-slate-600">{field}</span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                  visibleFilters.includes(field) ? 'bg-[#747bff] border-[#747bff]' : 'border-slate-600'
                }`}>
                  {visibleFilters.includes(field) && <Check size={12} className="text-white" />}
                </div>
              </button>
            ))
          ) : (
            /* 一般模式：僅顯示已選中的四個（或更多）篩選器 */
            visibleFilters.map((type) => {
              const isActive = filterType === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left border ${
                    isActive 
                    ? 'bg-[#747bff]/20 border-[#747bff] text-[#747bff] shadow-[0_0_15px_rgba(116,123,255,0.1)]' 
                    : 'bg-transparent border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{type}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#747bff] animate-pulse" />}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;