import "./channelContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


const ChannelContainer = ({ data }) => {

    return (
        <div className="all-channels-container">
            {data.map((item) => (
                <div key={item._id} className="channel-container">
                    <br />
                    <div className="channel-logo">
                        <img src={"http://localhost:3001/"+ item.logo } alt="Logo" />
                    </div>
                    <div className="channel-footer">
                        <div className="channel-name">
                            <span>{item.name}</span>
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
            ))}
        </div>
    )
}

export default ChannelContainer;
