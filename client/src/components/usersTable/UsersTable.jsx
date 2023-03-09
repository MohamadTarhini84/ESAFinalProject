import "./usersTable.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


function UsersTable() {

  return (
    <div className="table-container">
      <table className="responsive-users-table">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Make Admin</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Lionel</td>
          <td>Messi</td>
          <td>leo</td>
          <td>leo@gmail.com</td>
          <td>
            <button>
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
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
          <td>Cristiano</td>
          <td>Ronaldo</td>
          <td>cr7</td>
          <td>cr7@gmail.com</td>
          <td>
            <button className="channel-button">
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Abdullah</td>
          <td>Chicken</td>
          <td>3alfahem</td>
          <td>alabdullah@gmail.com</td>
          <td>
            <button className="channel-button">
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default UsersTable;
