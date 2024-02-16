export default function Comment({firstName, lastName, body, pfp}){
    return(
        <div className="flex items-start px-2 py-6 pl-20 border-t-2 rounded-md scale-95 bg-subtle">
         <img className="w-8 h-8 rounded-full object-cover mr-4 shadow" src={pfp} alt="avatar"/>
         <div className="">
            <div className="flex items-center justify-between">
               <h2 className="text-md font-semibold text-orange-pastel -mt-1 capitalize">{firstName+" "+lastName}</h2>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
              {body}
            </p>
       
         </div>
      </div>
    )
}