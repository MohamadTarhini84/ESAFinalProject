import "./addNewBroadcast.css";


function AddNewBroadcast() {

    return (
        <div className="add-new-broadcast-container">
            <p className="add-broadcast-title">Add New Broadcast:</p>

            <div className="add-new-broadcast-inputs">
                <div className="inputs-top-side">
                    <div className="input_text flex-css">
                        <input type="text" placeholder="broadcast Title" />
                    </div>
                    <div className="select-broadcast-category input_text flex-css">
                        <select>
                            <option value="1"> Movies </option>
                            <option value="2"> Sport </option>
                            <option value="3"> News </option>
                            <option value="4"> Documentary </option>
                            <option value="5"> Kids </option>
                            <option value="6"> Cooking </option>
                            <option value="7"> Anime </option>
                            <option value="8"> Entertainment </option>
                            <option selected hidden> broadcast Category </option>
                        </select>
                    </div>
                    <div className="select-channel input_text flex-css">
                        <select>
                            <option value="mbc"> mbc </option>
                            <option value="cnn"> CNN </option>
                            <option value="bbc"> BBC </option>
                            <option value="bein"> Be In </option>
                            <option selected hidden> Select Channel </option>
                        </select>
                    </div>
                </div>
                <div className="inputs-button-side">
                    <div className="broadcast-url input_text flex-css">
                        <input type="url" placeholder="broadcast Link" />
                    </div>
                    <div className="add-broadcast-btn flex-css">
                        <button id="add-broadcast-button">Add</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddNewBroadcast;
