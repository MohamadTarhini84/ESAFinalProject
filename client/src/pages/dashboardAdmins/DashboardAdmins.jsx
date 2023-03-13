import './dashboardAdmins.css';
import AdminTable from '../../components/adminTable/AdminTable';
import { useEffect, useState } from "react";
import axios from "axios";

function DashboardAdmins() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const res = await axios.get("http://localhost:3001/api/user/all");
            // console.log(res.data); // log the data to the console
            // setData(res.data);
            const res = await axios.get("http://localhost:3001/api/user/all");
            console.log(res); // log the entire response object
            setData(res.data);
        };
        fetchData();
    }, []);

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
            <AdminTable data={data} />
        </div>
    );

}

export default DashboardAdmins;