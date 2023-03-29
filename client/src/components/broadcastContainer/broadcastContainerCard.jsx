import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Card({ item, user }) {
    const [channel, setChannel] = useState()

    useEffect(() => {
        try {
            axios.get('http://localhost:3001/api/channels/single/' + item.channel)
                .then((res) => { setChannel(res.data) })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/broadcasts/delete/${id}`, { headers: { authorization: `Bearer ${user.token}` } })
            .then(response => {
                console.log(response.data);
                alert("Broadcast deleted");
            })
            .catch(error => {
                console.log(error);
                alert("There was an error deleting the broadcast. Please try again later.");
            });
    };

    return (
        <div className="broadcast-container">
            <br />
            <div className="broadcast-live">
                Category: {item.category} <br />
                Channel: {channel && channel.name} <br />
                Path: {item.path} <br />
            </div>
            <div className="broadcast-footer">
                <div className="broadcast-title">
                    <span><b>{item.title}</b></span>
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
    )
}

export default Card