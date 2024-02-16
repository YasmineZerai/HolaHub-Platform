import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { actualUserContext } from "../../../contexts/actualUserContext"
export default function UserInfo(){
    const user=useContext(actualUserContext)
    return(
        <div className="flex justify-center items-center w-1/4 gap-5">
             <div className="flex items-center justify-center gap-3 ">
            <FontAwesomeIcon icon={faMessage} size="xl" style={{color: '#FFB4B4',}} /> 
            <FontAwesomeIcon icon={faBell} size="xl" style={{color: '#FFB4B4',}} />
            </div>
            <div className="flex items-center  w-2/3 scale-110">
            <h1 className="text-md font-bold text-slate-800 capitalize translate-x-16 ">{user.firstName+" "+user.lastName}</h1> 
            <img src="pics\casual-life-3d-profile-picture-of-blonde-woman-in-blue-shirt.png" className="scale-20"></img>
            </div>
        </div>
    )
}