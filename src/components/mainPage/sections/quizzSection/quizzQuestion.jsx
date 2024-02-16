import { useContext, useState } from "react";
import {Option} from "./quizzOption";
import { actualQuestionContext } from "../../../../contexts/actualQuestionContext";
import { actualQuizzContext } from "../../../../contexts/actualQuizzContext";

let verif=false
let isFirstime=true
export default function QuizzQuestion({n,obj,state,goToNextQuestion,id1,id2,quitQuizz}){
    const [clickState, setClickState]=useState("unclicked")
    const [answers,setAswers]=useState("hidden")
    const handleClick3=()=>{setClickState("clicked"); isFirstime=false} 
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const INFO_THRESHOLD = 15;
    const ALERT_THRESHOLD = 5;
    const question=useContext(actualQuestionContext)
    const quizz=useContext(actualQuizzContext)
    const COLOR_CODES = {
  info: {
    color: "green",
    threshold:INFO_THRESHOLD
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 15;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
  }
  
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById(id1)
        .classList.remove(warning.color);
      document
        .getElementById(id1)
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById(id1)
        .classList.remove(info.color);
      document
        .getElementById(id1)
        .classList.add(warning.color);
    }
    else
    {
        document
          .getElementById(id1)
          .classList.add(info.color);
      }
  }
  
  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }
  
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById(id1)
      .setAttribute("stroke-dasharray", circleDasharray);
  }
   clickState==='clicked' ? startTimer() : ()=>{}
   function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById(id2).innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
  
      if ((timeLeft === 0)) {
        clearInterval(timerInterval);
        setClickState("unclicked");
        setAswers("displayed");
       
      }
      else if (verif){
        clearInterval(timerInterval);
        setClickState("unclicked");
        setAswers("displayed");
      
        
      }
      
    }, 1000);
  }
    return (
        
        <div className={state===question.actualQuestion?"flex w-full h-full justify-center items-center gap-5": "hidden"}>
            <div className={clickState==='unclicked' && isFirstime ?"w-1/2 h-2/3  rounded-3xl bg-lightOrange flex flex-col justify-center items-center blur-sm":"w-1/2 h-2/3  rounded-3xl bg-lightOrange flex flex-col justify-center items-center"}>
                <div className="w-full h-1/3 flex flex-col justify-end items-center ">
                <h1 className="text-4xl text-myBlue font-bold capitlize text-center  drop-shadow-xl">Question {n}:</h1>
                <h1 className="text-4xl text-THEorange font-bold capitlize text-center drop-shadow-xl">{obj.question}</h1>
                </div>
                <div className="w-full h-2/3 flex flex-col justify-center items-center gap-4">
                    <div className="w-full h-1/2 flex items-end justify-center gap-4">
                        <Option content={obj.alternatives.one.answer} test={obj.alternatives.one.test}  answers={answers} handleClick={()=>{verif=true}} />
                        <Option content={obj.alternatives.two.answer} test={obj.alternatives.two.test}  answers={answers}handleClick={()=>{verif=true}}/>
                    </div>
                    <div className="w-full h-1/2 flex items-start justify-center gap-4">
                        <Option content={obj.alternatives.three.answer} test={obj.alternatives.three.test}  answers={answers} handleClick={()=>{verif=true}}/>
                        <Option content={obj.alternatives.four.answer} test={obj.alternatives.four.test}  answers={answers} handleClick={()=>{verif=true}}/>
                    </div>
                </div>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center">
            <button className="w-2/5 py-5 rounded-2xl bg-THEorange text-center font-bold font-sans font-comforta drop-shadow-xl text-white hover:scale-105"type="button" onClick={handleClick3}>Start Timer</button> <br/>
            <div className="base-timer scale-75">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
                <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
        id={id1}
        strokeDasharray="283"
        className={`base-timer__path-remaining ${remainingPathColor}`}
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id={id2} className="base-timer__label">{formatTime(timeLeft)}</span>
            </div>
            
            <div className="w-full flex justify-center items-center gap-3">
            <button className="w-1/5 py-5 rounded-2xl bg-peachy text-center font-bold font-sans font-comforta drop-shadow-xl text-white hover:scale-105 " type="button" onClick={()=>{verif=false; isFirstime=true; setClickState("unclicked");setAswers("hidden"); document
          .getElementById(id1)
          .classList.add(COLOR_CODES.info.color); document
      .getElementById(id1)
      .setAttribute("stroke-dasharray", 283);document.getElementById(id2).innerHTML="0:15"; quitQuizz()}}><span className="drop-shadow-xl">Quit Quizz</span></button>
            <button className="w-2/5 py-5 rounded-2xl bg-THEorange text-center font-bold font-sans font-comforta drop-shadow-xl text-white hover:scale-105 " type="button" onClick={()=>{verif=false; isFirstime=true; setClickState("unclicked");setAswers("hidden"); document
          .getElementById(id1)
          .classList.add(COLOR_CODES.info.color); document
      .getElementById(id1)
      .setAttribute("stroke-dasharray", 283);document.getElementById(id2).innerHTML="0:15";goToNextQuestion()}}>Next Question</button>
            </div>
            </div>
        </div>
    )
}