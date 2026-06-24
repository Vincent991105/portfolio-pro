import { Outlet } from "react-router-dom"

function Puppyfarm(){
    return(
        <div className="w-screen h-screen bg-[#243047] overflow-hidden">
            <div className="flex flex-col w-full h-full px-50 py-5 gap-5">
                <div className="flex w-full h-[60px] gap-10 items-center">
                    <h1>LOGO</h1>
                    <div className="flex flex-1 justify-between">
                        <div className="flex flex-1 gap-2">
                            <div className="flex px-5 py-2 bg-white/50 gap-1 rounded-full items-center cursor-pointer">
                                <h3 className="text-xl text-[#4372BF] font-bold">犬</h3>
                                <h4 className="text-white">清單 | Puppy List</h4>
                            </div>
                            <div className="flex px-5 py-2 bg-white/0 gap-1 rounded-full items-center cursor-pointer">
                                <h3 className="text-xl text-[#4372BF] font-bold">主</h3>
                                <h4 className="text-white">清單 | Master List</h4>
                            </div>
                            <div className="flex px-5 py-2 bg-white/0 gap-1 rounded-full items-center cursor-pointer">
                                <h3 className="text-xl text-[#4372BF] font-bold">活動</h3>
                                <h4 className="text-white">清單 | Event List</h4>
                            </div>
                        </div>
                        <div className="flex gap-2 p-2">
                            <div className="flex px-3 bg-[#1F152A] border border-[#8156AF] rounded-full items-center opacity-70 hover:opacity-100 hover:font-bold cursor-pointer">
                                <h4 className="text-[#8156AF]">註冊</h4>
                            </div>
                            <div className="flex px-3 bg-[#15272A] border border-[#56AFAF] rounded-full items-center opacity-70 hover:opacity-100 hover:font-bold cursor-pointer">
                                <h4 className="text-[#56AFAF]">登入</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full min-h-0 overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Puppyfarm