import "./NothingFound.css";

function NothingFound(props) {
  return (
    <div>
      {props.data && (
        <div>
          <h1>No Definitions Found for "{props.word}" in {props.langLabel} :( </h1>
          <h2>Sorry, we couldn't find definitions for the word you were looking for</h2>
        </div>
      )}
    </div>
  );
}

export default NothingFound;
