import { IoClose, IoDownloadOutline } from 'react-icons/io5';

const ExportPreviewModal = ({ title='橋梁檢測分析報表', isOpen, onClose, data, onConfirm }) => {
  if (!isOpen) return null;

  // 模擬資料 (若外部沒傳則使用)
  const area1 = data?.area1 || { A: "TY-Bridge-01", B: "Normal", C: "Maintenance Required", time: "2026-01-09 14:30" };
  const area2 = data?.area2 || [true, false, true, true];
  const area3 = data?.area3 || [{x:32,y:68},{x:12,y:48},{x:42,y:50},{x:50,y:50}];
  const area4 = data?.area4 || [{AData:'Temp',BData:320},{AData:'Press',BData:220},{AData:'Vib',BData:180},{AData:'Hum',BData:200}];

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-100 px-6 py-3 flex justify-between items-center border-b">
          <h2 className="text-slate-800 font-bold flex items-center gap-2">
            <IoDownloadOutline size={20} /> PDF 匯出預覽 (橫向 A4)
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-red-500 transition-colors">
            <IoClose size={24} />
          </button>
        </div>

        {/* PDF Content Area - 這裡刻劃 A4 橫向比例 */}
        <div className="flex-1 overflow-auto p-8 bg-slate-200 flex">
          <div id="pdf-content" className="bg-white w-[1120px] min-w-[1120px] h-[792px] min-w-[792px] aspect-[1.414/1] shadow-lg px-20 py-10 text-slate-800 flex flex-col gap-6 border border-slate-300">
            
            {/* Area 1: Header Info */}
            <div className="border-b-1 border-slate-800 pb-4 flex justify-between items-end">
              <div className='flex flex-col w-full gap-5'>
                <h1 className="w-full text-3xl font-black mb-2 text-center">{title}</h1>
                <div className="grid grid-cols-3 gap-x-8 gap-y-1 text-sm px-20">
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>日</span><span>期</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.date}</span>
                    </p>
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>任</span><span>務</span><span>編</span><span>號</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.quest}</span>
                    </p>
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>機</span><span>尾</span><span>編</span><span>號</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.plane_no}</span>
                    </p>
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>時</span><span>間</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.time}</span>
                    </p>
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>飛</span><span>行</span><span>員</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.pilot}</span>
                    </p>
                    <p className="flex items-center leading-none">
                        <span className="flex w-[4.5em] font-bold justify-between shrink-0">
                            <span>靶</span><span>場</span>
                        </span>
                        <span className='font-bold tracking-widest'>：{area1.place}</span>
                    </p>
                </div>
              </div>
            </div>

            {/* 下方三欄佈局 */}
            <div className="flex-1 flex flex-row gap-6">
              
              {/* Area 2: Status Indicators */}
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-sm font-bold">1 . 小角度射擊</h3>
                <table className="w-full text-xs border-collapse border-2 border-slate-300">
                    <thead>
                        <tr className="bg-slate-100 border-b border-slate-300">
                        <th className="p-2 text-center tracking-widest">航線</th>
                        <th className="w-60 p-2 text-center tracking-widest">命中</th>
                        </tr>
                    </thead>
                    <tbody>
                        {area2.map((status, i) => (
                        <tr key={i} className="border-b border-slate-100">
                            <td className="p-2 text-center tracking-widest">{i}</td>
                            <td className={`p-2 text-center font-mono tracking-widest ${status ? 'text-green-600' : 'text-red-600'}`}>{status ? '命中' : '未中'}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </div>

              {/* Area 3: Coordinate Analysis (簡化圖表預覽) */}
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-sm font-bold">2 . 三環靶標記</h3>
                <div className="h-[299px] relative overflow-hidden border-2 border-slate-300">
                    <div className="absolute top-0 right-0 text-[10px] text-slate-400"><img src="/三環靶.png" alt="靶紙" /></div>
                    {area3.map((pt, i) => (
                     <div key={i} className="absolute w-3 h-3 bg-blue-500 rounded-full border border-white shadow-sm" 
                          style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: 'translate(-50%, -50%)' }} />
                   ))}
                </div>
              </div>

              {/* Area 4: Data Table */}
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-sm font-bold">3 . 火箭射擊及投彈紀錄</h3>
                <table className="w-full text-xs border-collapse border-2 border-slate-300">
                    <thead>
                        <tr className="bg-slate-100 border-b border-slate-300">
                            <th className="w-20 p-2 text-center tracking-widest">航線</th>
                            <th className="w-40 p-2 text-center tracking-widest">方向偏差</th>
                            <th className="w-40 p-2 text-center tracking-widest">偏差(呎)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {area4.map((row, i) => (
                        <tr key={i} className="border-b border-slate-100">
                            <td className="p-2 text-center">{i}</td>
                            <td className="p-2 text-center font-mono">{row.AData}</td>
                            <td className="p-2 text-center font-mono">{row.BData}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </div>
            </div>

            {/* Footer Line */}
            <div className="text-center border-t pt-4 text-[10px] text-slate-400">
              © 2026 水溪靶場靶報靶系統 - Confidential Document
            </div>
            <div className="text-right text-xs text-slate-400">系統自動生成單據</div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="bg-white p-4 border-t flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 transition-colors">
            取消返回
          </button>
          <button onClick={onConfirm} style={{ backgroundColor: '#1e293b', color: '#ffffff' }} className="px-8 py-2 rounded-md font-bold hover:bg-blue-700 shadow-lg transition-colors flex items-center gap-2">
            <IoDownloadOutline size={18} /> 確認下載 PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPreviewModal;