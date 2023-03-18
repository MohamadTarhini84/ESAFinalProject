import "./allUsersTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const AllUsersTable = ({ data }) => {

  return (
    <div className="table-container">
      <table className="responsive-users-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Is Admin?</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data && data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.isAdmin ? 'Yes' : 'No'}</td> {/* Display 'Yes' if isAdmin is true, and 'No' if it's false */}
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

export default AllUsersTable;
