import InputFields from "./InputFields";
import OutputFields from "./OutputFields";
import NothingFound from "./NothingFound";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

function Content() {
  const [lang, setLang] = useState("");
  const [langLabel, setLangLabel] = useState("");
  const [word, setWord] = useState("");
  const [notFoundWord, setNotFoundWord] = useState("");
  const [data, setData] = useState([]);
  const [isResponseOK, setIsResponseOK] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validInputs, setValidInputs] = useState({ validLang: false, validWord: false });
  const [showInputHint, setShowInputHint] = useState({ langHint: false, wordHint: false });

  useEffect(() => {
    if (hasSearched) {
      setShowInputHint({ langHint: !validInputs.validLang, wordHint: !validInputs.validWord })
    }

    if (validInputs.validLang && validInputs.validWord && clickedSearch) {
      setIsLoading(true);

      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      ).then((response) => {
        if (response.ok) {
          setIsResponseOK(true);
        }
        else {
          setIsResponseOK(false)
        }
        return response.json();
      })
        .then((data) => {
          setData(data);
          setIsLoading(false)
          setNotFoundWord(word)
        })
        .catch((error) => console.error("error is:", error));

      setClickedSearch(false)
    }
  }, [clickedSearch, hasSearched, isResponseOK, lang, validInputs, word])

  const handleSubmit = (e) => {
    setValidInputs({ validLang: lang.length > 0 && langLabel.length > 0, validWord: word.length > 0 })

    setHasSearched(true);
    setClickedSearch(true)

    // Prevent the site from refreshing when submitting
    e.preventDefault();
  };

  // Set output element depending on the current state
  let output
  if (isResponseOK) {
    output = <OutputFields data={data} word={word} lang={lang} langLabel={langLabel} notFoundWord={notFoundWord} />
  }
  else if (isLoading) {
    output = <LoadingScreen />
  }
  else if (hasSearched && validInputs.validLang && validInputs.validWord) {
    output = <NothingFound clickedSearch={clickedSearch} word={notFoundWord} langLabel={langLabel} />
  }

  return (
    <div className="content">
      <InputFields handleSubmit={handleSubmit} onLangChanged={setLang} onWordChanged={setWord} onLangLabelChanged={setLangLabel} showInputHint={showInputHint} />

      {output}
    </div>
  );
}

export default Content;
