import { useCallback, useContext, useState } from "react"
import { forumContext } from "../../../../contexts/forumContext";
import { actualUserContext } from "../../../../contexts/actualUserContext";

export default function Commenter({id})
{
    const [theComment, setTheComment]=useState("")
    const comment=useContext(forumContext)
    const user=useContext(actualUserContext)
    const addComment=(id,tab)=>{return(tab.map((item)=>{if (item.id===id) {
        return({
            "id": item.id,
            "body": item.body,
            "userId": item.userId,
            "reactions": item.reactions,
            "comments": [...item.comments, {body:theComment, userId: user.id}], 
            "commentState":item.commentState,
        })
    }
return item}))}
    let tab=addComment(id,comment.posts)
    const handleSubmit=(event)=>{event.preventDefault(); comment.setPosts(tab);}

    return(
        
<form className="w-almostFull mb-3" onSubmit={handleSubmit}>
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center px-3 py-2 rounded-lg bg-lightOrange ">
        
        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-subtle rounded-lg border border-gray-300" placeholder="Comment..." onChange={(event)=>{setTheComment(event.target.value); }} required></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-peachy rounded-full cursor-pointer ">
            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span class="sr-only">Send message</span>
        </button>
    </div>
</form>

    )
}