import "./dashboardChannels.css";
import AddNewChannel from '../../components/addNewChannel/AddNewChannel';
import ChannelContainer from '../../components/channelContainer/ChannelContainer';
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardChannels() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/channels/all");
            setData(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-col w-full h-full'>
            <AddNewChannel />
            <div className="channel-search">
                <input type="search" placeholder="Search" />
            </div>
            <ChannelContainer data={data} />
        </div>
    )
}

export default DashboardChannels;
