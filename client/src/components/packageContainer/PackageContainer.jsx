import "./packageContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const PackageContainer = ({ data, handleDelete }) => {
    return (
        <div className="all-packages-container">
            {data.map((item) => (
                <div key={item._id} className="package-container">
                    <br />
                    <div className="package-info">
                        Duration: {item.duration} <br />
                        Cost: {item.cost} <br />
                        Description: {item.description} <br />
                    </div>
                    <div className="package-background">
                        <img className="background-css" src={"http://localhost:3001/" + item.background} alt="Background" />
                    </div>
                    <div className="package-footer">
                        <div className="package-name">
                            <span>{item.name}</span>
                        </div>
                        <div className="package-buttons">
                            <button className="package-button">
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

export default PackageContainer;
