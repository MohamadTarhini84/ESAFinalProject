import "./dashboardChannels.css";
import AddNewChannel from '../../components/addNewChannel/AddNewChannel';
import ChannelContainer from '../../components/channelContainer/ChannelContainer';
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardChannels() {

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/channels/all");
            setData(res.data);
        };
        fetchData();
    }, [refresh]);

    return (
        <div className='flex flex-col w-full h-full'>
            <AddNewChannel />
            <div className="channel-search">
                <input type="search" placeholder="Search" />
            </div>
            <ChannelContainer refresh={(e) => {setRefresh(e)}} i={refresh} data={data} />
        </div>
    )
}

export default DashboardChannels;
