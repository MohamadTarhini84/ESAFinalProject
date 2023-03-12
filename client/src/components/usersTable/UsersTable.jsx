import "./usersTable.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


const UsersTable = ({ data }) => {

  return (
    <div className="table-container">
      <table className="responsive-users-table">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Make Admin</th>
          <th>Delete</th>
        </tr>


        {/* {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
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
        ))} */}

        <tr>
          <td>1</td>
          <td>Lionel</td>
          <td>Messi</td>
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
