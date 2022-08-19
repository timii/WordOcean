import "./NothingFound.css";

function NothingFound(props) {
  return (
    <div className="nothing-found">
      <h1 className="title">Sorry, we couldn't find any definitions for "<span className="title_word">{props.word}</span>" in <span className="title_lang">{props.langLabel}</span></h1>
      <h2 className="subtitle">Try another word or even another language</h2>
      <div className="puddle"></div>
    </div>
  );
}

export default NothingFound;
