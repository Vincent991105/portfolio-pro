import Header from "../components/Header"
import StorybookCard from "../components/StorybookCard"

function Storybook(){
    return(
        /* 最外層：強制 100vh，不允許全域滾動 */
        <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
        
        {/* 1. Header: 佔據它原本的高度 */}
        <Header />
        
        {/* 2. 內容區域：佔據剩餘空間 (flex-1) 並允許內部垂直滾動 (overflow-y-auto) */}
        <main className="flex-1 w-full overflow-y-auto custom-scrollbar pb-10">
            <div className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-10">
            
                <StorybookCard />

            </div>
        </main>
        </div>
    )
}

export default Storybook