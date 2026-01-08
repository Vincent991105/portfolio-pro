import { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function SkillRadar({ projects }) {
  const radarData = useMemo(() => {
    // 1. 安全檢查：如果沒有專案，直接回傳全 0 的數據
    if (!projects || projects.length === 0) {
      return [
        { subject: '前端開發', A: 0, fullMark: 100 },
        { subject: '專案管理', A: 0, fullMark: 100 },
        { subject: '政府/標案', A: 0, fullMark: 100 },
        { subject: '系統架構', A: 0, fullMark: 100 },
        { subject: 'UI/UX 設計', A: 0, fullMark: 100 },
      ];
    }

    // 2. 只有在有資料時才進行除法計算
    const total = projects.length;
    const feProjects = projects.filter(p => p.擔任職務?.includes("前端工程師")).length;
    const pmProjects = projects.filter(p => p.擔任職務?.includes("專案管理")).length;
    const govProjects = projects.filter(p => p.類型 === "政府案").length;

    return [
      { subject: '前端開發', A: (feProjects / total) * 100, fullMark: 100 },
      { subject: '專案管理', A: (pmProjects / total) * 100, fullMark: 100 },
      { subject: '政府/標案', A: (govProjects / total) * 100, fullMark: 100 },
      // 這裡也要確保沒有專案時不給 40 或 60
      { subject: '系統架構', A: projects.some(p => p.工具?.includes("Nginx")) ? 90 : 20, fullMark: 100 },
      { subject: 'UI/UX 設計', A: projects.filter(p => p.工具?.includes("Figma")).length > 5 ? 95 : 30, fullMark: 100 },
    ];
  }, [projects]);

  return (
    <div className="w-full h-64 bg-slate-900 rounded-3xl p-4 border border-slate-800 shadow-2xl">
      <h4 className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase text-center mb-2">Capability Radar</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <Radar
            name="Vincent"
            dataKey="A"
            stroke="#747bff"
            fill="#747bff"
            fillOpacity={0.5}
            isAnimationActive={true}
            animationBegin={200}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadar