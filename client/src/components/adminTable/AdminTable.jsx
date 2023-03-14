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
            <tr key={item._id}>
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

        </tbody>

      </table>
    </div>
  )
}

export default AdminTable;
