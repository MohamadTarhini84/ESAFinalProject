import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Package(props){
    let bgString=props.item.background?props.item.background.replace(/\\/g,"/"):"";

    return (
        <div className="package-container" style={{backgroundImage:`url(http://localhost:3001/${bgString})`}}>
            <br />
            <div className="package-info">
                Duration: {props.item.duration} <br />
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