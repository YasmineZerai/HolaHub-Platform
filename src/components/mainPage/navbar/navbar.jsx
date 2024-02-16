import UserInfo from "./userInfo"
import SearchBar from "./searchBar"

export default function Navbar(){
    return(
    <div className="w-full h-1/10 bg-subtle flex items-center justify-between px-10">
        <SearchBar/>
        <UserInfo/>
    </div>
    )
}