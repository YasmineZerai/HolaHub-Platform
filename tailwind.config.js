/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lavender':'#E5E0FF',
        'peachy':'#FFB4B4',
        'creamy-ish':'#FBE8C7',
        'yellow-warm':'#E0AB62',
        'blueberry-milk':'#E0F4FF',
        'baby-boy-clothes':'#BFD8DC',
        'myBlue':'#9DC8D0',
        'babyPink':'#F7EAEB',
        'orange-pastel':'#E48F45',
        'subtle':'#ffeaca',
        'moreSubtle':'#ffeedf',
        'lightPink':'#FFE5E5',
        'lightBlue':'#E3F4F4',
        'lightOrange':'#FFDFAF',
        'logoOrange':'#FFB790',
        'midOrange':'#ffe4bc',
        'myBlue-lighter':'#add1d8', 
        'logoBlue':'#71A7B1',
        'lightPeachy':'#ffc1c1',
        'greenPastel':'#C7DCA7',
        'myGreen':'#BCE29E',
        'THEorange':'#F9B572',
      },
      fontFamily:{
        'Playfair':['Playfair Display'],
        'comforta':['Comfortaa']

      },
      scale :{
        '40':'0.4',
        '35':'0.35',
        '25':'0.25',
        '20':'0.20',
      },
      height:{
        'screen-150':'125vh',
        '1/10':'10%',
        '9/10':'90%',
        'akalMennos':'45%',
        'almostFull': '97%',
        '2/9':'23%',
        '27%':'27%',
        
      },
      width:{
        'almostFull': '97%',
        '2/9':'23%',
        '27%':'27%',
        'akalMennos':'45%',

      }
     
    },
  },
  plugins: [],
}

