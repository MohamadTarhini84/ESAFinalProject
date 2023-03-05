import "./channelContainer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


function ChannelContainer() {

    return (
        <div className="channel-container">
            <br />
            <div className="channel-logo">
                LOGO <br />
            </div>
            <div className="channel-footer">
                <div className="channel-name">
                    <span>Channel Name</span>
                </div>
                <div className="channel-buttons">

                    <button className="channel-button">
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

export default ChannelContainer;
