import DisplayStand from "../components/DisplayStand"
import PuppyMap from "../components/PuppyMap"

function PuppyList(){
    return(
        <div className="flex flex-col w-full h-full gap-5 overflow-y-auto">
            <DisplayStand />
            <div className="flex w-full gap-5">
                <div className="flex w-[500px]">
                    <PuppyMap />
                </div>
            </div>
        </div>
    )
}

export default PuppyList