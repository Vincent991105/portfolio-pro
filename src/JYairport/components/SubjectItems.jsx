import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IoTrashSharp } from "react-icons/io5";

function SubjectItems ({ item, onDelete, index }){
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = 
        useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 50 : 1,
    };

    return (
        <div 
        ref={setNodeRef} 
        style={style} 
        className="flex w-full bg-[#FFFFFF]/10 p-[10px] justify-center items-center rounded-xl mb-2 border border-white/5 hover:border-[#00FFFF]/30 transition-colors cursor-default"
        >
        {/* 拖曳手柄：讓文字區域可以觸發拖曳 */}
        <div className="flex flex-1 flex-col gap-[5px]" {...attributes} {...listeners}>
            <span className="text-[#FFFFFF]/50 text-xs">Pass{index+1}-{item.category}</span>
            <p className="text-[#00FFFF] text-lg font-bold">{item.subject_name}</p>
        </div>
        
        <div className="flex-shrink-0 w-[40px] flex justify-center">
            <IoTrashSharp 
            size={20} 
            className="text-red-500 cursor-pointer hover:scale-125 transition-transform" 
            onClick={() => onDelete(item.id)}
            />
        </div>
        </div>
    );
};

export default SubjectItems