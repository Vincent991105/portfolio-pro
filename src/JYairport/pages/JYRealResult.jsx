import MissionList from "../components/MissionList";
import AddMission from "../components/AddMission";
import { Outlet } from "react-router-dom";


function JYRealResult (){

    const submitAddMission = (data) =>{
        console.log(data)
    }

    return(
        <div className="flex w-full h-full bg-[#789CF0]/15 gap-5 rounded p-[20px]">
            <div className="flex flex-1 flex-col h-full pr-[20px] border-2 border-r-[#00FFFF] gap-[10px]">
                <MissionList />
                <AddMission onSubmit={submitAddMission}/>
            </div>
            <Outlet/>
        </div>  
    )
}

export default JYRealResult