import "./adminTable.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


function AdminTable() {

  return (
    <div className="table-container">
      <table className="responsive-admin-table">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Giga</td>
          <td>Chad</td>
          <td>giga</td>
          <td>gigachad@giga.com</td>
          <td>********</td>
          <td>
            <button>
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fadi</td>
          <td>Barakat</td>
          <td>fadib</td>
          <td>fadib@gmail.com</td>
          <td>********</td>
          <td>
            <button className="channel-button">
              <FontAwesomeIcon className="fa-icon" icon={faPenToSquare}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button>
              <FontAwesomeIcon className="fa-icon" icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AdminTable;
