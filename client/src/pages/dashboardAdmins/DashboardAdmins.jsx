import './dashboardAdmins.css';

import AddNewAdmin from '../../components/addNewAdmin/AddNewAdmin';
import AdminTable from '../../components/adminTable/AdminTable';

function DashboardAdmins() {

    return (
        <div>
            <AddNewAdmin />
            <div className="search-from-users-list">
                <div className="search-from-users-list-left-side">
                    <p className="table-title">List Of Users:</p>
                </div>
                <div className="search-from-users-list-left-side">
                    <input type="search" placeholder="Search" />
                </div>
            </div>
            <AdminTable />
        </div>
    )
}

export default DashboardAdmins;