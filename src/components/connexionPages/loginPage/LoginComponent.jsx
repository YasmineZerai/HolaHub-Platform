import { useContext , useState} from "react";
import ButtonComponent from "../connexionButton";
import InputComponent from "../connexionInput";
import { actualPageContext } from "../../../contexts/actualPageContext";
import { actualUserContext } from "../../../contexts/actualUserContext";
export default function Login(){
  const NextPage=useContext(actualPageContext)
  const user=useContext(actualUserContext)
  const [isCorrect, checkPassword]=useState(true)
  const handleSubmit=(event)=>{event.preventDefault();
    user.Users.map((item,index)=>{if ((item.email===user.email)&&(item.password===user.password))
      {
        user.setFirstName(user.Users[index].firstName);
        user.setLastName(user.Users[index].lastName);
        user.setId(user.Users[index].id)
        user.getIn();
      }
    else checkPassword(false)}); 
  console.log(user.firstName)}
  
   return(
    <form className="w-full " onSubmit={handleSubmit}>
  <InputComponent forr={"email"} label={"Your Email"} type={"email"} id={"email"} placeholder={"yourname@mail.com"} value={user.email} handleInput={user.setEmail} />
  <InputComponent forr={"password"} label={"Your Password"} type={"password"} id={"password"} handleInput={user.setPassword} />
  <p className={isCorrect ?"hidden":"text-red-600 -translate-y-4"}>check the password</p>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "/>
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-white ">Remember me</label>
  </div>
  <div className="flex items-center justify-between">
 
    <ButtonComponent type={"submit"} label={"Log In"} big={"yes"}/>
    <div className="mb-2 text-lg font-medium text-white flex items-center justify-center gap-3 "> New Here ?
    <ButtonComponent type={"button"} label={"Join Us"} big={"no"} handleClick={()=>{NextPage.GoToSignUpPage()}}/></div>
  </div>
</form>
   )
}
