import { Outlet, useNavigate } from 'react-router-dom';
import FloatingMenu from './components/FloatingMenu'; // 請確保路徑正確

function TYbridge() {
    const navigate = useNavigate();

    // 1. 模擬從 API 獲取的權限與連結資料
    // 實際開發中，這裡可以從 Redux, Context 或 API 獲取
    const mockAuthInfo = {
        group: "Admin", // 或 "User"
        links: [
            { title: "首頁", element: "AiFillHome", path: "/TYbridge/bridge/home" },
            { title: "設備監控", element: "MdAppSettingsAlt", path: "/TYbridge/bridge/monitor" },
            { title: "警報清單", element: "AiFillAlert", path: "/TYbridge/bridge/alerts" },
            { title: "維護記錄", element: "GrHostMaintenance", path: "/TYbridge/bridge/maintenance" },
            { title: "工具箱", element: "FaTools", path: "/TYbridge/bridge/tools" },
        ]
    };

    // 2. 處理導航邏輯
    const handleNavigate = (path) => {
        console.log(`導航至: ${path}`);
        navigate(path);
    };

    // 3. 處理登出邏輯
    const handleLogout = () => {
        if (window.confirm("確定要登出系統嗎？")) {
            console.log("執行登出流程...");
            // 這裡放你的 logout() 邏輯
            // navigate('/login');
        }
    };

    return (
        <div className="relative w-full h-screen bg-#a7d3e0-900">
            {/* 這裡放你的主要頁面內容 */}
            <Outlet />

            {/* 放置懸浮選單按鈕 */}
            <FloatingMenu 
                menuData={mockAuthInfo}
                onNavigate={handleNavigate}
                onLogout={handleLogout}
                iconColor='#ffffff'
                bgColor='#e95097a6'
            />
        </div>
    );
}

export default TYbridge;