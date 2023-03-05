import "./packageContainer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


function PackageContainer() {

    return (
        <div className="package-container">
            <br />
            <div className="package-info">
                {/* <Package /> */}
                Package info: <br />
                time <br />
                price <br />
            </div>
            <div className="package-footer">
                <div className="package-name">
                    <span>Package Name</span>
                </div>
                <div className="package-buttons">

                    <button className="package-button">
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

export default PackageContainer;
