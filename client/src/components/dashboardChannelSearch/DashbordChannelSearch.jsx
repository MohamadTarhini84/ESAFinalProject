import "./dashboardChannelSearch.css";

import ChannelContainer from '../channelContainer/ChannelContainer';


function DashboardChannelSearch() {

    return (
        <div className="search-channel-container">
            <div className="channel-search">
            <input type="search" placeholder="Search" />
            </div>
            <div className="all-channels">
               <ChannelContainer />
               <ChannelContainer />
               <ChannelContainer />
            </div>
        </div>
    )
}

export default DashboardChannelSearch;
