import { useNavigate } from "react-router-dom"
import CustomDivButton from "../components/CustomDivButton"
import TypeWriter from "../components/TypeWriter"

function Home(){

    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center justify-center w-full h-full gap-3">
            <TypeWriter text='My name is Vincent' speed={150} size={50}/>
            <TypeWriter text='Imagination Engineer' speed={40} size={30} delay={3000}/>
            <CustomDivButton 
                text="About | 關於" 
                delay={4200}
                onClick = {() => navigate('../about')}
                bgColor="bg-white"
                borderColor="border-indigo-600"
                textColor="text-indigo-600"
                activeBgColor="active:bg-indigo-600"
                activeTextColor="active:text-white"
            />
        </div>
    )
}

export default Home