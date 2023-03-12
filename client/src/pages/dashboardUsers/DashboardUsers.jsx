import UsersTable from '../../components/usersTable/UsersTable';
import './dashboardUsers.css';

import { useEffect, useState} from "react";

function DashboardUsers() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("api/admins");
            setData(res.data);
        };
        fetchData();
    }, []);

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
            <UsersTable data={data} />
        </div>
    )
}

export default DashboardUsers;