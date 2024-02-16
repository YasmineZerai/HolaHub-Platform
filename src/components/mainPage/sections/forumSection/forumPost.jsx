import Commenter from "./forumComment";
import Comment from "./commented";
import { useContext } from "react";
import { actualUserContext } from "../../../../contexts/actualUserContext";
import { forumContext } from "../../../../contexts/forumContext";
export default function Post({reactions, firstName, lastName, body, pfp,comments, id}){
    const user=useContext(actualUserContext)
    const post=useContext(forumContext)
    
    return(
        <div className="flex flex-col bg-lightOrange shadow-lg rounded-lg w-[42rem] md:mx-auto  max-w-md md:max-w-2xl ">
      <div className="flex items-start px-4 py-6 ">
         <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={pfp} alt="avatar"/>
         <div className="">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-semibold text-orange-pastel -mt-1 capitalize">{firstName+" "+lastName}</h2>
             
            </div>
       
            <p className="mt-3 text-gray-700 text-md">
              {body}
            </p>
            <div className="mt-4 flex items-center">
               <div className="flex mr-2 text-gray-700 text-sm mr-3">
                  <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                   </svg>
                  <span>{reactions}</span>
               </div>
          
               <div className="flex mr-2 text-gray-700 text-sm mr-4">
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                   </svg>
                  <span>share</span>
               </div>
            </div>
         </div>
      </div>
      
      <div >
      {comments.map((item) => (
        <Comment key={item.id} firstName={user.Users[item.userId].firstName} lastName={user.Users[item.userId].lastName} body={item.body} pfp={user.Users[item.userId].image}/>
      ))}
      </div>
      <Commenter  id={id}/>
   </div>
    );
}
