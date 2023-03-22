import "./packageContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const PackageContainer = ({ data }) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/packages/delete/${id}`)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      };

    return (
        <div className="all-packages-container">
            {data.map((item) => (
                <div key={item._id} className="package-container">
                    <br />
                    <div className="package-info">
                        Package info: <br />
                        Duration: {item.duration} <br />
                        Cost: {item.cost} <br />
                        Description: {item.description} <br />
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
