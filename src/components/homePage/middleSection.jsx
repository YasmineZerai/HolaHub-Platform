import MiddleSectionCard from "./middleSectionCard"
import { useState } from "react"
export default function MiddleSection(){

    return(
        <div className="h-screen-150 bg-creamy-ish flex flex-col justify-center items-center gap-y-40 ">
        
            <h1 className="text-7xl text-center font-bold text-myBlue "> We Provide</h1>
            <div className="flex justify-evenly items-center h-2/5">
          <MiddleSectionCard image="pics\casual-life-3d-young-woman-in-headset-taking-notes-in-front-of-laptop-and-showing-v-sign.png" titleCard="Captivating Learning Methods" content=" Dive into essential phrases, grammar, and cultural insights, tailored for an engaging language-learning experience." style="normal"/>
          <MiddleSectionCard image="pics\3d-casual-life-young-woman-pointing-on-new-document-button.png" titleCard="Engaging Quizzes" content=" Challenge yourself with our dynamic Spanish quizzes. From vocabulary to pronunciation, these interactive assessments are designed to reinforce your learning in a fun and effective way" style="normal"/>
          <MiddleSectionCard image="pics\casual-life-3d-young-people-with-gadgets.png" titleCard="Vibrant Language Forum" content="Join our community forum to connect with fellow Spanish learners. Share experiences, ask questions, and immerse yourself in discussions about all things Spanish." style="abnormal"/>
          </div>
          </div>
        
    )
}




//     const cardTable=[{image:"pics\casual-life-3d-young-woman-in-headset-taking-notes-in-front-of-laptop-and-showing-v-sign.png", 
//     titleCard  : "Captivating Learning Methods", 
//     content : " Dive into essential phrases, grammar, and cultural insights, tailored for an engaging language-learning experience.", id:1
// }, {
//         image:"pics\x03d-casual-life-young-woman-pointing-on-new-document-button.png",
//         titleCard:"Engaging Quizzes",
//         content:"Challenge yourself with our dynamic Spanish quizzes. From vocabulary to pronunciation, these interactive assessments are designed to reinforce your learning in a fun and effective way", id:2
//     },{
//         image:"pics\casual-life-3d-young-people-with-gadgets.png",
//         titleCard:"Vibrant Language Forum",
//         content:"Join our community forum to connect with fellow Spanish learners. Share experiences, ask questions, and immerse yourself in discussions about all things Spanish. ¡Bienvenidos a la comunidad! (Welcome to the community!)", id:3
//     },]