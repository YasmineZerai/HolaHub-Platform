import { useContext } from "react"
import { actualSectionContext } from "../../../../contexts/actualSectionContext"
import QuizzCard from "./quizzCard"
import Quizz from "./quizz"
import { actualQuizzContext } from "../../../../contexts/actualQuizzContext"
import { ActualQuestionContextProvider } from "../../../../contexts/actualQuestionContext"

export default function QuizzSection()
{
const actual=useContext(actualSectionContext)
const quizz=useContext(actualQuizzContext)


    return(
       <>
       <div className={ actual.actualSection==="QuizzSection" && quizz.actualQuizz==="NoQuizzDisplayed" ? "w-full h-full flex" : "hidden"}>
            <div className="w-1/3 h-full font-sans font-comforta font-bold text-8xl flex flex-col justify-center items-center text-THEorange drop-shadow-2xl text-center capitalize"><h1>Dare <br/> Spanish Quizz </h1>
            <img src="pics\casual-life-3d-old-game-controller.png" className=" scale-90"></img>
            </div>
            <div className="w-2/3 h-full flex flex-wrap items-center justify-evenly py-24">
            <QuizzCard src="imageOne" title="Greetings and itroductions" n='1' handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzOne}/>        
            <QuizzCard src="imageTwo" title="Daily Activities" n='2'handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzTwo}/>     
            <QuizzCard src="imageThree" title="Food and Dining Basics" n='3' handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzThree}/>
            <QuizzCard src="imageFour" title="Travel and Directions" n='4' handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzFour}/>
            <QuizzCard src="imageFive" title="Common Phrases for Socializing" n='5' handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzFive}/>
            <QuizzCard src="imageSix" title="Colors and Descriptions" n='6' handleClick1={quizz.GoToQuizzOne} handleClick2={quizz.showQuizzSix}/>    
            </div>
            </div>
             <div className={ actual.actualSection==="QuizzSection" && quizz.actualQuizz!="NoQuizzDisplayed" ? "w-full h-full " : "hidden"}>
               <ActualQuestionContextProvider>
                <Quizz state="QuizzOne"/>
                </ActualQuestionContextProvider>
             </div>
       </>
    )
}