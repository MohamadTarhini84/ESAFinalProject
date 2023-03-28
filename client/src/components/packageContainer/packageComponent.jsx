import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Package(props){
    // replace "\" with "/" to get the correct link & path
    let bgString=props.item.background?props.item.background.replace(/\\/g,"/"):"";

    let durationText = "";
    if (props.item.duration === 2629800000) {
        durationText = "1 Month";
    } else if (props.item.duration === 7889400000) {
        durationText = "3 Months";
    } else if (props.item.duration === 15778800000) {
        durationText = "6 Months";
    } else if (props.item.duration === 31556926000) {
        durationText = "1 Year";
    } else {
        durationText = "batata";
    }

    return (
        <div className="package-container" style={{backgroundImage:`url(http://localhost:3001/${bgString})`}}>
            <br />
            <div className="package-info">
                Duration: {durationText} <br />
                Cost: {props.item.cost} <br />
                Description: {props.item.description} <br />
            </div>
            <div className="package-footer">
                <div className="package-name">
                    <span>{props.item.name}</span>
                </div>
                <div className="package-buttons">
                    <button className="package-button">
                        <FontAwesomeIcon className="fa-icon" icon={faPenToSquare}></FontAwesomeIcon>
                    </button>
                    <button onClick={() => props.function(props.item._id)}>
                        <FontAwesomeIcon className="fa-icon" icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Package