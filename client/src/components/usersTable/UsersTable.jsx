import "./usersTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UsersTable = ({ data, refresh, i }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/user/${id}`)
      .then(response => {
        console.log(response.data);
        refresh(i + 1)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (id) => {
    axios.patch(`http://localhost:3001/api/user/makeAdmin/${id}`)
      .then(response => {
        console.log(response.data);
        refresh(i + 1)
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
            <th>Make Admin</th>
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
              <td>
                <button onClick={() => handleUpdate(item._id)}>
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
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

export default UsersTable;
