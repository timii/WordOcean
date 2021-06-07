import "./InputFields.css";
import SelectLanguage from "./SelectLanguage";

function InputFields(props) {

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

  return (
    <div className="input_container">
      <form className="input" onSubmit={props.handleSubmit}>
        <SelectLanguage onLangChanged={props.onLangChanged} onLangLabelChanged={props.onLangLabelChanged} options={options} className="input_lang"/>
        <input
          required
          type="text"
          placeholder="Enter Word"
          className="input_word"
          onChange={(e) => props.onWordChanged(e.target.value)}
        ></input>
        <div className="search_container">
          <input type="submit" value="Search" className="input_search" />
          <div className="search_icon"></div>
        </div>
      </form>
    </div>
  );
}

export default InputFields;
