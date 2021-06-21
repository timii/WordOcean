import InputFields from "./InputFields";
import OutputFields from "./OutputFields";
import NothingFound from "./NothingFound";
import { useState } from "react";

function Content() {
  const [lang, setLang] = useState("");
  const [langLabel, setLangLabel] = useState("");
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [isResponseOK, setIsResponseOK] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const callAPI = () => {
    console.log("hasSearched0: " + hasSearched);
    return fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    );
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    setHasSearched(true);

    callAPI()
      .then((response) => {
        if (response.ok) {
          setIsResponseOK(true);
        }
        return response.json();
      })
      .then((data) => {setData(data); console.log("data: " + data)})
      .catch((error) => console.log(error));
    
    console.log("lang: " + lang + ", word: " + word);

    // Prevent the site from refreshing when submitting
    e.preventDefault();
    setIsLoading(false);
  };

  return (
    <div className="content">
      <InputFields handleSubmit={handleSubmit} onLangChanged={setLang} onWordChanged={setWord} onLangLabelChanged={setLangLabel} />
      {isResponseOK ? 
        <OutputFields data={data} word={word} lang={lang} langLabel={langLabel}/>
       : 
       isLoading ? 
       <h1>Loading</h1>
       :
        hasSearched ? 
            <NothingFound data={data} word={word} langLabel={langLabel} />
           : 
            <h1>Not Searched</h1>
          
      }
      <hr />
      <p>
        Language: {lang}, Word: {word}
      </p>
    </div>
  );
}

export default Content;
