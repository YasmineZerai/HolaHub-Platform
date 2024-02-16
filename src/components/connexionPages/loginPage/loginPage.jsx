import Login from "./LoginComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { actualPageContext } from "../../../contexts/actualPageContext";
import { actualUserContext } from "../../../contexts/actualUserContext";
export default function LoginPage(){
    const ThisPage=useContext(actualPageContext)
    const page=useContext(actualUserContext)
    console.log(ThisPage.actualPage)
    return(
        <div className={ThisPage.actualPage==="LoginPage" && page.page==="welcomePage"?"h-screen w-screen bg-peachy  flex flex-col justify-center": "hidden"}>
            <button type="button" className="homePageButton ml-10 rounded-full" onClick={()=>{ThisPage.GoToHomePage()}}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        <div className=" flex justify-center gap-36 items-center ">
            
            <img src="pics\3d-casual-life-young-man-sitting-with-a-laptop-and-waving-his-hand.png"></img>
            <div className="w-1/4 flex flex-col items-center gap-y-10 ">
                <h1 className="text-6xl text-center font-bold text-baby-boy-clothes">Welcome Back !</h1>
                <h1 className="text-5xl text-center font-bold text-lavender">¡Bienvenido!</h1>
          <Login/>
          </div>
        </div>
        </div>
        )
}