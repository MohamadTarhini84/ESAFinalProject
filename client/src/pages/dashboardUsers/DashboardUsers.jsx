import UsersTable from '../../components/usersTable/UsersTable';
import './dashboardUsers.css';

function DashboardUsers() {

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
            <UsersTable />
        </div>
    )
}

export default DashboardUsers;