import "./dashboardChannels.css";

import AddNewChannel from '../../components/addNewChannel/AddNewChannel';
import DashboardChannelSearch from '../../components/dashboardChannelSearch/DashbordChannelSearch';

function DashboardChannels() {

    return (
        <div className='flex flex-col w-full h-full'>
            <AddNewChannel />
            <DashboardChannelSearch />
        </div>
    )
}

export default DashboardChannels;
