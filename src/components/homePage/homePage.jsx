import TopSection from "./topSection"
import MiddleSection from "./middleSection"
import LowerSection from "./lowerSection"
import BottomSection from "./bottomSection"
import { useContext } from "react"
import { actualPageContext } from "../../contexts/actualPageContext"
import { actualUserContext } from "../../contexts/actualUserContext"
export function HomePage(){
    const ThisPage=useContext(actualPageContext)
    const page=useContext(actualUserContext)
    return(<body className={ ThisPage.actualPage==="HomePage" && page.page==="welcomePage"? "h-fit max-w-full bg-peachy flex-col justify-center items-center" : "hidden"}>
        <TopSection/>
        <MiddleSection/>
        <LowerSection/>

    </body>)
}