import TypeWriter from '../portfolio/components/TypeWriter';

export default {
  title: 'Vincent/TypeWriter', // 在側邊欄的路徑分層
  component: TypeWriter,
  tags: ['text'], // 自動生成文件頁面
};

// 狀態 1：標準數據
export const Default = {
  args:{
    text : 'My name is Vincent',
    speed : 40, 
    size : 24, 
    delay : 0,
    weight : "font-bold", 
    color : "#d37a7a",
    align : "left"
  },
};

// 狀態 2：空資料測試
// 這裡故意不給值或給空值，測試元件內部的 defaultProps 或邏輯是否會崩潰
export const Empty = {
  args: {
    text: '',
    speed: undefined,
    size: undefined,
    delay: undefined,
    weight: "",
    color: "",
    align: ""
  },
};

// 狀態 3：長文本測試 (測試換行或容器溢出)
export const LongText = {
  args: {
    ...Default.args,
    text: '這是一個長文本測試，用來觀察打字機元件在面對大量文字時，是否能正確處理換行以及打字速度是否依然流暢。',
    color: "#d60000"
  },
};