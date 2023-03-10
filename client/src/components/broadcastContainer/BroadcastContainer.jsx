import "./broadcastContainer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


function BroadcastContainer() {

    return (
        <div className="broadcast-container">
            <br />
            <div className="broadcast-live">
            broadcast <br />
            </div>
            <div className="broadcast-footer">
                <div className="broadcast-title">
                    <span>broadcast Title</span>
                </div>
                <div className="broadcast-buttons">

                    <button className="broadcast-button">
                        <FontAwesomeIcon className="fa-icon" icon={faPenToSquare}></FontAwesomeIcon>
                    </button>

                    <button>
                        <FontAwesomeIcon className="fa-icon" icon={faTrash}></FontAwesomeIcon>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default BroadcastContainer;
