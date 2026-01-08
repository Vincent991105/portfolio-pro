import Header from "../components/Header"
import { PROJECTS_DATA } from '../fakeDatabase/projectData';
import ProjectCard from "../components/ProjectCard"
import ProjectHighlight from "../components/ProjectHighlight";
import SkillRadar from "../components/SkillRadar";
import ProjectTimeline from "../components/ProjectTimeLine";
import ProjectStats from "../components/ProjectStats";

function Project() {

    return (
        /* 最外層：強制 100vh，不允許全域滾動 */
        <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
        
        {/* 1. Header: 佔據它原本的高度 */}
        <Header />
        
        {/* 2. 內容區域：佔據剩餘空間 (flex-1) 並允許內部垂直滾動 (overflow-y-auto) */}
        <main className="flex-1 w-full overflow-y-auto custom-scrollbar pb-10">
            <div className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                    {PROJECTS_DATA.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
        </div>
    )
}

export default Project