import LessonContent from "./lessonContent"
export default function LessonBody({tab,}){
    return(
        <div className="flex justify-center gap-3 items-center h-2/3 w-full"> 
        <div className="w-3/4 h-almostFull  flex justify-between items-center ">
            <div className="w-[49.5%] h-full p-5  bg-creamy-ish rounded-3xl flex flex-col justify-evenly items-start  ">
                <LessonContent subtitle={tab.subtitleOne} tab={tab.contentOne}/>
                <LessonContent subtitle={tab.subtitleTwo} tab={tab.contentTwo}/>
            </div>
            <div className="w-[49.5%] h-full p-5 bg-creamy-ish rounded-3xl ">
            <LessonContent subtitle={tab.subtitleThree} tab={tab.contentThree}/>
            </div>
           
        </div>
        <div className="w-2/9 h-almostFull   flex flex-col justify-between items-center "> 
            <div className="h-[49.5%] w-full  bg-peachy rounded-3xl px-5 flex flex-col justify-center">
                <h1 className="text-xl font-bold  font-sans font-comforta drop-shadow-xl text-lavender ">Practice:</h1>
                <p className="text-md font-bold  font-sans font-comforta drop-shadow-xl text-lavender "> {tab.Practice}</p>

            </div>
            <div className="h-[49.5%] w-full  bg-logoBlue rounded-3xl px-5 flex flex-col justify-center">
            <h1 className="text-xl font-bold  font-sans font-comforta drop-shadow-xl text-lavender ">Additional Resources: </h1>
            <p className="text-md font-bold  font-sans font-comforta drop-shadow-xl text-lavender "> {tab.Additional_Resources }</p>
            </div>
            </div>
            </div>

    )
}