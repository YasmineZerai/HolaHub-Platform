import { useContext } from "react"
import { actualSectionContext } from "../../../contexts/actualSectionContext"

export default function SideBarItem({label,src,lock,handleClick,section}){
    const actual=useContext(actualSectionContext)
    let bol=actual.actualSection!=section

    return(
        <button type="button" className={ bol ? "text-white bg-peachy hover:bg-gradient-to-br  hover:from-orange-pastel hover:to-logoOrange  font-bold rounded-lg text-2xl pl-40 py-2.5  h-16 sideBarButton font-sans font-comforta flex justify-start items-center hover:scale-105 transition-all duration-300": "text-white bg-gradient-to-br  from-orange-pastel to-logoOrange  font-bold rounded-lg text-2xl pl-40 py-2.5  h-16 sideBarButton font-sans font-comforta flex justify-start items-center   scale-105 transition-all duration-300" } onClick={handleClick}>
        
        <div>{label}</div>
        <img src={src} className={lock ? " scale-25 -translate-x-64 ": "scale-35 -translate-x-64"}></img>
        </button>
    )
}