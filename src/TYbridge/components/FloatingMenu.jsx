import React, { useState, useMemo } from "react";
import { IoMenu, IoLogOut } from "react-icons/io5";
import { MdOutlineAdminPanelSettings, MdSimCardDownload, MdAppSettingsAlt } from "react-icons/md";
import { AiFillAlert, AiFillHome } from "react-icons/ai";
import { FaClipboardList, FaTools } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { styled, Tooltip, tooltipClasses } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: { backgroundColor: "#36454F", fontSize: "18px" },
}));

const ICON_MAP = { 
  MdAppSettingsAlt, FaClipboardList, AiFillAlert, MdSimCardDownload, 
  MdOutlineAdminPanelSettings, AiFillHome, GrHostMaintenance, FaTools 
};

// 增加 iconColor Prop 接收
const IconButton = ({ title, Icon, onClick, iconColor }) => (
  <CustomTooltip title={title} placement="bottom">
    <div onClick={onClick} className="p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors shrink-0">
      <Icon size={24} style={{ color: iconColor }} />
    </div>
  </CustomTooltip>
);

/**
 * @param {string} bgColor - 背景顏色 (支援 hex, rgb, rgba)
 * @param {string} iconColor - 圖示顏色 (支援 hex, rgb, CSS color)
 */
function FloatingMenu({ 
  menuData, 
  onNavigate, 
  onLogout, 
  bgColor = "rgba(0, 0, 0, 0.6)", // 預設底色
  iconColor = "#ffffff"          // 預設 Icon 顏色
}) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = useMemo(() => {
    if (!menuData?.links) return [];
    const items = menuData.links.map((link) => ({
      title: link.title,
      icon: ICON_MAP[link.element],
      action: () => onNavigate(link.path),
    })).filter(item => item.icon);

    if (menuData.group === "Admin") {
      items.push({
        title: "帳戶管理",
        icon: MdOutlineAdminPanelSettings,
        action: () => window.open(`http://${window.location.hostname}:8000/admin/`, "adminWindow"),
      });
    }
    return items;
  }, [menuData, onNavigate]);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="fixed top-5 left-5 z-[1000] flex items-center backdrop-blur-md rounded-full shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        maxWidth: isOpen ? "800px" : "56px",
        backgroundColor: bgColor, // 套用底色
      }}
    >
      {/* 主選單按鈕 (左側固定) */}
      <div className="p-3 flex justify-center shrink-0 cursor-pointer">
        <IoMenu size={32} style={{ color: iconColor }} /> {/* 套用 Icon 顏色 */}
      </div>

      {/* 向右展開的選單內容 */}
      <div 
        className={`flex items-center pr-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
        }`}
      >
        {/* 垂直線分隔 - 顏色稍微跟著 Icon 走但降透明度 */}
        <div 
          className="w-[1px] h-6 mx-2 shrink-0" 
          style={{ backgroundColor: iconColor, opacity: 0.2 }} 
        />
        
        <div className="flex items-center gap-1">
          {menuItems.map((item, i) => (
            <IconButton 
              key={i} 
              title={item.title} 
              Icon={item.icon} 
              onClick={item.action} 
              iconColor={iconColor} // 傳給子按鈕
            />
          ))}
          <IconButton title="登出" Icon={IoLogOut} onClick={onLogout} iconColor={iconColor} />
        </div>
      </div>
    </div>
  );
}

export default FloatingMenu;