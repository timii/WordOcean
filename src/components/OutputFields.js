import "./OutputFields.css";
import PlayAudio from './PlayAudio';

function OutputFields(props) {
  // const getLanguage = () => {
  //     let options = props.options;
  //     let index = options.findIndex(x => x.value === props.lang)
  //     return options[index].label;
  // }

  return (
    <div className="output">
      {props.data.map((word) => (
        <div key="word">
          <div className="output_header">
            <div className="output_word">{word.word}</div>
            <div className="output_lang">{props.langLabel}</div>
            <div className="output_phonetics">
            {word.phonetics.map((c, h) => (
              <div className="output_phonetics-pair" key={h}>
                [{c.text}] <PlayAudio url={c.audio} />
              </div>
            ))}
            </div>
          </div>
          <hr />
          <h2>Phonetics</h2>
          <div>
            {word.phonetics.map((c, h) => (
              <p key={h}>
                TEXT: {c.text}; AUDIO: {c.audio}
              </p>
            ))}
          </div>
          <hr />
          <div>
            <h2>Meanings</h2>
            {word.meanings.map((d, i) => (
              <div key={i}>
                PARTOFSPEECH: {d.partOfSpeech}
                {d.definitions.map((e, j) => (
                  <div key={j}>
                    DEFINITION: {e.definition}; EXAMPLE: {e.example}
                    <div>
                      {/* Checks if the meaning has any synonyms, if yes print them */}
                      {e.synonyms && (
                        <div>
                          {e.synonyms.map((f, k) => (
                            <p key={k}> SYNONYM: {f}</p>
                          ))}
                        </div>
                      )}
                      <hr />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutputFields;
