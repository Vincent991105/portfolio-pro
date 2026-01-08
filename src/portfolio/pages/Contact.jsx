import Header from "../components/Header"
import ProjectHighlight from "../components/ProjectHighlight"
import SkillRadar from "../components/SkillRadar"
import { PROJECTS_DATA } from "../fakeDatabase/projectData"

function Contact(){
    return(
        <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
        
        {/* 1. Header: 佔據它原本的高度 */}
        <Header />
        
        {/* 2. 內容區域：佔據剩餘空間 (flex-1) 並允許內部垂直滾動 (overflow-y-auto) */}
        <main className="flex-1 w-full overflow-y-auto custom-scrollbar pb-10">
            <div className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-10">
            
                <ProjectHighlight projects={PROJECTS_DATA}/>
                <SkillRadar projects={PROJECTS_DATA} />
                
            </div>
        </main>
        </div>
    )
}

export default Contact