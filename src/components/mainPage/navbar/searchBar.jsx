import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { actualUserContext } from "../../../contexts/actualUserContext";
export default function SearchBar() {
  const user = useContext(actualUserContext);
  const [wantedWord, setWantedWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

      const url =
        "https://google-translate1.p.rapidapi.com/language/translate/v2";
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key":
            "d3687abe9emsha94cf9aad2a5772p1d469bjsn79c4776ba6a1",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        body: new URLSearchParams({
          q: 'apple',
          target: "es",
          source: "en",
        }),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log(wantedWord)
        
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <form
      className="flex justify-center items-center w-1/2 gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="translation"
        className="bg-gray-50 text-slate-700 text-lg rounded-full block w-2/3   p-2.5 border-4 border-myBlue focus:outline-none focus:border-4 focus:border-baby-boy-clothes"
        placeholder="Translate a word to spanish..."
        onChange={(event) => {
          setWantedWord(event.target.value);
        }}
      />
      <button type="submit">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="xl"
          style={{ color: "#9DC8D0" }}
        />
      </button>
      <p className="text-white text-lg bg-peachy py-1 px-2 rounded-sm capitalize ">
        {translatedWord}
      </p>
    </form>
  );
}
