import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { actualPageContext } from "../../contexts/actualPageContext"
import { useContext } from "react"
export default function TopSection(){
 const NextPage=useContext(actualPageContext)

     return(<>
       
        <div className="h-screen flex justify-evenly items-center font-sans font-comforta drop-shadow-lg">
            <div className="flex flex-col w-5/12 justify-center items-center gap-y-10 drop-shadow-lg" >
            <div ><h1 className="text-7xl text-center font-bold text-baby-boy-clothes "><span className="text-white font-bold">HolaHub </span> <br/>Elevate Your Spanish Game!<br/> Tu Pasaporte to Language Mastery</h1></div>
            <div className="flex flex-col justify-center items-center" >
                <button type="button" className= "homePageButton text-4xl font-sans font-comforta" onClick={()=>{NextPage.GoToSignUpPage()}}>
                <p>Start The Experience </p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className="flex justify-center items-center gap-x-5">
            <p className="font-sans font-comforta text-lavender font-bold text-2xl">Already a member ? </p>
            <button type="button" className="homePageButton text-2xl font-sans font-comforta p-2 " onClick={()=>NextPage.GoToLoginPage()} ><p>Sign In</p>
            <FontAwesomeIcon icon={faArrowRight} /></button>
            </div></div>
</div>
            <img className="scale-150" src="pics\casual-life-3d-stack-of-books-and-mug-next-to-laptop-screen-showing-planets.png"></img>
           
            </div>
            </>
    )
}