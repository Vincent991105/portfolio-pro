import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem ({ id, content, isDisabled, isOverlay }){
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: isDisabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging && !isOverlay ? 0.3 : 1, // 拖曳時原本的位置變淡
  };

  const className = `p-4 min-w-[150px] bg-slate-700 border border-slate-600 rounded-lg text-white shadow-md
    ${isDisabled ? 'cursor-default' : 'cursor-grab active:cursor-grabbing hover:bg-slate-600'}
    ${isOverlay ? 'shadow-2xl border-blue-500 scale-105 rotate-2 cursor-grabbing' : ''}`;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={className}>
      {content}
    </div>
  );
};

export default SortableItem