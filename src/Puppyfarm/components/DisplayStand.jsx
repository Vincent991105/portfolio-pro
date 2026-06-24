function DisplayStand(){
    return(
        <div className="flex min-h-[450px] bg-[#FFFFFF]/5 rounded-xl p-5">
            <div className="flex flex-1 flex-col h-full">
                <div className="flex flex-col gap-2">
                    <span className="h-[5px] w-[40px] bg-[#7AE9D2]" />
                    <h2 className="ml-2 text-3xl text-[#FFFFFF] font-black">大大</h2>
                </div>
                <div className="relative flex-1 w-full">
                    <img className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" src="/SpecialShadow.png" alt="shadow" />
                    <img className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" src="/DemoPuppy.png" alt="demo" />
                </div>
                <h2 className="py-3 text-sm text-[#7AE9D2]/40 font-bold">XXXXXXXXXXX</h2>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <h2 className="p-2 text-3xl text-[#FFFFFF]/40 font-black">01</h2>
                <div className="flex flex-col flex-1 justify-center items-center gap-2">
                    <span className="h-[5px] w-[40px] bg-[#7AE9D2] animate-pulse" />
                    <span className="h-[5px] w-[40px] bg-[#7AE9D2]" />
                    <span className="h-[5px] w-[40px] bg-[#7AE9D2]" />
                </div>
                <div className="flex justify-center items-center gap-2 py-3">
                    <span className="h-[20px] w-[20px] bg-[#7AE9D2] rounded-[100px] shadow-[0_4_8px_#000000]" />
                    <span className="h-[20px] w-[20px] bg-[#000000] rounded-[100px] shadow-[0_4_8px_#000000]" />
                </div>
            </div>
        </div>
    )
}

export default DisplayStand