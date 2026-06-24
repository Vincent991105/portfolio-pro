import ExportPreviewModal from '../portfolio/components/ExportPreviewModal';

export default {
  title: 'Vincent/ExportPreviewModal', // 在側邊欄的路徑分層
  component: ExportPreviewModal,
  tags: ['autodocs'], // 自動生成文件頁面
};

// 狀態 1：標準數據
export const Default = {
  args: {
    title:'空軍戰術戰鬪機部隊對地炸射成績紀錄單',
    isOpen: true,
    onClose: () => console.log('Close clicked'),
    onConfirm: () => alert('開始下載 PDF...'),
    data: {
      area1: { 
        date: "2026-01-09",
        quest: "JY-1234",
        plane_no: "A-380",
        time: "14:00",
        pilot: "XXX / XXX",
        place: "XX靶場", 
      },
      area2: [true, false, true, true],
      area3: [
        { x: 32, y: 68 }, 
        { x: 12, y: 48 }, 
        { x: 42, y: 50 }, 
        { x: 50, y: 50 }
      ],
      area4: [
        { AData: '09:10 3區', BData: 280 },
        { AData: '07:40 3區', BData: 240 },
        { AData: '09:05 1區', BData: 110 },
        { AData: '靶心', BData: 0}
      ]
    }
  },
};

// 狀態 2：空資料 (測試元件是否會崩潰)
export const Empty = {
  args: {
    isOpen: true,
    data: {
      area1: { A: "ERR-001", B: "警告 (Warning)", C: "感測器通訊中斷", time: "2026-01-09 10:00" },
      area2: [false, false, false, true],
      area3: [{ x: 10, y: 10 }, { x: 90, y: 90 }],
      area4: [{ AData: '錯誤代碼', BData: 404 }, { AData: '重試次數', BData: 5 }]
    }
  },
};