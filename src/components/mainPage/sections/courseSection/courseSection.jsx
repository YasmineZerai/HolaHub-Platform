import { useContext } from "react"
import { actualSectionContext} from "../../../../contexts/actualSectionContext"
import { actualLessonContext } from "../../../../contexts/actualLessonContext"
import CourseCard from "./courseCard"

import Lesson from "./lesson"

export default function CourseSection()
{
const actual=useContext(actualSectionContext)
const lessonContext=useContext(actualLessonContext)


    return(
      <>
    <div className={actual.actualSection==="CourseSection" && lessonContext.actualLesson==="NoLessonDisplayed" ?"flex flex-wrap justify-center items-center  h-full w-full max-h-fit max-w-fit p-2 gap-5":"hidden"}>
        <CourseCard src="imageOne" title="Greetings and itroductions" n='1' handleClick1={lessonContext.GoToLessonOne} handleClick2={lessonContext.showLessonOne}/>
        <CourseCard src="imageTwo" title="Daily Activities" n='2'handleClick1={lessonContext.GoToLessonTwo} handleClick2={lessonContext.showLessonTwo}/>
        <CourseCard src="imageThree" title="Food and Dining Basics" n='3' handleClick1={lessonContext.GoToLessonThree} handleClick2={lessonContext.showLessonThree}/>
        <CourseCard src="imageFour" title="Travel and Directions" n='4'handleClick1={lessonContext.GoToLessonFour}  handleClick2={lessonContext.showLessonFour}/>
        <CourseCard src="imageFive" title="Common Phrases for Socializing" n='5' handleClick1={lessonContext.GoToLessonFive} handleClick2={lessonContext.showLessonFive} />
        <CourseCard src="imageSix" title="Colors and Descriptions" n='6' handleClick1={lessonContext.GoToLessonSix} handleClick2={lessonContext.showLessonSix} />
      </div>
     
      <Lesson state="LessonOne" n="1" src="imageOne"/>
      <Lesson state="LessonTwo"n="2" src="imageTwo" />
      <Lesson state="LessonThree" n="3" src="imageThree" />
      <Lesson state="LessonFour" n="4" src="imageFour"/>
      <Lesson state="LessonFive" n="5"src="imageFive" />
      <Lesson state="LessonSix" n="6"src="imageSix"/>
    </>)
}