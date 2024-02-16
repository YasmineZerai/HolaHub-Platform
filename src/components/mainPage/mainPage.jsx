import { useContext } from "react";
import Navbar from "./navbar/navbar";
import SideBar from "./sideBar/sideBar";
import { actualUserContext } from "../../contexts/actualUserContext";

export default function MainPage({children}){
    const page=useContext(actualUserContext)
    return(<div className={page.page==="account"?"w-screen h-screen flex justify-start": "hidden"}>
        <SideBar/>
       <div className=" w-full h-9/10">
       <Navbar/>
       <div className="h-full w-full bg-moreSubtle">
       {children}
       </div>
       </div>
    </div>)
}