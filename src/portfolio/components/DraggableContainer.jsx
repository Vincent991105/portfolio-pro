import { useState, useEffect, useMemo } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay, // 新增：脫離容器限制
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'; // 新增：限制水平移動
import SortableItem from './SortableItem';


const DraggableContainer = ({ data = [] }) => {
  const [items, setItems] = useState(() => (Array.isArray(data) ? data : []));
  const [activeId, setActiveId] = useState(null); // 追蹤目前正在拖曳的 ID

  useEffect(() => {
    setItems(Array.isArray(data) ? data : []);
  }, [data]);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));
  const itemIds = useMemo(() => items.map((i) => i.id), [items]);
  const isDragDisabled = items.length <= 1;

  // 處理開始拖曳
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // 處理結束拖曳
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === active.id);
        const newIndex = prev.findIndex((i) => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  if (items.length === 0) return null;

  return (
    <div className="w-full p-4 bg-slate-800 rounded-xl overflow-visible"> 
      <h3 className="text-slate-400 text-xs mb-4 font-bold uppercase tracking-widest px-1">
        左右排序 (Drag Overlay 模式)
      </h3>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToHorizontalAxis]} // 限制只能左右移動
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <SortableContext items={itemIds} strategy={horizontalListSortingStrategy}>
          {/* 容器使用 flex 並確保 overflow 不會切掉陰影 */}
          <div className="flex flex-row gap-4 p-2 overflow-visible">
            {items.map((item) => (
              <SortableItem 
                key={item.id} 
                id={item.id} 
                content={item.content} 
                isDisabled={isDragDisabled} 
              />
            ))}
          </div>
        </SortableContext>

        {/* 核心：拖曳時渲染在最外層，解決 overflow 問題 */}
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <SortableItem 
              id={activeId} 
              content={items.find(i => i.id === activeId)?.content} 
              isOverlay 
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default DraggableContainer;