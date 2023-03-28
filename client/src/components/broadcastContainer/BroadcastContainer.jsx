import "./broadcastContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useAuthContext } from "../../hooks/useAuthContext";

const BroadcastContainer = ({ broadcast }) => {
    const { user } = useAuthContext()

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/broadcasts/delete/${id}`, { headers: { authorization: `Bearer ${user.token}` } })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="all-broadcasts-container">
            {broadcast.map((item) => (
                <div key={item._id} className="broadcast-container">
                    <br />
                    <div className="broadcast-live">
                        Category: {item.category} <br />
                        Channel: {item.channelName} <br />
                        Path: {item.path} <br />
                    </div>
                    <div className="broadcast-footer">
                        <div className="broadcast-title">
                            <span>{item.title}</span>
                        </div>
                        <div className="broadcast-buttons">

                            <button className="broadcast-button">
                                <FontAwesomeIcon className="fa-icon" icon={faPenToSquare}></FontAwesomeIcon>
                            </button>

                            <button onClick={() => handleDelete(item._id)}>
                                <FontAwesomeIcon className="fa-icon" icon={faTrash}></FontAwesomeIcon>
                            </button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BroadcastContainer;
