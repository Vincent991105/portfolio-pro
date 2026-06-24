import DraggableContainer from '../portfolio/components/DraggableContainer';

export default {
  title: 'Vincent/DraggableContainer', // 在側邊欄的路徑分層
  component: DraggableContainer,
  tags: ['autodocs'], // 自動生成文件頁面
};

// 狀態 1：標準數據
export const Default = {
  args: {
    data: [
      { id: 'area-1', content: '第一個區塊：炸射基本資訊' },
      { id: 'area-2', content: '第二個區塊：命中判定統計' },
      { id: 'area-3', content: '第三個區塊：偏差數值列表' },
    ],
  },
};

export const SingleItem = {
  args: {
    data: [
      { id: 'area-1', content: '第一個區塊 (單一項目)' },
    ],
  },
};

export const FullAccess = {
  args: {
    data: [
      { id: 'area-1', content: '第一個區塊' },
      { id: 'area-2', content: '第二個區塊' },
      { id: 'area-3', content: '第三個區塊' },
      { id: 'area-4', content: '第四個區塊' },
    ],
  },
};

export const Empty = {
  args: {
    data: [],
  },
};