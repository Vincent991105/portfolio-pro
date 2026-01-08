import { ExternalLink, Users, Calendar, Braces, Wrench } from 'lucide-react'; // 引入更多 Lucide 圖示

const ProjectCard = ({ project }) => {
  const { 名稱, 圖片, 擔任職務, 開始, 結束, 工具, 描述, 連結 } = project;

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:shadow-xl hover:border-[#747bff]/50 transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden">
      {/* 專案圖片 */}
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-300">
        <img 
          src={圖片 || '/images/default-project.jpg'} // 提供一個預設圖片路徑
          alt={名稱} 
          className="w-full h-full object-cover" 
        />
        {連結 && (
          <a 
            href={連結} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={`前往 ${名稱} 連結`}
          >
            <ExternalLink size={36} className="text-white hover:text-[#747bff]" />
          </a>
        )}
      </div>

      {/* 專案名稱 */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#747bff] transition-colors duration-300">{名稱}</h3>
      
      {/* 專案詳細資訊 */}
      <div className="space-y-2 text-slate-400 text-sm mb-4">
        {擔任職務 && 擔任職務.length > 0 && (
          <div className="flex items-center gap-2">
            <Users size={16} className="text-slate-500" />
            <span>職務: {擔任職務.join(' / ')}</span>
          </div>
        )}
        {(開始 || 結束) && (
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-slate-500" />
            <span>年份: {開始}{結束 && ` ~ ${結束}`}</span>
          </div>
        )}
        {工具 && 工具.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Wrench size={16} className="text-slate-500 min-w-[16px]" />
            <span>工具:</span>
            {工具.map((Wrench, index) => (
              <span key={index} className="bg-slate-700 text-slate-200 px-2 py-0.5 rounded-md text-xs">
                {Wrench}
              </span>
            ))}
          </div>
        )}
        {project.程式 && ( // 假設 '程式' 欄位代表主要程式語言/框架
            <div className="flex items-center gap-2">
                <Braces size={16} className="text-slate-500" />
                {console.log(project.程式)}
                <span>程式: {project.程式.join(', ')}</span>
            </div>
        )}
      </div>

      {/* 專案描述 */}
      <p className="text-slate-300 text-base leading-relaxed mb-4 line-clamp-3">
        {描述}
      </p>

      {/* 連結按鈕 (如果沒有圖片上的 hover 連結，可以把這段打開) */}
      {/* {連結 && (
        <a 
          href={連結} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-[#747bff] hover:text-white hover:bg-[#747bff] px-4 py-2 rounded-lg transition-all border border-[#747bff] group-hover:shadow-[0_4px_15px_rgba(116,123,255,0.4)]"
        >
          查看專案
          <ExternalLink size={16} />
        </a>
      )} */}
    </div>
  );
};

export default ProjectCard;