import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoTrashSharp, IoReorderThreeOutline } from "react-icons/io5";

function PlaneTask({ id, data, onDelete, onChange, index }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    // 拖曳樣式處理
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        // 拖曳時提升層級並增加透明度
        zIndex: isDragging ? 50 : 'auto',
        opacity: isDragging ? 0.4 : 1,
    };

    return (
        <div 
            ref={setNodeRef} 
            style={style}
            className={`flex items-center gap-[15px] text-[#00FFFF] bg-[#FFFFFF]/10 rounded-2xl p-4 border border-white/5 shadow-[inset_0_0_15px_rgba(0,0,0,0.2)] w-full transition-colors
                ${isDragging ? 'border-[#00FFFF]/50 bg-[#FFFFFF]/20 shadow-[0_0_20px_rgba(0,255,255,0.2)]' : 'hover:border-white/20'}`}
        >
            {/* 1. 手把：加上 attributes 和 listeners，只有點這裡才能拖曳 */}
            <div 
                {...attributes} 
                {...listeners} 
                className="flex-shrink-0 w-[40px] flex justify-center cursor-grab active:cursor-grabbing hover:text-white transition-colors"
            >
                <IoReorderThreeOutline size={24} />
            </div>

            {/* 2. 欄位區 */}
            <div className="flex flex-1 gap-[15px] min-w-0">
                
                {/* 機尾編號 - 使用 Optional Chaining 避免 crash */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <p className="cyber-label font-bold whitespace-nowrap text-sm">機尾編號</p>
                    <span>:</span>
                    <input 
                        type="text" 
                        className="cyber-input w-full min-w-0 font-bold !rounded-xl text-sm truncate" 
                        placeholder="ENTER..." 
                        name='tail_no'
                        value={data?.tail_no || ''}
                        onChange={(e) => onChange(id, 'tail_no', e.target.value)}
                    />
                </div>
                
                {/* 飛機前座 */}
                <div className="flex items-center gap-2 flex-[0_0_30%] min-w-0">
                    <p className="cyber-label font-bold whitespace-nowrap text-sm">前座</p>
                    <span>:</span>
                    <input 
                        type="text" 
                        className="cyber-input w-full min-w-0 font-bold !rounded-xl text-sm truncate" 
                        placeholder="PILOT A" 
                        name='pilot_front'
                        value={data?.pilot_front || ''} 
                        onChange={(e) => onChange(id, 'pilot_front', e.target.value)}
                    />
                </div>

                {/* 飛機後座 */}
                <div className="flex items-center gap-2 flex-[0_0_30%] min-w-0">
                    <p className="cyber-label font-bold whitespace-nowrap text-sm">後座</p>
                    <span>:</span>
                    <input 
                        type="text" 
                        className="cyber-input w-full min-w-0 font-bold !rounded-xl text-sm truncate" 
                        placeholder="PILOT B" 
                        name='pilot_back'
                        value={data?.pilot_back || ''} 
                        onChange={(e) => onChange(id, 'pilot_back', e.target.value)}
                    />
                </div>

            </div>

            {/* 3. 刪除按鈕 */}
            <div className="flex-shrink-0 w-[40px] flex justify-center">
                <IoTrashSharp 
                    size={24} 
                    className="text-red-500 cursor-pointer hover:scale-125 hover:text-red-400 transition-all" 
                    onClick={() => onDelete && onDelete(id)}
                />
            </div>
        </div>
    );
}

export default PlaneTask;