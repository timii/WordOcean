import "./InputFields.css";
import Select from "react-select";
import { useState } from "react";

function InputFields() {
  const [lang, setLang] = useState("");
  const [word, setWord] = useState("");

  const options = [
    { value: "en_US", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "ja", label: "Japanese" },
    { value: "ru", label: "Russian" },
    { value: "en_GB", label: "English (UK)" },
    { value: "de", label: "German" },
    { value: "it", label: "Italian" },
    { value: "ko", label: "Korean" },
    { value: "pt-BR", label: "Brazilian Portuguese" },
    { value: "ar", label: "Arabic" },
    { value: "tr", label: "Turkish" },
    { value: "hi", label: "Hindi" },
  ];

  const handleSubmit = (e) => {
    console.log("Submitted");
    console.log("lang: " + lang + ", word: " + word);
    // Prevent the site from refreshing when submitting
    e.preventDefault();
  };

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <Select
          className="select"
          options={options}
          placeholder="Language"
          onChange={(e) => setLang(e.value)}
        />
        <input
          required
          type="text"
          placeholder="word"
          className="input_word"
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <input type="submit" value="Search" className="input_search"></input>
      </form>
      <p>Language: {lang}, Word: {word}</p>
    </div>
  );
}

export default InputFields;
