import { useEffect, useState } from "react";
import InputHint from "./InputHint";
import "./SelectLanguage.css";

function SelectLanguage(props) {
  const [selectedLang, onLangSelected] = useState("");
  const [selectedLangLabel, onLangLabelSelected] = useState("Select Language");

  useEffect(() => {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach((e) => {
      e.addEventListener("click", () => {
        selected.innerHTML = e.querySelector("label").innerHTML;

        // Return language value and label to parent Component
        onLangSelected(e.querySelector("input").id);
        onLangLabelSelected(e.querySelector("label").innerHTML);

        optionsContainer.classList.remove("active");
      });
    });
  }, []);

  // useEffect that runs everytime an option is picked
  useEffect(() => {
    const selected = document.querySelector(".selected");

    // Lighter text color if no language selected
    if (selectedLangLabel === "Select Language") {
      selected.classList.add("nothing-selected");
    }

    // Darker text color if language selected
    else {
      selected.classList.remove("nothing-selected");

      // Sends language value and label to parent component
      props.onLangChanged(selectedLang);
      props.onLangLabelChanged(selectedLangLabel);
    }
  }, [props, selectedLang, selectedLangLabel]);

  return (
    <div>
      <InputHint text={props.showHint ? "Please select a language" : ""}></InputHint>

      <div className="container" >
        <div className="select-box">
          <div className="options-container">
            {props.options.map((option, i) => (
              <div className="option" key={i}>
                <input type="radio" className="radio" id={option.value} />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>

          <div className="selected">
            {selectedLangLabel}
          </div>
        </div>
      </div >
    </div>
  );
}

export default SelectLanguage;
