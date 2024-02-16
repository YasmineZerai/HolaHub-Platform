import { useContext } from "react"
import { actualSectionContext } from "../../../../contexts/actualSectionContext"
import Post from "./forumPost"
import { forumContext } from "../../../../contexts/forumContext"
import { actualUserContext } from "../../../../contexts/actualUserContext"
import AddedPost from "./writePost"
export default function ForumSection()
{
const actual=useContext(actualSectionContext)
const posts=useContext(forumContext)
const user=useContext(actualUserContext)

    return(
      <div className={actual.actualSection==="ForumSection" ?"flex flex-wrap justify-center items-start  max-h-full max-w-full p-2 gap-5 overflow-y-scroll":"hidden"}>
         <AddedPost/>
         <div className="flex flex-col gap-5 ">
          {posts.posts.toReversed().map((item) => (
        <Post key={item.id} firstName={user.Users[item.userId].firstName} lastName={user.Users[item.userId].lastName} reactions={item.reactions} body={item.body} pfp={user.Users[item.userId].image} comments={item.comments} commentState={item.commentState} id={item.id}/>
      ))} </div>
     
   </div>)
    
}