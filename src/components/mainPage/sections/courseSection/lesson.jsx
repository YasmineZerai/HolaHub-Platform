import { useContext } from "react"
import { actualLessonContext } from "../../../../contexts/actualLessonContext"
import { actualSectionContext } from "../../../../contexts/actualSectionContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import LessonContent from "./lessonContent"
import LessonBody from "./lessonBody"
export default function Lesson({state,n,src}){
    const lesson=useContext(actualLessonContext)
    const actual=useContext(actualSectionContext)
   const tab=lesson.lessonTab;
    
    return( <div className={lesson.actualLesson===state && actual.actualSection==="CourseSection"? "flex  flex-col items-start justify-start p-5 w-almostFull h-almostFull bg-lightOrange m-3 rounded-3xl" : "hidden"}>
       <div className="flex items-center justify-start h-1/3">
        <button type="button" className="homePageButton ml-5 rounded-full " onClick={lesson.GoBack}>  <FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className=" text-5xl text-peachy  font-bold font-sans font-comforta capitalize"> Lesson {n}: <br/><span className=" text-logoBlue text-6xl"> {tab.title} </span> </div>
        <div className={`backImage w-48 h-48 ${src}`}></div>
        
        </div>
        <LessonBody tab={tab}/>

    </div>)
}
