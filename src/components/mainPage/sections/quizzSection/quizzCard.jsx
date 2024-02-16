export default function QuizzCard({src,title,n, handleClick1,handleClick2}){ 
    const handleClick=()=>{handleClick1();handleClick2()}
     return(
         <button className={n%2===1 ? "h-2/9 w-akalMennos bg-peachy flex flex-col justify-center items-center rounded-3xl transition-all duration-300 hover:scale-105 hover:bg-greenPastel hover:rotate-6 relative" : "h-2/9 w-akalMennos bg-peachy flex flex-col justify-center items-center rounded-3xl transition-all duration-300 hover:scale-105 hover:bg-greenPastel hover:-rotate-6 relative  "} type="button
         " onClick={handleClick}>
              <div className={n%2===1 ? `backImage w-3/5 h-3/5 absolute -translate-x-20 -translate-y-16 ${src}` : `backImage w-3/5 h-3/5 absolute translate-x-20 -translate-y-16 ${src}`}></div>
              <h1 className="text-2xl text-lavender font-bold capitlize  drop-shadow-xl"> <span className="text-myBlue">Quizz {n} :</span> <br/>{title}</h1>
             
         </button>
     )
 }