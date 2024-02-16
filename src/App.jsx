import { HomePage } from "./components/homePage/homePage"
import LoginPage from "./components/connexionPages/loginPage/loginPage"
import SignUp from "./components/connexionPages/signUpPage/signUpPage"
import { useState } from "react"
import { ActualPageContextProvider } from "./contexts/actualPageContext"
import MainPage from "./components/mainPage/mainPage"
import CourseSection from "./components/mainPage/sections/courseSection/courseSection"
import QuizzSection from "./components/mainPage/sections/quizzSection/quizzSection"
import ForumSection from "./components/mainPage/sections/forumSection/forumSection"
import ProfileSection from "./components/mainPage/sections/profileSection/profileSection"
import { ActualSectionContextProvider } from "./contexts/actualSectionContext"
import { ActualLessonContextProvider } from "./contexts/actualLessonContext"
import { ActualQuizzContextProvider } from "./contexts/actualQuizzContext"
import { ActualUserContextProvider } from "./contexts/actualUserContext"
import { ForumContextProvider } from "./contexts/forumContext"
// const response= await fetch('https://dummyjson.com/users');
// const Users= await response.json();
// const neededData=Users.users.map((item)=>{return {firstName: item.firstName , lastName: item.lastName , email: item.email , password : item.password , id : item. id , image : item.image }})
// console.log(neededData)
function App() {
 
  return (
  <ActualUserContextProvider>
    <ActualPageContextProvider>
    <HomePage/>
    <SignUp/>
    <LoginPage/>
    </ActualPageContextProvider>
  
  <ActualSectionContextProvider>
       <MainPage>
        <ActualLessonContextProvider>
          <CourseSection />
        </ActualLessonContextProvider>
        <ActualQuizzContextProvider>
        <QuizzSection/>
        </ActualQuizzContextProvider>
        <ForumContextProvider>
        <ForumSection/>
        </ForumContextProvider>
        <ProfileSection/>
     </MainPage>
  </ActualSectionContextProvider>
  </ActualUserContextProvider>
  )
}
export default App
