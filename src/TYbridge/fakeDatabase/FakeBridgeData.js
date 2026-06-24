export const FakeBridgePoint = [
  {
    bid: "B001",
    name: "大直橋",
    latitude: 25.0772,
    longitude: 121.5456,
    type: "橋梁",
    isSelected: true,
    station: {
      name: "大直觀測站",
      detail: { precipitation: 0.5, temperature: 24.5, windSpeed: 3.2, windDirection: 180 }
    },
    anomaly_sensor_list: { counts: 0 },
    latest_health: 95,
    slope: { daysUntilAlert: 45, daysUntilMove: 90 },
    earthquake: { beforeAfter: 0.8850, maxDuring: 0.9210 },
    typhoon: { beforeAfter: 0.7520, maxDuring: 0.8140 }
  },
  {
    bid: "B002",
    name: "關渡大橋",
    latitude: 25.1228,
    longitude: 121.4428,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "淡水觀測站",
      detail: { precipitation: 12.0, temperature: 22.1, windSpeed: 8.5, windDirection: 210 }
    },
    anomaly_sensor_list: { counts: 2 },
    latest_health: 78,
    slope: { daysUntilAlert: 12, daysUntilMove: 30 },
    earthquake: { beforeAfter: 0.7230, maxDuring: 0.7850 },
    typhoon: { beforeAfter: 0.6500, maxDuring: 0.6800 }
  },
  {
    bid: "B003",
    name: "新北大橋",
    latitude: 25.0441,
    longitude: 121.4883,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "板橋觀測站",
      detail: { precipitation: 0.0, temperature: 26.8, windSpeed: 1.2, windDirection: 90 }
    },
    anomaly_sensor_list: { counts: 5 },
    latest_health: null,
    slope: { daysUntilAlert: null, daysUntilMove: null },
    earthquake: { beforeAfter: null, maxDuring: null },
    typhoon: { beforeAfter: 0.9100, maxDuring: 0.9500 }
  },
  {
    bid: "B004",
    name: "民權大橋",
    latitude: 25.0631,
    longitude: 121.5722,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "松山觀測站",
      detail: { precipitation: 2.5, temperature: 25.2, windSpeed: 4.1, windDirection: 160 }
    },
    anomaly_sensor_list: { counts: 1 },
    latest_health: 88,
    slope: { daysUntilAlert: 60, daysUntilMove: 120 },
    earthquake: { beforeAfter: 0.8200, maxDuring: 0.8500 }, // 黃色區間
    typhoon: { beforeAfter: 0.8900, maxDuring: 0.9200 } // 綠色區間
  },
  {
    bid: "B005",
    name: "重陽大橋",
    latitude: 25.0864,
    longitude: 121.4961,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "三重觀測站",
      detail: { precipitation: 0.0, temperature: 27.5, windSpeed: 2.5, windDirection: 45 }
    },
    anomaly_sensor_list: { counts: 0 },
    latest_health: 92,
    slope: { daysUntilAlert: 30, daysUntilMove: 60 },
    earthquake: { beforeAfter: 0.7100, maxDuring: 0.7400 }, // 黃色
    typhoon: { beforeAfter: 0.6800, maxDuring: 0.7100 } // 紅色
  },
  {
    bid: "B006",
    name: "台北大橋",
    latitude: 25.0632,
    longitude: 121.5133,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "大同觀測站",
      detail: { precipitation: 1.2, temperature: 26.1, windSpeed: 3.8, windDirection: 270 }
    },
    anomaly_sensor_list: { counts: 8 }, // 異常數較多
    latest_health: 65,
    slope: { daysUntilAlert: 5, daysUntilMove: 15 }, // 緊急狀態
    earthquake: { beforeAfter: 0.6200, maxDuring: 0.6500 }, // 紅色
    typhoon: { beforeAfter: 0.9300, maxDuring: 0.9600 } // 綠色
  },
  {
    bid: "B007",
    name: "百齡橋",
    latitude: 25.0872,
    longitude: 121.5183,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "士林觀測站",
      detail: { precipitation: 5.4, temperature: 23.8, windSpeed: 5.2, windDirection: 190 }
    },
    anomaly_sensor_list: { counts: 1 },
    latest_health: 82,
    slope: { daysUntilAlert: 20, daysUntilMove: 45 },
    earthquake: { beforeAfter: 0.8600, maxDuring: 0.8900 }, // 綠色
    typhoon: { beforeAfter: 0.7200, maxDuring: 0.7500 } // 黃色
  },
  {
    bid: "B008",
    name: "中山橋",
    latitude: 25.0805,
    longitude: 121.5277,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "中山觀測站",
      detail: { precipitation: 0.8, temperature: 25.7, windSpeed: 2.9, windDirection: 10 }
    },
    anomaly_sensor_list: { counts: 0 },
    latest_health: 98,
    slope: { daysUntilAlert: 100, daysUntilMove: 200 },
    earthquake: { beforeAfter: 0.9500, maxDuring: 0.9700 }, // 綠色
    typhoon: { beforeAfter: 0.9400, maxDuring: 0.9600 } // 綠色
  },
  {
    bid: "B009",
    name: "華江橋",
    latitude: 25.0355,
    longitude: 121.4916,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "萬華觀測站",
      detail: { precipitation: 15.6, temperature: 21.5, windSpeed: 10.2, windDirection: 230 }
    },
    anomaly_sensor_list: { counts: 3 },
    latest_health: 74,
    slope: { daysUntilAlert: 15, daysUntilMove: 35 },
    earthquake: { beforeAfter: 0.6900, maxDuring: 0.7200 }, // 紅色/黃色邊界
    typhoon: { beforeAfter: 0.6200, maxDuring: 0.6500 } // 紅色
  },
  {
    bid: "B010",
    name: "忠孝橋",
    latitude: 25.0485,
    longitude: 121.5061,
    type: "橋梁",
    isSelected: false,
    station: {
      name: "中正觀測站",
      detail: { precipitation: 0.2, temperature: 26.5, windSpeed: 2.1, windDirection: 320 }
    },
    anomaly_sensor_list: { counts: 0 },
    latest_health: 89,
    slope: { daysUntilAlert: 50, daysUntilMove: 100 },
    earthquake: { beforeAfter: 0.8700, maxDuring: 0.9000 }, // 綠色
    typhoon: { beforeAfter: 0.8400, maxDuring: 0.8600 } // 黃色/綠色邊界
  }
];