import "./adminTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useAuthContext } from "../../hooks/useAuthContext";

const AdminTable = ({ data, refresh, i }) => {
  const {user}=useAuthContext()

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/user/${id}`,{},{headers:{authorization:`Bearer ${user.token}`}})
      .then(response => {
        console.log(response.data);
        refresh(i + 1) //update UI after deleting an item
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    axios.patch(`http://localhost:3001/api/user/removeAdmin/${id}`,{},{headers:{authorization:`Bearer ${user.token}`}})
      .then(response => {
        console.log(response.data);
        refresh(i + 1) //update UI after updating an item
      })
      .catch(error => {
        console.log(error);
      });
  };

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
                <button onClick={() => handleUpdate(item._id)}>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </button>
              </td>
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

export default AdminTable;
