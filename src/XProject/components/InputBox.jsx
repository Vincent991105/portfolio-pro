import React from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "./ColorPicker";

function InputBox({ type, title, field, data, setData, clickData, required, placeHolder }) {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col gap-2 font-mono group">
      {/* 標題區 */}
      <div className="flex items-center gap-2">
        <div className="w-1 h-3 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
          {required && <span className="text-red-500 mr-1">*</span>}
          {title}
        </h4>
        <div className="flex-1 h-[1px] bg-emerald-900/30 group-hover:bg-emerald-500/20 transition-colors" />
      </div>

      {/* 輸入控制區 */}
      <div className="pl-3">
        {/* 文字輸入 */}
        {type === 'text' && (
          <input 
            type="text" 
            name={field}
            placeholder={placeHolder || "AWAITING_INPUT..."}
            value={data || ""} 
            onChange={setData}
            className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-xs text-emerald-400 outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-all placeholder:text-emerald-900"
          />
        )}

        {/* 顏色選擇 (核心) */}
        {type === 'color' && (
          <ColorPicker 
            name={field} 
            value={data} 
            onChange={setData} 
            clickChange={clickData} 
            type={true}
          />
        )}

        {/* 下拉選擇 */}
        {type === 'selection' && (
          <div className="relative">
            <select 
              name={field}
              value={data}
              onChange={setData}
              className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-xs text-emerald-400 outline-none appearance-none focus:border-emerald-500"
            >
              {/* 這裡可以根據傳入的 option 渲染 */}
              <option value="0">TYPE_NULL</option>
              <option value="1">TYPE_ALPHA</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-900 text-[8px]">▼</div>
          </div>
        )}

        {/* 頭像建立連結 (用於其他入口) */}
        {type === 'cerateIcon' && (
          <div 
            onClick={() => navigate('/XProject/admin/generator')}
            className="w-full aspect-square border-2 border-dashed border-emerald-900/50 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group"
          >
            {data ? (
              <img src={data} alt="preview" className="w-full h-full object-contain p-2" />
            ) : (
              <div className="text-center">
                <div className="text-emerald-500 mb-2">+</div>
                <div className="text-[8px] text-emerald-900 uppercase font-black">Generate_Visual</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputBox;