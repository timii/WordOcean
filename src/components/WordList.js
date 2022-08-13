import "./WordList.css";

function WordList(props) {
    return (
        <div className="word_list_container">
            <div>{props.title}</div>
            <ul className="word_list_words">
                {props.list.map((word, l) => (
                    <li className="word_list_item" key={l}>{word}</li>
                ))}
            </ul>
        </div>
    );
}

export default WordList;