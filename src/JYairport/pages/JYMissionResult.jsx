import JYUnknownData from "../components/JYUnknownData"
import MissionSort from "../components/MissionSort"
import SubjectSelect from "../components/SubjectSelect"

function JYMissionResult(){
    return(
        <div className="flex h-full w-full gap-[30px] px-[20px] py-[10px]">
            <div className="flex flex-col flex-1 h-full max-w-[450px] gap-[30px]">
                <SubjectSelect />
                <MissionSort />
            </div>
            <JYUnknownData text="請點選開始任務" />
        </div>
    )
}

export default JYMissionResult