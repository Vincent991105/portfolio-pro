import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import PlaneTask from './PlaneTask';

// 1. 確保解構了 onUpdate
const DraggablePlane = ({ data = [], onUpdate }) => { 
  const [items, setItems] = useState(data);

  // 當父組件資料更新（如按下新增）時同步
  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  // 2. 獲取 ID 陣列（供 SortableContext 使用）
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active && over && active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      
      const newArray = arrayMove(items, oldIndex, newIndex);
      
      // 同步本地狀態
      setItems(newArray);
      
      // 關鍵：立刻回傳給父組件，防止被父組件舊資料覆蓋
      if (onUpdate) {
        onUpdate(newArray);
      }
    }
  };

  const editData = (id, fieldName, value) => {
    const updatedItems = items.map((item) => 
      item.id === id ? { ...item, [fieldName]: value } : item
    );
    setItems(updatedItems);
    if (onUpdate) onUpdate(updatedItems);
  };

  const deleteData = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    if (onUpdate) onUpdate(updatedItems);
  };

  return (
    <div className="w-full h-full p-4 bg-[#000000]/40 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-y-auto">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-4 p-2">
            {items.map((item) => (
              <PlaneTask 
                key={item.id} 
                id={item.id} 
                sort_no={item.mission_label}
                data={item}
                onChange={editData}
                onDelete={deleteData}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggablePlane;