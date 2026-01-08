import ProjectTimeline from '../portfolio/components/ProjectTimeline';

export default {
  title: 'Vincent/ProjectTimeline', // 在側邊欄的路徑分層
  component: ProjectTimeline,
  tags: ['autodocs'], // 自動生成文件頁面
};

// 狀態 1：標準數據
export const Default = {
  args: {
    projects: [
      { id: 1, 名稱: "橋梁監控系統", 擔任職務: ["前端工程師"], 開始: 2024, 結束: 2026, 工具: ["React", "Vite"] },
      { id: 2, 名稱: "淡江資傳展", 擔任職務: ["專案管理"], 開始: 2021, 結束: 2022, 工具: ["Figma"] },
    ],
  },
};

// 狀態 2：空資料 (測試元件是否會崩潰)
export const Empty = {
  args: {
    projects: [],
  },
};