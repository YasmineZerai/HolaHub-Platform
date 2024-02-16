import { useState, useContext } from "react";
import {  quizzQuestionContext } from "../../../../contexts/quizzQuestionContext";

// let verif=false
export default function Timer ({verif}){
  const [clickState, setClickState]=useState("unclicked")
  const handleClick1=()=>setClickState(clickState==="unclicked"?"clicked":"unclicked") 
    
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const INFO_THRESHOLD = 15;
    const ALERT_THRESHOLD = 5;
    // const stop=useContext(quizzQuestionContext)
    // console.log("im here")
    // let verif=stop.countDown
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

function onTimesUp() {
    clearInterval(timerInterval);
  }
  

  
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
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
    else
    {
        document
          .getElementById("base-timer-path-remaining")
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
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
   clickState==='clicked' ? startTimer() : ()=>{}
   function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      
      console.log(verif);
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
  
      if ((timeLeft === 0)) {
        onTimesUp();
      }
      else if (verif){
        clearInterval(timerInterval);
        setClickState("unclicked")
        console.log("gtosha");
        
      }
      
    }, 1000);
  }
  
return(
    <>
    <button type="button" onClick={handleClick1}>start timer</button> <br/>
    <button type="button" onClick={()=>{verif=true}}>stop timer</button>
    
    <div className="base-timer scale-50">
  <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g className="base-timer__circle">
      <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
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
  <span id="base-timer-label" className="base-timer__label">{formatTime(timeLeft)}</span>
</div></>)

}