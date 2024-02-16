import { useContext, useState } from "react";
import { actualQuestionContext } from "../../../../contexts/actualQuestionContext";

export function Option({content,test,answers,handleClick}){
    const poinet=useContext(actualQuestionContext)
    
    return(
        <button className={answers==="hidden"? `w-2/5 h-1/2 rounded-3xl bg-peachy text-lavender drop-shadow-xl font-sans font-comforta font-bold text-xl hover:scale-105 transition-all justify-center items-center ${test==="correct"? "flex flex-col":"flex"} `: `w-2/5 h-1/2 rounded-3xl text-lavender drop-shadow-xl font-sans font-comforta font-bold text-xl hover:scale-105 transition-all ${
             test==="correct"?" bg-green-400":"bg-red-500"}`} type="button" 
             onClick={(event)=>{handleClick() }}>{content}
             </button>
    )
}