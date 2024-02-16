import QuizzQuestion from "./quizzQuestion";
import { useContext, useState } from "react";
import { actualQuizzContext } from "../../../../contexts/actualQuizzContext";
import { actualSectionContext } from "../../../../contexts/actualSectionContext";
import { actualQuestionContext } from "../../../../contexts/actualQuestionContext";


export default function Quizz({state}){
    const quizz=useContext(actualQuizzContext)
    const actual=useContext(actualSectionContext)
    const tab=quizz.QuizzTab
    const question=useContext(actualQuestionContext)
   const lastQuizzQuestion=()=>{quizz.GoBack();question.GoBack(); }
   const quitQuizz=()=>{quizz.GoBack();question.GoBack()}
    return(
        <div className={quizz.actualQuizz===state && actual.actualSection==="QuizzSection"?"w-full h-full":"hidden"}>
            <QuizzQuestion n='1' obj={tab[0]} state="QuestionOne" goToNextQuestion={question.GoToQuestionTwo} id1="Q11" id2="Q12" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='2' obj={tab[1]} state="QuestionTwo" goToNextQuestion={question.GoToQuestionThree}  id1="Q21" id2="Q22" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='3' obj={tab[2]} state="QuestionThree" goToNextQuestion={question.GoToQuestionFour}  id1="Q31" id2="Q32"  quitQuizz={quitQuizz} />
            <QuizzQuestion n='4' obj={tab[3]} state="QuestionFour" goToNextQuestion={question.GoToQuestionFive}  id1="Q41" id2="Q42" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='5' obj={tab[4]} state="QuestionFive" goToNextQuestion={question.GoToQuestionSix}  id1="Q51" id2="Q52" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='6' obj={tab[5]} state="QuestionSix" goToNextQuestion={question.GoToQuestionSeven}  id1="Q61" id2="Q62" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='7' obj={tab[6]} state="QuestionSeven" goToNextQuestion={question.GoToQuestionEight}  id1="Q71" id2="Q72" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='8' obj={tab[7]} state="QuestionEight" goToNextQuestion={question.GoToQuestionNine}  id1="Q81" id2="Q82" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='9' obj={tab[8]} state="QuestionNine" goToNextQuestion={question.GoToQuestionTen}  id1="Q91" id2="Q92" quitQuizz={quitQuizz}/>
            <QuizzQuestion n='10' obj={tab[9]} state="QuestionTen" goToNextQuestion={lastQuizzQuestion}  id1="Q01" id2="Q02" quitQuizz={quitQuizz}/>
            
            
        </div>
    )
}