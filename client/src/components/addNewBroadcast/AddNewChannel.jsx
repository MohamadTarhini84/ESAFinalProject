import "./addNewChannel.css";


function AddNewChannel() {

    return (
        <div className="add-new-channel-container">
            <p className="add-channel-title">Add New Channel:</p>


            <div className="add-new-channel-inputs">
                <div className="inputs-top-side">
                    <div className="input_text flex-css">
                        <input type="text" placeholder="Channel Name" />
                    </div>
                    <div className="select-channel-category input_text flex-css">
                        <select>
                            <option value="1"> Movies </option>
                            <option value="2"> Sport </option>
                            <option value="3"> News </option>
                            <option value="4"> Documentary </option>
                            <option value="5"> Kids </option>
                            <option value="6"> Cooking </option>
                            <option value="7"> Anime </option>
                            <option value="8"> Entertainment </option>
                            <option selected hidden> Channel Category </option>
                        </select>
                    </div>
                    <div className="channel-url input_text flex-css">
                        <input type="url" placeholder="Channel Link" />
                    </div>
                </div>
                <div className="inputs-button-side">
                    <div className="flex-css">
                    <input class="custom-file-input" type="file"/>
                    </div>
                    <div className="add-channel-btn flex-css">
                        <button id="add-channel-button">Add</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddNewChannel;
