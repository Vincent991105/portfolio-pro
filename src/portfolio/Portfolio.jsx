import { Outlet } from "react-router-dom";

function Portfolio(){
    return(
        <div className="max-w-[1120px] mx-auto w-full h-full">
            <Outlet />
        </div>
    )
}

export default Portfolio