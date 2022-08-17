import "./NothingFound.css";

function NothingFound(props) {
  return (
    <div className="nothing-found">
      <div>
        <h1>Sorry, we couldn't find any definitions for "{props.word}" in {props.langLabel}</h1>
        <h2>Try another word or even another language</h2>
      </div>
    </div>
  );
}

export default NothingFound;
