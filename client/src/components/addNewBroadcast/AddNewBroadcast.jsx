import "./addNewBroadcast.css";
import { useState } from 'react';


const AddNewBroadcast = ({ data }) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [channel, setChannel] = useState("");
    const [link, setLink] = useState("");

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    function handleChannel(event) {
        setChannel(event.target.value);
    }

    function handleLink(event) {
        setLink(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:3001/api/broadcasts/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, category, channelName: channel, path: link })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.error(error);
                alert("There was an error adding the broadcast. Please try again later.");
            });
    }

    return (
        <div className="add-new-broadcast-container">
            <p className="add-broadcast-title">Add New Broadcast:</p>

            <form onSubmit={handleSubmit}>
                <div className="add-new-broadcast-inputs">
                    <div className="inputs-top-side">
                        <div className="input_text flex-css">
                            <input type="text" placeholder="broadcast Title" onChange={handleTitle} />
                        </div>
                        <div className="select-broadcast-category input_text flex-css">
                            <select value={category} onChange={handleCategory}>
                                <option selected hidden>Broadcast Category</option>
                                <option value="Movies">Movies</option>
                                <option value="Sport">Sport</option>
                                <option value="News">News</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Kids">Kids</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Anime">Anime</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <div className="select-channel input_text flex-css">
                            <select value={channel} onChange={handleChannel}>
                                <option selected hidden> Select Channel </option>
                                {data.map((item) => (
                                    <option value={item.name}> {item.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="inputs-button-side">
                        <div className="broadcast-url input_text flex-css">
                            <input type="text" placeholder="broadcast Link" onChange={handleLink} />
                        </div>
                        <div className="add-broadcast-btn flex-css">
                            <button id="add-broadcast-button">Add</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddNewBroadcast;
