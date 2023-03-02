import "./addNewChannel.css";


function AddNewChannel() {

    return (
        <div className="add-new-channel-container">
            <p className="add-channel-title">Add New Channel:</p>
            <div className="add-new-channel-inputs">
                {/* <form method="post"> */}
                <div className="add-new-channel-side-1" style={{ marginRight: "5px" }}>
                    <div className="input_text">
                        <input type="text" placeholder="Channel Name" />
                    </div>
                    <div>
                        <input type="file" />
                    </div>
                </div>
                <div className="add-new-channel-side-2" style={{ marginRight: "5px" }}>
                    <div className="select-channel-category input_text">
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
                    <div className="add-channel-btn">
                        <button id="add-channel-button">Add</button>
                    </div>
                </div>
                <div className="add-new-channel-side-3">
                    <div className="channel-url input_text">
                        <input type="url" placeholder="Channel Link" />
                    </div>
                </div>
                {/* </form> */}
            </div>
            <br />


            {/* <div className="top-side">
                <input type="text" placeholder="Channel Name" />
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
                <input type="url" placeholder="Channel Link" />
            </div>
            <br />
            <div className="button-side">
                <input type="file" />
                <button id="add-channel-button">Add</button>
            </div> */}
            

        </div>
    )
}

export default AddNewChannel;
