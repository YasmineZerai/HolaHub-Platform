import { createContext, useState } from "react"
export const actualLessonContext=createContext();
import { LessonOneTab,LessonTwoTab, LessonThreeTab, LessonFourTab,LessonFiveTab,LessonSixTab } from "../content/coursesContent";
export function ActualLessonContextProvider({children}){
    const [actualLesson, setActualLesson]=useState("NoLessonDisplayed")
    const GoToLessonOne=()=>setActualLesson("LessonOne")
    const GoToLessonTwo=()=>setActualLesson("LessonTwo")
    const GoToLessonThree=()=>setActualLesson("LessonThree")
    const GoToLessonFour=()=>setActualLesson("LessonFour")
    const GoToLessonFive=()=>setActualLesson("LessonFive")
    const GoToLessonSix=()=>setActualLesson("LessonSix")
    const GoBack=()=>setActualLesson("NoLessonDisplayed")
    const [lessonTab, setLessonTab]=useState(LessonOneTab)
    const showLessonOne=()=>setLessonTab(LessonOneTab)
    const showLessonTwo=()=>setLessonTab(LessonTwoTab)
    const showLessonThree=()=>setLessonTab(LessonThreeTab)
    const showLessonFour=()=>setLessonTab(LessonFourTab)
    const showLessonFive=()=>setLessonTab(LessonFiveTab)
    const showLessonSix=()=>setLessonTab(LessonSixTab)
   

    const store={actualLesson, GoToLessonOne, GoToLessonTwo,  GoToLessonThree, GoToLessonFour, GoToLessonFive ,GoToLessonSix, GoBack, lessonTab, showLessonOne, showLessonTwo,showLessonThree, showLessonFour, showLessonFive, showLessonSix }
    return(<actualLessonContext.Provider value={store}>
        {children}
    </actualLessonContext.Provider>)}
  