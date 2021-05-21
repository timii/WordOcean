import "./InputFields.css";
import Select from "react-select";

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

  const styles = {
    control: base => ({
      ...base,
      fontSize: "30px",
      fontFamily: "Gelasio",
      fontWeight: "500",
      height: "55px",
      "&:hover": {
        borderColor: "#FCB742",
        color: "red",
        cursor: "pointer"
      },
      "&:active": {
        borderColor: "#FCB742"
      }
    }),
    menu: base => ({
      ...base,
      color: "#282C34",
      fontFamily: "Gelasio",
      fontWeight: "500"
    })
  };

  return (
    <div className="input_container">
      <form className="input" onSubmit={props.handleSubmit}>
        <Select
          styles={styles}
          required
          className="input_lang"
          options={options}
          placeholder="Language"
          onChange={(e) => { 
            props.onLangChanged(e.value)
            // For e.g. "en_US" it returns "English"  
            props.onLangLabelChanged(options[options.findIndex(x => x.value === e.value)].label)
          }}
        />
        <input
          required
          type="text"
          placeholder="Word"
          className="input_word"
          onChange={(e) => props.onWordChanged(e.target.value)}
        ></input>
        <div className="search_container">
          <input type="submit" value="Search" className="input_search" />
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
            <path fill="currentColor" d="M18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L18.7197 19.7803ZM14.9697 16.0303L18.7197 19.7803L19.7803 18.7197L16.0303 14.9697L14.9697 16.0303Z"></path>
          </svg>
        </div>
      </form>
    </div>
  );
}

export default InputFields;
