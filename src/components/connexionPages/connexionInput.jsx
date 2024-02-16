export default function InputComponent({forr,label,type,id,placeholder, value, handleInput}){
    return(
        <div className="mb-5">
        <label htmlFor={forr} className="block mb-2 text-lg font-medium text-white">{label}</label>
        <input required type={type} id={id} className="bg-gray-50 border border-gray-300 text-black text-base rounded-lg block w-full p-2.5" placeholder={placeholder} value={value} onChange={(event)=>{handleInput(event.target.value)}}/>
      </div>
    )
}