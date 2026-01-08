import { useMemo } from 'react';
import { Trophy, Code, Briefcase, Calendar } from 'lucide-react';

function ProjectHighlight({ projects }) {
  const stats = useMemo(() => {
    // 1. 計算總專案數與工程師參與比例
    const total = projects.length;
    const feCount = projects.filter(p => p.擔任職務.includes("前端工程師")).length;
    
    // 2. 統計出現最多次的工具前三名
    const toolCounts = {};
    projects.forEach(p => p.工具?.forEach(t => toolCounts[t] = (toolCounts[t] || 0) + 1));
    const topTools = Object.entries(toolCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(t => t[0]);

    // 3. 計算橫跨年份
    const years = projects.map(p => p.開始);
    const span = Math.max(...years) - Math.min(...years);

    return [
      { label: '累積專案', value: total, icon: Briefcase, color: 'text-blue-500' },
      { label: '技術開發', value: feCount, icon: Code, color: 'text-[#747bff]' },
      { label: '實戰年資', value: `${span > 0 ? span : 0}+`, icon: Calendar, color: 'text-amber-500' },
      { label: '核心工具', value: `${topTools.length > 0 ? topTools[0] : 'unknown'}`, icon: Trophy, color: 'text-emerald-500' },
    ];
  }, [projects]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-6">
      {stats.map((item, i) => (
        <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center text-center">
          <item.icon className={`${item.color} mb-2`} size={24} />
          <span className="text-2xl font-black text-slate-800 tracking-tighter">{item.value}</span>
          <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectHighlight