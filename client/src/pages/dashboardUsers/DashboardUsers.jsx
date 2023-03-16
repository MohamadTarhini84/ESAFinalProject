import './dashboardUsers.css';
import UsersTable from '../../components/usersTable/UsersTable';
import { useEffect, useState} from "react";
import axios from "axios";

function DashboardUsers() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/user/all");
            console.log(res); // log the entire response object
            setData(res.data);
        };
        fetchData();
    }, []);

    const filtered = data.filter(user => {
        return user.isAdmin == false;
    });
    console.log(filtered);

    return (
        <div>
            <div className="search-from-users-list">
                <div className="search-from-users-list-left-side">
                    <p className="table-title">List Of Users:</p>
                </div>
                <div className="search-from-users-list-left-side">
                    <input type="search" placeholder="Search" />
                </div>
            </div>
            <UsersTable data={filtered} />
        </div>
    )
}

export default DashboardUsers;