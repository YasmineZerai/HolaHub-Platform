import { createContext, useState, useEffect } from "react"
export const actualUserContext=createContext();
export function ActualUserContextProvider({children}){
    const [Users, setUsers]=useState([])
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [isFirstTime, setFirstTime] = useState(true);
    const [id,setId]=useState(0)
    const [page, setPage]=useState("welcomePage")
    const getIn=()=>{setPage("account")}
    const logOut=()=>{setPage("welcomePage")}
    useEffect(() => {
        if (isFirstTime) {
          const obj=(JSON.parse( (localStorage.getItem("users"))))
          setUsers(obj);
          setFirstTime(false);
          
        } else {
          localStorage.setItem("users", JSON.stringify(Tab));
          
      }
      
      }, [isFirstTime, Users,setUsers]);
      
      const store ={isFirstTime, setFirstTime, Users, setUsers, getIn, logOut , page, firstName, lastName, password, email, setFirstName, setLastName, setPassword, setEmail, id , setId}
   





      
      return (
        <actualUserContext.Provider value={store}>{children}</actualUserContext.Provider>
      );
}












const Tab=[{firstName: 'Terry', lastName: 'Medhurst', email: 'atuny0@sohu.com', password: '9uQFF1Lh', id: 0,  "image": "https://robohash.org/hicveldicta.png"},

{firstName: 'Sheldon', lastName: 'Quigley', email: 'hbingley1@plala.or.jp', password: 'CQutx25i8r', id: 1,  "image": "https://robohash.org/doloremquesintcorrupti.png" },

{firstName: 'Terrill', lastName: 'Hills', email: 'rshawe2@51.la', password: 'OWsTbMUgFc', id: 2,
"image": "https://robohash.org/consequunturautconsequatur.png",},

{firstName: 'Miles', lastName: 'Cummerata', email: 'yraigatt3@nature.com', password: 'sRQxjPfdS', id: 3,  "image": "https://robohash.org/facilisdignissimosdolore.png"},

{firstName: 'Mavis', lastName: 'Schultz', email: 'kmeus4@upenn.edu', password: 'aUTdmmmbH', id:4,  "image": "https://robohash.org/adverovelit.png",},
{firstName: "Yasmine", lastName: "Zerai", email: "zeraiyasmine7@gmail.com", password: "mypass", id: 5, "image": "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/339127970_578467024250342_6392408972841666380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g5LaMWcMoQwAX8jgQl8&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCzNJk8dq8HL_GctSfwAjmXpqaVlS9RMtjIq_SYgqZqWw&oe=658DF162"},
{firstName: 'emna', lastName: 'zerai', email: 'ammouna@gmail.com', password: 'ammouna', id: 6,  "image": "https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/339127970_578467024250342_6392408972841666380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=g5LaMWcMoQwAX8jgQl8&_nc_ht=scontent.ftun4-2.fna&oh=00_AfCzNJk8dq8HL_GctSfwAjmXpqaVlS9RMtjIq_SYgqZqWw&oe=658DF162"},

]

