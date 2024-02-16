import { createContext, useState, useEffect } from "react"
export const forumContext=createContext();
export function ForumContextProvider({children}){
    const [isFirstTime, setFirstTime] = useState(true);
    const [posts, setPosts]=useState([])
   
    
    const postsTab= [
        {
            "id": 0,
            "body": "Just finished a thrilling Spanish novel and I'm hungry for more! Any recommendations for must-reads?",
            "userId": 5,
            "reactions": 2,
            "comments": [
                { userId: 3, body: "I recently read 'Don Quijote' — a classic that never disappoints! Highly recommended." },
                { userId: 2, body: "How about 'Cuentos de la Alhambra' by Washington Irving? It's a beautiful collection of Spanish stories!" },
                { userId: 4, body: "If you enjoy historical fiction, 'La Catedral del Mar' is an engaging read set in medieval Barcelona." },
            ], 
            "commentState":"hidden",
        },
        {
            "id": 1,
            "body": "Hi language enthusiasts! Can someone help me with the difference between 'por' and 'para' in Spanish? Gracias!",
            "userId": 3,
            "reactions": 4,
            "comments": [
                { userId: 5, body: "Absolutely! 'Por' is often used for cause or reason, while 'para' is more for purpose or destination. Hope that helps!" },
                { userId: 6, body: "I struggled with that too! A tip I found useful: 'para' is for destinations, 'por' is for passing through or by a place." },
                { userId: 1, body: "I recommend checking out some examples for 'por' and 'para' usage in context. It makes it much clearer!" },
            ], 
            "commentState":"hidden",
        },
        {
            "id": 2,
            "body": "Share your favorite fun or quirky Spanish phrases! Let's make learning more enjoyable for everyone! ",
            "userId": 4,
            "reactions": 5,
            "comments": [
                { userId: 2, body: "One of my favorites is 'Más vale tarde que nunca' — 'Better late than never.' So true, right?" },
                { userId: 6, body: "How about 'No hay mal que por bien no venga' — 'Every cloud has a silver lining'?" },
                { userId: 4, body: "Here's a fun one: 'Camarón que se duerme, se lo lleva la corriente' — 'The shrimp that sleeps gets carried away by the current.' Keep active, stay alert!" },
            ], 
            "commentState":"hidden",
        },
        {
            "id": 3,
            "body": "Thinking of starting a Spanish book club. Any suggestions for our first book, or anyone interested in joining? Let's make learning fun together!",
            "userId":2,
            "reactions": 11,
            "comments": [
                { userId: 5, body: "Count me in! I suggest 'La Sombra del Viento' by Carlos Ruiz Zafón. It's a captivating mystery set in post-war Barcelona." },
                { userId: 3, body: "How about 'Como agua para chocolate' by Laura Esquivel? It combines love, family, and a touch of magical realism!" },
                { userId: 1, body: "I'm interested! Maybe we can start with a shorter one, like 'El Principito' by Antoine de Saint-Exupéry?" },
            ], 
            "commentState":"hidden",
        },
        {
            "id": 4,
            "body": "Struggling with when to use 'ser' or 'estar' in Spanish? Share your questions and insights! 🤷‍♂️",
            "userId":1,
            "reactions": 1,
            "comments": [
                { userId: 4, body: "I found that 'ser' is for more permanent things like identity, while 'estar' is for temporary states or locations. Still tricky though!" },
                { userId: 5, body: "I always mix those up too! For me, 'ser' is for 'who you are,' and 'estar' is for 'how you are feeling or where you are.' Practice helps!" },
                { userId: 2, body: "One tip: 'Doctor' is for 'ser' because it's a 'D' word like 'Description' and 'Date.' 'Place' and 'Position' both start with 'P,' like 'estar.' Hope that helps!" },
            ], 
            "commentState":"hidden",
        }
    ]
    useEffect(() => {
        if (isFirstTime) {
          const obj=(JSON.parse( (localStorage.getItem("posts"))))
          setPosts(obj);
          setFirstTime(false);
          
        } else {
          localStorage.setItem("posts", JSON.stringify(posts));
          
      }
      
      }, [isFirstTime, posts,setPosts]);
    const checkItem = (id) => {
        setPosts((prev) =>
          prev.map((item) => {
            if (item.id === id) return { ...item, commentState: "displayed" };
            return item;
          })
        );
      };
      const unCheckItem = (id) => {
        setPosts((prev) =>
          prev.map((item) => {
            if (item.id === id) return { ...item, commentState: "hidden" };
            return item;
          })
        );
      };
      const store={isFirstTime ,setFirstTime, posts, setPosts, checkItem, unCheckItem}
    return (

        
        <forumContext.Provider value={store}>{children}</forumContext.Provider>
      );
}
