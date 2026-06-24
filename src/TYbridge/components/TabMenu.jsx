function TabMenu ({ tabs, activeTab, onChange }){
  return (
    <div className="flex h-full p-1 bg-[#2d3748] rounded-xl w-fit gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              flex px-[20px] text-sm font-medium transition-all duration-200 rounded-lg justify-center
              ${isActive 
                ? 'bg-[#e95097] shadow-sm text-white font-bold' 
                : 'text-slate-300 hover:text-slate-700 hover:bg-white/50 cursor-pointer'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;