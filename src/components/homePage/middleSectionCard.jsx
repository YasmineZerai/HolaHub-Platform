export default function MiddleSectionCard({image,titleCard,content,style}){
    return(
        <div className="h-full w-1/4 shadow-2xl">
            <img className={style==="normal"? "scale-50 absolute -translate-y-44": " absolute -translate-y-72 scale-40 "} src={image}></img>
             <div className="h-full w-full flex flex-col justify-end items-center bg-myBlue rounded-xl px-5 pb-12 gap-3">
                 <h1 className="text-4xl text-center font-bold text-yellow-warm ">{titleCard}</h1>
                 <p className="text-[20px] text-center font-bold text-babyPink drop-shadow-lg">{content}</p>
        </div>
        </div>
    )
}