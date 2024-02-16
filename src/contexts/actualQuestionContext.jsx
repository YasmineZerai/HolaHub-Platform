import { createContext, useState } from "react"
export const actualQuestionContext=createContext();
export function ActualQuestionContextProvider({children}){
   const [points, setPoints]=useState(0)
    const [actualQuestion, setActualQuestion]=useState("QuestionOne")
    const GoToQuestionTwo=()=>setActualQuestion("QuestionTwo")
    const GoToQuestionThree=()=>setActualQuestion("QuestionThree")
    const GoToQuestionFour=()=>setActualQuestion("QuestionFour")
    const GoToQuestionFive=()=>setActualQuestion("QuestionFive")
    const GoToQuestionSix=()=>setActualQuestion("QuestionSix")
    const GoToQuestionSeven=()=>setActualQuestion("QuestionSeven")
    const GoToQuestionEight=()=>setActualQuestion("QuestionEight")
    const GoToQuestionNine=()=>setActualQuestion("QuestionNine")
    const GoToQuestionTen=()=>setActualQuestion("QuestionTen")
    const GoBack=()=>setActualQuestion("QuestionOne")
   const addPoint=()=>setPoints(points+1)
   

    const store={actualQuestion, GoToQuestionTwo,  GoToQuestionThree, GoToQuestionFour, GoToQuestionFive ,GoToQuestionSix, GoBack, GoToQuestionSeven, GoToQuestionEight, GoToQuestionNine, GoToQuestionTen, points, addPoint}
    return(<actualQuestionContext.Provider value={store}>
        {children}
    </actualQuestionContext.Provider>)}