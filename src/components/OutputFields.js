import "./OutputFields.css";
import PlayAudio from "./PlayAudio";
import OneMeaning from "./OneMeaning";

function OutputFields(props) {
  return (
    <div className="output">
      {props.data.map((word) => (
        <div key="word">
          <div className="output_header">
            <div className="output_word">{word.word}</div>
            <div className="output_lang"><span className="output_lang_text">{props.langLabel}</span></div>
            <div className="output_phonetics">
              {word.phonetics.map((phonetic, h) => (
                <div className="output_phonetics-pair" key={h}>
                  [{phonetic.text}] <PlayAudio url={phonetic.audio} />
                </div>
              ))}
            </div>
          </div>
          <div className="output_content">
            <div className="output_meanings">
              {word.meanings.map((wordMeaning, i) => (
                <OneMeaning key={i} meaning={wordMeaning} />
              ))}
              {/* {word.meanings.map((d, i) => (
                <div key={i}>
                  PARTOFSPEECH: {d.partOfSpeech}
                  {d.definitions.map((e, j) => (
                    <div key={j}>
                      DEFINITION: {e.definition}; EXAMPLE: {e.example}
                      <div>
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
              ))} */}
            </div>
          </div>
          {/* <h2>Phonetics</h2>
          <div>
            {word.phonetics.map((c, h) => (
              <p key={h}>
                TEXT: {c.text}; AUDIO: {c.audio}
              </p>
            ))}
          </div>
          <hr /> */}
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
