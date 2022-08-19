import WordList from "./WordList";
import "./OneMeaning.css";

function OneMeaning(props) {
  const meaning = props.meaning;

  return (
    <div className="meaning">
      <div className={`part_of_speech ${props.lastOne ? 'last_one' : ''}`}>
        <span className="part_of_speech_text">{meaning.partOfSpeech}</span>
      </div>
      <div className="definitions">
        {meaning.definitions.map((definitions, j) => (
          <div key={j} className="definition">
            <div className="definition_text">{definitions.definition}</div>
            {definitions.example &&
              <div className="definition_example">"{definitions.example}"</div>
            }

            <div className="word_lists">
              {/* Show synonyms array if available */}
              {definitions.synonyms.length > 0 ?
                <WordList title="synonyms" list={definitions.synonyms} />
                : meaning.synonyms.length > 0 ? <WordList title="synonyms" list={meaning.synonyms} /> : null
              }

              {/* Show antonyms array if available */}
              {definitions.antonyms.length > 0 ?
                <WordList title="antonyms" list={definitions.antonyms} />
                : meaning.antonyms.length > 0 ? <WordList title="antonyms" list={meaning.antonyms} /> : null
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneMeaning;
