import { useState, useMemo } from "react";
import BridgeList from "../components/BridgeList";
import { FakeBridgePoint } from "../fakeDatabase/FakeBridgeData";
import { AiOutlineSearch } from "react-icons/ai"; // 建議引入一個搜尋圖示

function ListPage() {
    const [searchTerm, setSearchTerm] = useState("");

    // 使用 useMemo 優化篩選邏輯，只有當 searchTerm 或原始資料改變時才重新計算
    const filteredList = useMemo(() => {
        return FakeBridgePoint.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.bid.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleSelectBridge = (bid) => {
        console.log("Selected Bridge ID:", bid);
    };

    const getColor = (value) => {
        if (!value || value === 0) return { bg: "transparent", font: "inherit" };
        if (value >= 0.85) return { bg: "#9DCD7B", font: "#1a1a1a" }; 
        if (value >= 0.7) return { bg: "#FFD700", font: "#1a1a1a" };  
        return { bg: "#FF6347", font: "#ffffff" };                  
    };

    return (
        <div className="flex flex-col w-full h-full">
            {/* 搜尋列與資訊欄 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                {/* 搜尋輸入框 */}
                <div className="relative w-full md:w-72">
                    <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="搜尋建案名稱或編號..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e95097] focus:border-transparent transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <p className="text-slate-500 text-sm">
                    顯示共 <span className="text-[#e95097] font-bold">{filteredList.length}</span> 筆建案資料
                </p>
            </div>

            {/* 列表組件：傳入篩選後的結果 */}
            <div className="flex-1 overflow-hidden">
                <BridgeList 
                    list={filteredList} 
                    onSelect={handleSelectBridge}
                    getColor={getColor} 
                />
            </div>
        </div>
    );
}

export default ListPage;