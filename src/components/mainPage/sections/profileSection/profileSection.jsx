import { useContext } from "react"
import { actualSectionContext } from "../../../../contexts/actualSectionContext"
import { actualUserContext } from "../../../../contexts/actualUserContext"

export default function ProfileSection()
{
const actual=useContext(actualSectionContext)
const user=useContext(actualUserContext)

    return(<div className={actual.actualSection==="ProfileSection"?"flex  items-center justify-center w-full h-full gap-28":"hidden"}>
        <div className="w-akalMennos h-almostFull flex-col items-end justify-end bg-lightOrange pt-14 rounded-lg px-10  ">
        <div className=" h-1/3 w-9/10 flex justify-end mb-14">
        <div class="bg-cover bg-center w-1/2 h-full rounded-full " style={{backgroundImage : "url('https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/339127970_578467024250342_6392408972841666380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g5LaMWcMoQwAX8jgQl8&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCzNJk8dq8HL_GctSfwAjmXpqaVlS9RMtjIq_SYgqZqWw&oe=658DF162')"}}></div></div>
        <ul className="mb-20">
        <li><h1 className=" text-3xl font-bold text-myBlue mb-2 ">First Name: <span className=" text-lightBlue">{user.firstName}</span></h1></li>
        <li><h1 className=" text-3xl font-bold text-myBlue mb-2">Last Name: <span className=" text-lightBlue">{user.lastName}</span></h1></li>
        <li><h1 className=" text-3xl font-bold text-myBlue mb-">Email: <span className=" text-lightBlue">{user.email}</span></h1></li>
        </ul>
        <div className="w-9/10">
        <h1 className=" text-3xl font-bold text-myBlue mb-2 ">Progress:</h1>
        <div className="w-full h-4 bg-gray-700  rounded-full ">
        <div className="h-4 bg-myGreen rounded-full w-2/3" ></div>
        </div>
</div>  
        </div>
       <img className=" scale-75" src="pics\3d-casual-life-young-man-smiling-and-holding-smartphone.png"></img>
    </div>)
}