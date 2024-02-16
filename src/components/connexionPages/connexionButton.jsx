export default function ButtonComponent({type,label,big,handleClick}){
    return(
        <button type={type} className={big==="yes" ? "text-white bg-myBlue hover:bg-baby-boy-clothes font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center" : "text-white bg-myBlue hover:bg-baby-boy-clothes font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"} onClick={handleClick}>{label}</button>
  
    )
}