import "./dashboardBroadcast.css";

import AddNewBroadcast from '../../components/addNewBroadcast/AddNewBroadcast';
import BroadcastContainer from "../../components/broadcastContainer/BroadcastContainer";

function DashboardBroadcast() {

    return (
        <div>
            <AddNewBroadcast />
            <div className="broadcast-search">
                <input type="search" placeholder="Search" />
            </div>
            <div className="all-broadcasts">
            <BroadcastContainer />
            </div>
        </div>
    )
}

export default DashboardBroadcast;
