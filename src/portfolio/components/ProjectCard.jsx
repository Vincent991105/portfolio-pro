import { ExternalLink, Users, Calendar, Braces, Wrench, Lock } from 'lucide-react';

function ProjectCard({ project }) {
  // 解構賦值增加「狀態」
  const { 名稱, 圖片, 擔任職務, 開始, 結束, 工具, 描述, 連結, 狀態 } = project;

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 hover:shadow-xl hover:border-[#747bff]/50 transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden">
      
      {/* 專案圖片區域 */}
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 transition-transform duration-300">
        <img 
          src={圖片 || '/images/default-project.jpg'} 
          alt={名稱} 
          className={`w-full h-full object-cover ${!狀態 ? 'grayscale blur-[2px]' : ''}`} // 未開啟時加上灰階與模糊
        />

        {/* 邏輯判斷：如果狀態為 true 且有連結，才顯示 ExternalLink */}
        {狀態 && 連結 ? (
          <a 
            href={連結} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={`前往 ${名稱} 連結`}
          >
            <ExternalLink size={36} className="text-white hover:text-[#747bff]" />
          </a>
        ) : !狀態 && (
          /* 邏輯判斷：如果狀態為 false，顯示 Coming Soon 遮罩 */
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center backdrop-blur-[1px]">
             <div className="bg-[#747bff] text-white px-4 py-1 rounded-full text-sm font-black tracking-widest uppercase shadow-lg flex items-center gap-2">
               <Lock size={14} />
               Coming Soon
             </div>
          </div>
        )}
      </div>

      {/* 專案名稱 */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#747bff] transition-colors duration-300">
        {名稱}
      </h3>
      
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
            {工具.map((toolName, index) => ( // 這裡原本變數命名與圖示衝突，已修正為 toolName
              <span key={index} className="bg-slate-700 text-slate-200 px-2 py-0.5 rounded-md text-xs">
                {toolName}
              </span>
            ))}
          </div>
        )}
        {project.程式 && (
            <div className="flex items-center gap-2">
                <Braces size={16} className="text-slate-500" />
                <span>程式: {project.程式.join(', ')}</span>
            </div>
        )}
      </div>

      {/* 專案描述 */}
      <p className="text-slate-300 text-base leading-relaxed mb-4 line-clamp-3">
        {描述}
      </p>
    </div>
  );
};

export default ProjectCard;