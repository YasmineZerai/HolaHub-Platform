
export default function CourseCard({src,title,n, handleClick1, handleClick2}){
   const handleClick= ()=>{ handleClick1(); handleClick2() }
    
    
    return(
        <button className="w-1/4 h-akalMennos bg-myBlue flex flex-col justify-center items-center rounded-3xl transition-all duration-300 hover:scale-105 hover:bg-myBlue-lighter" type="button
        " onClick={handleClick}>
             <div className={`backImage w-3/5 h-3/5 ${src}`}></div>
             <h1 className="text-xl text-lavender font-bold capitlize  drop-shadow-xl">Lesson {n} : {title}</h1>
            
        </button>
    )
}