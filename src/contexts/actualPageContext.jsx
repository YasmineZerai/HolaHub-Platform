import { createContext, useState } from "react"
export const actualPageContext=createContext({actualPage :"HomePage"});
export function ActualPageContextProvider({children}){
    const [actualPage, setActualPage]=useState("HomePage")
    const GoToSignUpPage=()=>setActualPage("SignUpPage")
    const GoToHomePage=()=>setActualPage("HomePage");
    const GoToLoginPage=()=>setActualPage("LoginPage")
    const store={actualPage, GoToSignUpPage, GoToHomePage, GoToLoginPage , setActualPage}
    return(<actualPageContext.Provider value={store}>
        {children}
    </actualPageContext.Provider>)
}

