import "./adminTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus, faTrash } from '@fortawesome/free-solid-svg-icons';


const AdminTable = ({ data }) => {

  return (
    <div className="table-container">
      <table className="responsive-admin-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Remove Admin</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </button>
              </td>
              <td>
                <button>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </td>
            </tr>
          ))}

        <tr>
          <td>1</td>
          <td>Giga</td>
          <td>Chad</td>
          <td>gigachad@giga.com</td>
          <td>
            <button>
              <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
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
          <td>fadib@gmail.com</td>
          <td>
            <button className="channel-button">
              <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
        </tr>

        </tbody>

      </table>
    </div>
  )
}

export default AdminTable;
