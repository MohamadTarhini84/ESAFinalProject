import "./dashboardHome.css";
import DashboardDigitalInfo from '../../components/dashboardDigitalInfo/DashboardDigitalInfo';
import AllUsersTable from '../../components/allUsersTable/AllUsersTable';
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardHome() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/user/all");
            setData(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="dashboardHome">
            <DashboardDigitalInfo />
            <p className="table-title">All Users:</p>
            <AllUsersTable data={data} className="users-table" />
        </div>
    )
}

export default DashboardHome;
