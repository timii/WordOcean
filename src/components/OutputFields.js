import "./OutputFields.css";
import PlayAudio from "./PlayAudio";
import OneMeaning from "./OneMeaning";

function OutputFields(props) {
  return (
    <div className="output">
      {props.data.map((word) => (
        <div className="output_element" key="word">
          <div className="output_header">
            <div className="output_word">{word.word}</div>
            <div className="output_lang"><span className="output_lang_text">{props.langLabel}</span></div>
            <div className="output_phonetics">
              {word.phonetics.map((phonetic, h) => {
                return phonetic.text ? (
                  <div className="output_phonetics-pair" key={h}>
                    [{phonetic.text}]
                    {(phonetic.audio.length > 0 && phonetic.sourceUrl) && <PlayAudio url={phonetic.audio} />}
                  </div>
                ) : null
              })}
            </div>
          </div>
          <div className="output_content">
            <div className="output_meanings">
              {word.meanings.map((wordMeaning, i) => i === word.meanings.length - 1
                ? <OneMeaning key={i} meaning={wordMeaning} lastOne="true" />
                : <OneMeaning key={i} meaning={wordMeaning} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutputFields;
