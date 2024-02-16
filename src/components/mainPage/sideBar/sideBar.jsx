import { useContext } from "react";
import SideBarItem from "./sideBarItem";
import { actualSectionContext } from "../../../contexts/actualSectionContext";
import { actualUserContext } from "../../../contexts/actualUserContext";
import { actualPageContext } from "../../../contexts/actualPageContext";

export default function SideBar(){
    const navigate=useContext(actualSectionContext)
    const log=useContext(actualUserContext)
    const page=useContext(actualPageContext)
    const handleClick=()=>{log.logOut(); page.GoToHomePage;}
    return(
        <div className="w-1/4 h-full bg-lightOrange rounded-r-2xl flex flex-col justify-evenly items-center ">
            <img src="pics\casual-life-3d-brain-flourishing.png" className=" scale-35  absolute -translate-y-80 z-10 -translate-x-28"></img>
        <img src="pics\Capture_d_écran_2023-11-30_220433-removebg-preview.png" className=" scale-90  z-0 translate-x-4 -translate-y-3"></img>
        <div className="w-full flex flex-col gap-32">
            <div className="flex flex-col gap-2">
            <SideBarItem label="Courses" src="pics\3d-casual-life-young-people-discussing-work-project.png" handleClick={navigate.showCourseSection} section="CourseSection"/>
            <SideBarItem label="Quizzes" src="pics\casual-life-3d-arcade-joystick-green.png"
            handleClick={navigate.showQuizzSection} section="QuizzSection"/>
            <SideBarItem label="Forum" src="pics\3d-casual-life-picking-user-window.png"
            handleClick={navigate.showForumSection} section="ForumSection" />
            <SideBarItem label="Profile" src="pics\casual-life-3d-profile-picture-of-blonde-woman-in-blue-shirt.png"
            handleClick={navigate.showProfileSection} section="ProfileSection" />
            </div>
            <SideBarItem label="LogOut" src="pics\casual-life-3d-lock.png" lock="yes" handleClick={handleClick}/>
        </div>
        
        </div>
    )
}