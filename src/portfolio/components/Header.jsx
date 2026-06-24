import { NavLink } from "react-router";

function Header() {
  // 定義 active 的樣式 (Tailwind)
  const activeStyle = "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1";
  const normalStyle = "text-slate-500 hover:text-indigo-400 transition-colors pb-1 ";

  return (
    <nav className="w-full max-w-[980px] mx-auto flex justify-center gap-8 py-5">
      <NavLink 
        to="../about" 
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        About | 關於
      </NavLink>

      <NavLink 
        to="../project" 
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        Project | 專案
      </NavLink>

      {/* <NavLink 
        to="../storybook" 
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        Storybook | 元件庫
      </NavLink> */}

      <NavLink 
        to="../contact" 
        className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
      >
        Contact | 聯絡我
      </NavLink>
    </nav>
  );
}

export default Header;