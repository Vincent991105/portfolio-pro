import LiveStream from "../components/LiveStream"
import MissionTask from "../components/MissionTask"

function JYrealtime (){
    return(
        <div className="flex w-full h-full gap-5">
            <div className="flex flex-col flex-1 gap-3 min-h-0"> 
                <div className="flex flex-2 gap-5 min-h-20">
                    <div className="flex-1 min-h-0">
                        <LiveStream label='東' title='空域' src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'/>
                    </div>
                    <div className="flex-1 min-h-0">
                        <LiveStream label='西' title='空域' src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'/>
                    </div>
                </div>
                <div className="flex-1 min-h-0">
                    <LiveStream label='東' title='海域' src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'/>
                </div>
                <div className="flex-1 min-h-0">
                    <LiveStream label='西' title='海域' src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'/>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <MissionTask />
            </div>
        </div>  
    )
}

export default JYrealtime