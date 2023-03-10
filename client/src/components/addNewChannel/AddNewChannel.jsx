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
                </div>
                <div className="inputs-button-side">
                    <div className="flex-css">
                        <input class="custom-file-input" type="file" />
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
