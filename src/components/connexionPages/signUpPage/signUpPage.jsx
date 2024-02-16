import RegisterComponent from "./registerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { actualPageContext } from "../../../contexts/actualPageContext";
import { actualUserContext } from "../../../contexts/actualUserContext";
export default function SignUp(){
    const ThisPage=useContext(actualPageContext)
    const page=useContext(actualUserContext)
    return(
        <div className={ ThisPage.actualPage==="SignUpPage"  &&page.page==="welcomePage"? "h-screen w-screen  bg-THEorange  flex flex-col justify-center" : "hidden"}>
            <button type="button" className="homePageButton ml-10 rounded-full" onClick={()=>{ThisPage.GoToHomePage()}}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        <div className="flex justify-center items-center  gap-32 ">
           
            <div className=" flex flex-col items-center gap-y-10 ">
                <h1 className="text-6xl text-center font-bold text-baby-boy-clothes">Welcome To HolaHub !</h1>
                <h1 className="text-5xl text-center font-bold text-lavender">¡Bienvenido a HolaHub!</h1>
                <img src="pics\3d-casual-life-design-composition-monitor.png"></img>
          </div>
          <div className="w-1/4">
          <RegisterComponent/>
          </div>
        </div>
        </div>
    )
}