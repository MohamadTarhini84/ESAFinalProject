import "./allUsersTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useAuthContext } from "../../hooks/useAuthContext";

const AllUsersTable = ({ data, refresh, batata }) => {

  const {user}=useAuthContext()

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/user/${id}`, {} ,{headers:{authorization:`Bearer ${user.token}`}})
      .then(response => {
        console.log(response.data);
        refresh(batata + 1)
      })
      .catch(error => {
        console.log(error);
      });
  };

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
              {/* Display 'Yes' if isAdmin is true, and 'No' if it's false */}
              <td>{item.isAdmin ? 'Yes' : 'No'}</td> 
              <td>
                <button onClick={() => handleDelete(item._id)}>
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
