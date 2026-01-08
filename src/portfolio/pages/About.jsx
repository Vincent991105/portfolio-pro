import { useNavigate } from "react-router-dom"
import CustomDivButton from "../components/CustomDivButton"
import Header from "../components/Header"
import MapConnection from "../components/MapConnection"
import TypeWriter from "../components/TypeWriter"
import { PROJECTS_DATA } from '../fakeDatabase/projectData';
import ProjectStats from "../components/ProjectStats"
import ProjectHighlight from "../components/ProjectHighlight"
import SkillRadar from "../components/SkillRadar"
import ProjectTimeline from "../components/ProjectTimeline"

function About() {

    const navigate = useNavigate();

    return (
        /* 最外層：強制 100vh，不允許全域滾動 */
        <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
        
        {/* 1. Header: 佔據它原本的高度 */}
        <Header />
        
        {/* 2. 內容區域：佔據剩餘空間 (flex-1) 並允許內部垂直滾動 (overflow-y-auto) */}
        <main className="flex-1 w-full overflow-y-auto custom-scrollbar pb-10">
            <div className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-10">
            
                {/* 地圖 */}
                <MapConnection lineColor="#747bff" />

                {/* 文字區塊 */}
                <div className="flex flex-col w-full mt-[10px] gap-6 px-20">
                <TypeWriter 
                    text='「從麻六甲到淡水，跨越 3,000 公里的想像工程師。」' 
                    speed={60} 
                    size={24} 
                    weight='font-bold' 
                    color="text-[#747bff]"
                    align="center"
                />
                
                <div className="space-y-8 text-slate-700">
                    {/* tracking-wide: 拉開字距 | leading-relaxed: 拉開行距 */}
                    <div className="space-y-6 text-lg tracking-[0.3em] leading-loose">
                        <p>
                        你好，我是 Vincent。一名來自 <span className="text-[#747bff] font-semibold px-1">馬來西亞</span>、現紮根於 <span className="text-[#747bff] font-semibold px-1">台灣</span> 的前端工程師。
                        </p>

                        <p>
                        我的旅程始於 <span className="border-b-2 border-[#747bff]/30 pb-0.5">淡江大學資訊傳播學系</span>。在那段跨學科的洗禮中，我並未將自己侷限於程式碼，而是沉浸在 <span className="text-[#747bff] font-semibold">UI/UX 設計、行銷規劃甚至遊戲開發</span> 的多維領域裡。這段經歷讓我明白，一個好的數位產品不只是冷冰冰的邏輯，更是 <span className="italic text-slate-900">美學與使用者心理的交織</span>。
                        </p>

                        <p>
                        跨海求學與就業的過程，磨練了我極強的 <span className="text-[#747bff] font-semibold">適應力與觀察力</span>。作為前端工程師，我擅長將 <span className="bg-[#747bff]/10 px-1.5 py-0.5 rounded text-[#5a61e6]">複雜的邏輯轉化為直覺的介面</span>，並習慣從設計師與行銷人的角度思考，確保每一行代碼都能精準傳遞品牌的核心價值。
                        </p>
                    </div>

                    {/* 最後一段金句，字距可以再拉開一點 tracking-wider */}
                    <p className="text-xl font-bold text-slate-800 border-l-4 border-[#747bff] pl-6 py-2 italic tracking-wider leading-loose">
                        「我不只是在寫網頁，我是在建構一個個能與人對話的數位空間。」
                    </p>
                </div>
                </div>

                <ProjectTimeline projects={PROJECTS_DATA} />
                <ProjectStats projects={PROJECTS_DATA} tablename='專案數據'/>
                
                <CustomDivButton 
                    text="Contact | 聯絡我" 
                    delay={0}
                    onClick = {() => navigate('../contact')}
                    bgColor="bg-white"
                    borderColor="border-indigo-600"
                    textColor="#747bff"
                    activeBgColor="active:bg-indigo-600"
                    activeTextColor="active:text-white"
                />
            </div>
        </main>
        </div>
    )
}

export default About