import SynonymList from "./SynonymList";
import "./OneMeaning.css";

function OneMeaning(props) {
  const meaning = props.meaning;
  return (
    <div className="meaning">
      <div className="part_of_speech"><span className="part_of_speech_text">{meaning.partOfSpeech}</span></div>
      {meaning.definitions.map((definitions, j) => (
        <div key={j} className="definitions">
          <div className="definition">{definitions.definition}</div>
          <div className="example">"{definitions.example}"</div>
          {/* Show synonyms array if available */}
          {definitions.synonyms && (
            <SynonymList synonyms={definitions.synonyms}/>
            // <div>
            //   {definitions.synonyms.map((synonym, k) => (
            //     <p key={k}> SYNONYM: {synonym}</p>
            //   ))}
            // </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OneMeaning;
