import './dashboardAdmins.css';
import AdminTable from '../../components/adminTable/AdminTable';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from '../../hooks/useAuthContext';

function DashboardAdmins() {
    const { user } = useAuthContext()
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const res = await axios.get("http://localhost:3001/api/user/all", { headers: { authorization: `Bearer ${user.token}` } });
                setData(res.data);
            };
            fetchData();
        }
    }, [refresh, user]);

    // filer users data to get only admins
    const filtered = data.filter(user => {
        return user.isAdmin == true;
    });
    console.log(filtered);

    return (
        <div>
            <div className="search-from-users-list">
                <div className="search-from-users-list-left-side">
                    <p className="table-title">List Of Admins:</p>
                </div>
                <div className="search-from-users-list-left-side">
                    <input type="search" placeholder="Search" />
                </div>
            </div>
            <AdminTable refresh={(e) => { setRefresh(e) }} i={refresh} data={filtered} />
        </div>
    );

}

export default DashboardAdmins;
