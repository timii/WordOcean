import './PlayAudio.css';

function PlayAudio(props) {
    const onAudioClicked = (url) => {
        console.log("clicked");
        var audio = new Audio(url);
        audio.play();
    }

    return (
        <div onClick={onAudioClicked(props.url)} className="audioIcon"></div>
    );
}

export default PlayAudio;