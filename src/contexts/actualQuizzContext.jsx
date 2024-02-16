import { createContext, useState } from "react"
export const actualQuizzContext=createContext();
import { quizzOneTab,quizzTwoTab, quizzThreeTab, quizzFourTab,quizzFiveTab,quizzSixTab } from "../content/quizzContent";
export function ActualQuizzContextProvider({children}){
   
    const [actualQuizz, setActualQuizz]=useState("NoQuizzDisplayed")
    const GoToQuizzOne=()=>setActualQuizz("QuizzOne")
    const GoToQuizzTwo=()=>setActualQuizz("QuizzTwo")
    const GoToQuizzThree=()=>setActualQuizz("QuizzThree")
    const GoToQuizzFour=()=>setActualQuizz("QuizzFour")
    const GoToQuizzFive=()=>setActualQuizz("QuizzFive")
    const GoToQuizzSix=()=>setActualQuizz("QuizzSix")
    const GoBack=()=>setActualQuizz("NoQuizzDisplayed")
    const [QuizzTab, setQuizzTab]=useState(quizzOneTab)
    const showQuizzOne=()=>setQuizzTab(quizzOneTab)
    const showQuizzTwo=()=>setQuizzTab(quizzTwoTab)
    const showQuizzThree=()=>setQuizzTab(quizzThreeTab)
    const showQuizzFour=()=>setQuizzTab(quizzFourTab)
    const showQuizzFive=()=>setQuizzTab(quizzFiveTab)
    const showQuizzSix=()=>setQuizzTab(quizzSixTab)
   

    const store={actualQuizz, GoToQuizzOne, GoToQuizzTwo,  GoToQuizzThree, GoToQuizzFour, GoToQuizzFive ,GoToQuizzSix, GoBack, QuizzTab, showQuizzOne, showQuizzTwo,showQuizzThree, showQuizzFour, showQuizzFive, showQuizzSix, }
    return(<actualQuizzContext.Provider value={store}>
        {children}
    </actualQuizzContext.Provider>)}