import './dashboardAdmins.css';

// import AddNewAdmin from '../../components/addNewAdmin/AddNewAdmin';
import AdminTable from '../../components/adminTable/AdminTable';


import { useEffect, useState} from "react";

function DashboardAdmins() {

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
            {/* <AddNewAdmin /> */}
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
    )
}

export default DashboardAdmins;