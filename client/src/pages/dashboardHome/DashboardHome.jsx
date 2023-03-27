import "./dashboardHome.css";
import DashboardDigitalInfo from '../../components/dashboardDigitalInfo/DashboardDigitalInfo';
import AllUsersTable from '../../components/allUsersTable/AllUsersTable';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

function DashboardHome() {

    const {user}=useAuthContext()
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        if(user){
            const fetchData = async () => {
                const res = await axios.get("http://localhost:3001/api/user/all",{headers:{authorization:`Bearer ${user.token}`}});
                setData(res.data);
            };
            fetchData();
        }
    }, [refresh,user]);

    return (
        <div className="dashboardHome">
            <DashboardDigitalInfo />
            <p className="table-title">All Users:</p>
            <AllUsersTable refresh={(e) => {setRefresh(e)}} batata={refresh} data={data} className="users-table" />
        </div>
    )
}

export default DashboardHome;
