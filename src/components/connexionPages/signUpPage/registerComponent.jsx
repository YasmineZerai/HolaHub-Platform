import { actualPageContext } from "../../../contexts/actualPageContext";
import { actualUserContext } from "../../../contexts/actualUserContext";
import ButtonComponent from "../connexionButton";
import InputComponent from "../connexionInput";
import { useContext, useState} from "react";

export default function RegisterComponent(){
  const NextPage=useContext(actualPageContext)
  const user=useContext(actualUserContext)
  const [verificationPassword, setVerificationPassword]=useState("")
  const [isCorrect, checkPassword]=useState(true)
  const handleSubmit=(event)=>{event.preventDefault();
  if (verificationPassword===user.password) {user.setId(user.Users.length); user.setUsers((prev)=>[...prev, {firstName : user.firstName , lastName : user.lastName , email: user.email , password : user.password ,id : user.Users.length }]);    user.getIn();}
else(checkPassword(false))}
    return(
<form className="w-full" onSubmit={handleSubmit}  >
  <InputComponent forr={"FirstName"} label={"First Name"} type={"text"} id={"FirstName"} placeholder={"First Name"} value={user.firstName} handleInput={user.setFirstName}/>
  <InputComponent forr={"LastName"} label={"Last Name"} type={"text"} id={"LastName"} placeholder={"Last  Name"} value={user.lastName} handleInput={user.setLastName}/>
  <InputComponent forr={"email"} label={"email"} type={"email"} id={"NewEmail"} placeholder={"yourname@mail.com"} value={user.email} handleInput={user.setEmail}/>
  <InputComponent forr={"password"} label={"Your Password"} type={"password"} id={"NewPassword"}   handleInput={user.setPassword}/>
  <div className="mb-5">
        <label htmlFor={"repeat-password"} className="block mb-2 text-lg font-medium text-white">{"Repeat Password"}</label>
        <input type={"password"} id={"repeat-password"} className="bg-gray-50 border border-gray-300 text-black text-base rounded-lg block w-full p-2.5" placeholder={"Repeat Password"} value={verificationPassword} onChange={(event)=>{setVerificationPassword(event.target.value)}}/>
        <p className={isCorrect ?"hidden":"text-red-600"}>check the password</p>
      </div>

  



  <div className="flex items-center justify-between gap-5">
  <button type={"submit"} className={"text-white bg-myBlue hover:bg-baby-boy-clothes font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center" } >Create Account</button>
 
 <div className="mb-2 text-sm font-medium text-white flex items-center justify-center gap-2 "> Already got an account ?
 <ButtonComponent type={"button"} label={"Log in"}  big={"no"} handleClick={()=>{NextPage.GoToLoginPage()}}/></div>
</div>
</form>

        )
}