import { useState } from "react";
import { motion } from "framer-motion";

function ColorPicker({ value, onChange, name, clickChange, type }) {
  const [state, setState] = useState('custom');

  const changeColor = (color) => {
    setState('no');
    clickChange({ name: name, value: color });
  };

  const resetColor = () => {
    setState('custom');
    clickChange({ name: name, value: '#ffffff' });
  };

  return (
    <div className="flex flex-col gap-3 p-3 bg-slate-900/40 border border-emerald-900/30">
      {/* 1. 特殊紋理/模式切換區 */}
      {type && (
        <div className="flex items-center gap-3 border-b border-emerald-900/20 pb-3">
          <div 
            onClick={resetColor}
            className={`cursor-pointer px-3 py-1 text-[9px] font-black tracking-widest border transition-all ${
              state === 'custom' 
              ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
              : 'text-emerald-800 border-emerald-900/50 hover:border-emerald-500'
            }`}
          >
            CUSTOM_HEX
          </div>

          <div className="h-4 w-[1px] bg-emerald-900/30 mx-1" />

          <span className="text-[8px] text-emerald-900 uppercase font-bold mr-1">Textures:</span>
          
          <div className="flex gap-2">
            {[
              { id: 'url(#grey_army)', src: '/army-grey.png', label: 'GREY_CAMO' },
              { id: 'url(#pattern0_344_267)', src: '/army-green.png', label: 'GREEN_CAMO' }
            ].map((pattern) => (
              <div 
                key={pattern.id}
                onClick={() => changeColor(pattern.id)}
                className={`relative w-8 h-8 cursor-pointer border-2 transition-all overflow-hidden ${
                  (state !== 'custom' && value === pattern.id) 
                  ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] scale-110' 
                  : 'border-slate-800 grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
                }`}
              >
                <img src={pattern.src} alt={pattern.label} className="w-full h-full object-cover" />
                {state !== 'custom' && value === pattern.id && (
                  <motion.div layoutId="pattern-active" className="absolute inset-0 border border-emerald-400 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. 自主設定區 (Color Picker & Input) */}
      {state === 'custom' && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          {/* 偽裝的選色器 */}
          <label className="relative group cursor-pointer">
            <div 
              className="w-10 h-10 border border-emerald-500/50 group-hover:border-emerald-500 transition-all shadow-inner"
              style={{ backgroundColor: value }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_25%,transparent_25%,transparent_50%,rgba(16,185,129,0.1)_50%,rgba(16,185,129,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]" />
            </div>
            <input
              type="color"
              name={name}
              value={value}
              onChange={onChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </label>

          {/* 文字代碼輸入 */}
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[8px] text-emerald-900 font-black uppercase tracking-widest">Hex_Signal_Code</span>
              <span className="text-[8px] text-emerald-500/50 font-mono italic">#{(value || "").replace('#', '').toUpperCase()}</span>
            </div>
            <input 
              type="text" 
              name={name} 
              value={value} 
              onChange={onChange}
              className="w-full bg-slate-950 border-b border-emerald-900/50 px-2 py-1 text-xs text-emerald-400 font-mono outline-none focus:border-emerald-500 transition-all"
              placeholder="#FFFFFF"
            />
          </div>
        </motion.div>
      )}

      {/* 非自主設定時的狀態顯示 */}
      {state !== 'custom' && (
        <div className="py-2 text-[10px] text-emerald-800 italic flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          ACTIVE_TEXTURE_PROTOCOL: {value.includes('grey') ? 'ARMY_GREY' : 'ARMY_GREEN'}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;