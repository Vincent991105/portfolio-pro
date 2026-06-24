import DraggableVideo from "./DraggableVideo"

function LiveStream({label, title, src}){
    return(
        <div id='LiveStream' className="flex flex-col w-full h-full gap-2 overflow-hidden">
            <div className="flex gap-3 items-center">
                <span className={`py-1 px-3 rounded ${label === '西' ? 'bg-[#00FFFF]' : 'bg-[#00FF90]'}`}>
                    <h4 className="font-bold">{label}</h4>
                </span>
                <span className="flex-1 h-[3px] bg-[#00FFFF]"></span>
                <h3 className="text-[#ffffff] font-bold">{title}</h3>
            </div>
            <DraggableVideo src={src}/>
        </div>
    )
}

export default LiveStream