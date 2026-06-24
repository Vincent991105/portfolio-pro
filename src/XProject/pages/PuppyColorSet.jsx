import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Save, ArrowLeft, Activity, Fingerprint, 
  Settings, Target, Zap, Shield ,Box
} from 'lucide-react';

// 引入組件
import PreviewIcon from "../components/PreviewIcon";
import InputBox from "../components/InputBox";
import ThirdEyebrow from "../components/iconCreate/ThirdEyebrow";
import ThirdEyebrow02 from "../components/iconCreate/ThirdEyebrow02";
import ThirdEyebrow03 from "../components/iconCreate/ThirdEyebrow03";
import ThirdEyebrow04 from "../components/iconCreate/ThirdEyebrow04";
import ThirdEyebrow05 from "../components/iconCreate/ThirdEyebrow05";
import SixMuse from "../components/iconCreate/SixMuse";
import SixMuse02 from "../components/iconCreate/SixMuse02";
import SixMuse03 from "../components/iconCreate/SixMuse03";
import SixMuse04 from "../components/iconCreate/SixMuse04";
import SevenSide from "../components/iconCreate/SevenSide";
import SevenSide02 from "../components/iconCreate/SevenSide02";
import TenHair from "../components/iconCreate/TenHair";

const PuppyColorSet = () => {
    const navigate = useNavigate();
    const previewRef = useRef();
    
    // 1. 核心本地狀態 (完全獨立於 Redux)
    const [localData, setLocalData] = useState({
        earOutside: '#10b981',
        earHalf: '#064e3b',
        earInside: '#022c22',
        headTop: '#10b981',
        face: '#064e3b',
        faceDown: '#022c22',
        eyeBrowType: '1',
        eyeBrow: '#ffffff',
        mouth: '#064e3b',
        museType: '1',
        muse: '#ffffff',
        sideType: '0',
        side: '#ffffff',
        button: '#ffffff',
        hairType: '0',
        hairSide: '',
        hairMain: '',
        noiseUp: '#10b981',
        noiseHalf: '#064e3b',
        noiseDown: '#022c22',
        noiseButton: '#ffffff',
    });

    const [activeModule, setActiveModule] = useState('ear');

    // 2. 數據處理函式
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalData(prev => ({ ...prev, [name]: value }));
    };

    const clickChange = (update) => {
        setLocalData(prev => ({ ...prev, [update.name]: update.value }));
    };

    const modules = [
        { id: 'ear', label: 'EARS', icon: <Settings size={12}/> },
        { id: 'head', label: 'HAIR/HEAD', icon: <Target size={12}/> },
        { id: 'eyebrow', label: 'BROW', icon: <Zap size={12}/> },
        { id: 'mouth', label: 'MUSE', icon: <Activity size={12}/> },
        { id: 'side', label: 'LATERAL', icon: <Box size={12}/> },
        { id: 'noise', label: 'SENSORY', icon: <Shield size={12}/> },
    ];

    return (
        <div className="h-[100dvh] bg-slate-950 text-emerald-500 font-mono flex flex-col overflow-hidden">
            {/* 背景裝飾 */}
            <div className="fixed inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:100%_3px]" />

            {/* --- A. 頂部視覺觀測窗 (固定) --- */}
            <header className="flex-none bg-slate-900/40 border-b border-emerald-900/50 z-30">
                <div className="px-4 py-2 flex justify-between items-center border-b border-emerald-900/10">
                    <div className="flex items-center gap-2">
                        <Cpu size={14} className="animate-pulse" />
                        <span className="text-[10px] font-black tracking-widest uppercase">Visual_Sync_Active</span>
                    </div>
                    <div onClick={() => navigate(-1)} className="text-emerald-900 hover:text-emerald-500 transition-colors">
                        <ArrowLeft size={18} />
                    </div>
                </div>

                <div className="h-[180px] relative flex items-center justify-center overflow-hidden bg-white/10">
                  <div className="absolute inset-0 opacity-10 bg-[grid:16px_16px] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]" />
                  
                  {/* 預覽 Icon 容器：縮小倍率並固定位置 */}
                  <div className="relative z-10 scale-[0.65] sm:scale-[0.85] origin-center">
                      
                      {/* 掃描裝飾外框 (新增角飾與光暈) */}
                      <div className="absolute -inset-6 border border-emerald-500/20 pointer-events-none">
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500 shadow-[0_0_8px_#10b981]" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500 shadow-[0_0_8px_#10b981]" />
                      </div>

                      {/* --- 1. 核心預覽組件 --- */}
                      <PreviewIcon ref={previewRef} data={localData} type="standalone" />

                      {/* --- 2. 新增：動態掃描層 (Animate Scanning Layer) --- */}
                      <motion.div
                          className="absolute inset-0 pointer-events-none overflow-hidden z-[60]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }} // 模擬掃描光束閃爍
                          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
                      >
                          {/* 螢光綠掃描線 */}
                          <motion.div 
                              className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10b981] z-20"
                              animate={{ 
                                  top: ['0%', '100%', '0%'] // 從上到下再回來
                              }} 
                              transition={{ 
                                  duration: 3, 
                                  repeat: Infinity, 
                                  ease: "linear" 
                              }} 
                          />
                          
                          {/* 掃描遮罩 (模擬光束掃過的區域) */}
                          <motion.div 
                              className="absolute left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent z-10"
                              animate={{ 
                                  top: ['-30%', '100%', '-30%'] // 遮罩跟隨掃描線
                              }} 
                              transition={{ 
                                  duration: 3, 
                                  repeat: Infinity, 
                                  ease: "linear" 
                              }} 
                          />
                      </motion.div>
                  </div>
                </div>
            </header>

            {/* --- B. 模組導航列 (橫向捲動) --- */}
            <nav className="flex-none bg-slate-950 border-b border-emerald-900/30 overflow-x-auto scrollbar-hide flex gap-1 p-2">
                {modules.map((m) => (
                    <div
                        key={m.id}
                        onClick={() => setActiveModule(m.id)}
                        className={`flex-none px-4 py-2 border text-[9px] font-black transition-all flex items-center gap-2 ${
                            activeModule === m.id 
                            ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_0_10px_#10b981]' 
                            : 'border-emerald-900 text-emerald-900'
                        }`}
                    >
                        {m.label}
                    </div>
                ))}
            </nav>

            {/* --- C. 中間：獨立捲動編輯區 --- */}
            <main className="flex-1 overflow-y-auto p-4 scrollbar-hide pb-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeModule}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        {/* 耳朵 */}
                        {activeModule === 'ear' && (
                            <div className="grid grid-cols-1 gap-6">
                                <InputBox type='color' title='外部飾板' field='earOutside' data={localData.earOutside} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='耳殼主體' field='earHalf' data={localData.earHalf} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='內部核心' field='earInside' data={localData.earInside} setData={handleChange} clickData={clickChange}/>
                            </div>
                        )}

                        {/* 頭部與髮型 (完整保留邏輯) */}
                        {activeModule === 'head' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div 
                                        onClick={() => {
                                            clickChange({ name: 'hairType', value: '0' });
                                            clickChange({ name: 'hairSide', value: '' });
                                            clickChange({ name: 'hairMain', value: '' });
                                        }}
                                        className={`p-4 border text-[10px] font-black text-center uppercase cursor-pointer ${localData.hairType === '0' ? 'bg-emerald-500 text-slate-950' : 'border-emerald-900 text-emerald-900'}`}
                                    >
                                        NONE
                                    </div>
                                    <div 
                                        onClick={() => {
                                            clickChange({ name: 'hairType', value: '1' });
                                            clickChange({ name: 'hairSide', value: '#6b4040' });
                                            clickChange({ name: 'hairMain', value: '#9b3636' });
                                        }}
                                        className={`p-4 border text-[10px] font-black text-center uppercase cursor-pointer ${localData.hairType === '1' ? 'bg-emerald-500 text-slate-950' : 'border-emerald-900 text-emerald-900'}`}
                                    >
                                        有頭髮
                                    </div>
                                </div>
                                {localData.hairType === '1' && (
                                    <div className="space-y-4 pt-4 border-t border-emerald-900/30">
                                        <InputBox type='color' title='髮線顏色' field='hairSide' data={localData.hairSide} setData={handleChange} clickData={clickChange}/>
                                        <InputBox type='color' title='頭髮主色' field='hairMain' data={localData.hairMain} setData={handleChange} clickData={clickChange}/>
                                    </div>
                                )}
                                <div className="space-y-4 pt-4 border-t border-emerald-900/30">
                                    <InputBox type='color' title='頭頂裝甲' field='headTop' data={localData.headTop} setData={handleChange} clickData={clickChange}/>
                                    <InputBox type='color' title='面部皮膚' field='face' data={localData.face} setData={handleChange} clickData={clickChange}/>
                                    <InputBox type='color' title='下巴組件' field='faceDown' data={localData.faceDown} setData={handleChange} clickData={clickChange}/>
                                </div>
                            </div>
                        )}

                        {/* 眉毛 (保留 5 種選擇) */}
                        {activeModule === 'eyebrow' && (
                            <div className="space-y-6">
                                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                                    {[1,2,3,4,5].map(num => (
                                        <div 
                                            key={num}
                                            onClick={() => clickChange({ name: 'eyeBrowType', value: num.toString() })}
                                            // 加入 flex items-center justify-center
                                            className={`flex-none h-16 border p-1 cursor-pointer transition-all flex items-center justify-center ${
                                                localData.eyeBrowType === num.toString() 
                                                ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_10px_#10b981]' 
                                                : 'border-emerald-900 opacity-40 hover:opacity-100'
                                            }`}
                                        >
                                            {/* 縮放組件讓它在小方框內更清楚 */}
                                            <div className="scale-80">
                                                {num === 1 && <ThirdEyebrow data={localData} />}
                                                {num === 2 && <ThirdEyebrow02 data={localData} />}
                                                {num === 3 && <ThirdEyebrow03 data={localData} />}
                                                {num === 4 && <ThirdEyebrow04 data={localData} />}
                                                {num === 5 && <ThirdEyebrow05 data={localData} />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <InputBox type='color' title='眉毛主色' field='eyeBrow' data={localData.eyeBrow} setData={handleChange} clickData={clickChange}/>
                            </div>
                        )}

                        {/* 臉頰與鬍子 (保留 4 種選擇) */}
                        {activeModule === 'mouth' && (
                            <div className="space-y-6">
                                <InputBox type='color' title='臉頰底色' field='mouth' data={localData.mouth} setData={handleChange} clickData={clickChange}/>
                                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                                    {[1,2,3,4].map(num => (
                                        <div 
                                            key={num}
                                            onClick={() => clickChange({ name: 'museType', value: num.toString() })}
                                            className={`flex-none h-16 border p-1 cursor-pointer transition-all flex items-center justify-center ${
                                                localData.museType === num.toString() 
                                                ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_10px_#10b981]' 
                                                : 'border-emerald-900 opacity-40 hover:opacity-100'
                                            }`}
                                        >
                                          <div className="scale-80">
                                            {num === 1 && <SixMuse data={localData} />}
                                            {num === 2 && <SixMuse02 data={localData} />}
                                            {num === 3 && <SixMuse03 data={localData} />}
                                            {num === 4 && <SixMuse04 data={localData} />}
                                          </div>
                                        </div>
                                    ))}
                                </div>
                                <InputBox type='color' title='鬍子色彩' field='muse' data={localData.muse} setData={handleChange} clickData={clickChange}/>
                            </div>
                        )}

                        {/* 鬢角 (保留 3 種選擇) */}
                        {activeModule === 'side' && (
                            <div className="space-y-6">
                                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                                    {[0,1,2].map(num => (
                                        <div 
                                            key={num}
                                            onClick={() => clickChange({ name: 'sideType', value: num.toString() })}
                                            className={`flex-none h-16 border p-1 cursor-pointer transition-all flex items-center justify-center ${
                                                localData.sideType === num.toString() 
                                                ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_10px_#10b981]' 
                                                : 'border-emerald-900 opacity-40 hover:opacity-100'
                                            }`}
                                        >
                                          {num === 0 && <p className={`text-[10px] font-black text-center uppercase ${localData.sideType === '0' ? 'bg-emerald-500 text-slate-950' : 'border-emerald-900 text-emerald-900'}`}>NO_SIDE</p>}
                                          {num === 1 && <div className="scale-60"><SevenSide data={localData} style={{width:'100%'}}/></div>}
                                          {num === 2 && <div className="scale-60"><SevenSide02 data={localData} style={{width:'100%'}}/></div>}
                                        </div>
                                    ))}
                                </div>
                                <InputBox type='color' title='鬢角色彩' field='side' data={localData.side} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='裝飾鈕扣' field='button' data={localData.button} setData={handleChange} clickData={clickChange}/>
                            </div>
                        )}

                        {/* 鼻子 */}
                        {activeModule === 'noise' && (
                            <div className="space-y-6">
                                <InputBox type='color' title='鼻樑塗裝' field='noiseUp' data={localData.noiseUp} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='鼻子主體' field='noiseHalf' data={localData.noiseHalf} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='嘴唇線條' field='noiseDown' data={localData.noiseDown} setData={handleChange} clickData={clickChange}/>
                                <InputBox type='color' title='鼻尖鈕扣' field='noiseButton' data={localData.noiseButton} setData={handleChange} clickData={clickChange}/>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* --- D. 底部：固定提交按鈕 --- */}
            <footer className="flex-none p-4 bg-slate-950/90 backdrop-blur-md border-t border-emerald-900/50 z-30 flex gap-4">
              <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                      <Fingerprint size={12} className="text-emerald-800" />
                      <span className="text-[9px] text-emerald-700 font-black tracking-widest">
                          STRAY_BUFFER_#{localData.hairType}
                      </span>
                  </div>
              </div>
              <div 
                  onClick={() => previewRef.current?.download()}
                  className="bg-emerald-500 text-slate-950 px-10 py-4 font-black uppercase text-xs tracking-[0.3em] shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
              >
                  COMMIT <Save size={16} />
              </div>
            </footer>
        </div>
    );
};

export default PuppyColorSet;