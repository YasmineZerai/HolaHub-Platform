export default function LessonContent({subtitle,tab})
{
    return (<div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold  font-sans font-comforta drop-shadow-xl text-yellow-warm"  >{subtitle}</h1>
        <ul>
        {tab.map((item)=>(<li className="text-lg text-slate-900">{item}</li>))}
        </ul>
    </div>)
}