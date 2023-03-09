import "./dashboardHome.css";

import DashboardDigitalInfo from '../../components/dashboardDigitalInfo/DashboardDigitalInfo'
import UsersTable from '../../components/usersTable/UsersTable'

function DashboardHome() {

    return (
        <div className="dashboardHome">
            <DashboardDigitalInfo />
            <p className="table-title">List Of Users:</p>
            <UsersTable className="users-table" />
        </div>
    )
}

export default DashboardHome;
