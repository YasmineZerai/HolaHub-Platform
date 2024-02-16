import { createContext, useState } from "react"
export const actualSectionContext=createContext({actualSection :"CourseSection"});
export function ActualSectionContextProvider({children}){
    const [actualSection, setActualSection]=useState("CourseSection")
    const showQuizzSection=()=>setActualSection("QuizzSection")
    const showCourseSection=()=>setActualSection("CourseSection");
    const showForumSection=()=>setActualSection("ForumSection")
    const showProfileSection=()=>setActualSection("ProfileSection")
    const store={actualSection, showQuizzSection, showCourseSection, showForumSection,showProfileSection }
    return(<actualSectionContext.Provider value={store}>
        {children}
    </actualSectionContext.Provider>)
}