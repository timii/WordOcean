import "./SynonymList.css";

function SynonymList(props) {
    return(
        <div className="synonyms_container">
            <div>synonyms</div>
            <ul className="synonyms_list">
                {props.synonyms.map((synonym, l) => (
                    <li className="synonyms_item" key={l}>{synonym}</li>
                ))}
            </ul>
        </div>
    );
}

export default SynonymList;