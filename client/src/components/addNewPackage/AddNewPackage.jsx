import "./addNewPackage.css";


function AddNewPackage() {

    return (
        <div className="add-new-package-container">
            <p className="add-package-title">Add New Package:</p>
            <div className="add-new-package-input">
                <div className="add-new-package-input-left-side" style={{ marginRight: "5px" }}>
                    <div className="input_text">
                        <input type="text" placeholder="Package Name" />
                    </div>
                    <div className="input_text">
                        <input type="number" placeholder="Package Duration" />
                    </div>
                </div>
                <div className="add-new-package-input-right-side">
                    <div className="input_text">
                        <input type="number" placeholder="Package Price" />
                    </div>
                    <div className="add-package-btn">
                        <button id="add-package-button">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPackage;
