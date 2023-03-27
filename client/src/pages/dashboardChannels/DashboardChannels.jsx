import "./dashboardChannels.css";
import AddNewChannel from '../../components/addNewChannel/AddNewChannel';
import ChannelContainer from '../../components/channelContainer/ChannelContainer';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";


function DashboardChannels() {
    const {user}=useAuthContext()
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        if(user){
            const fetchData = async () => {
                const res = await axios.get("http://localhost:3001/api/channels/all",{headers:{authorization:`Bearer ${user.token}`}});
                setData(res.data);
                console.log(res.data)
            };
            fetchData();
        }
    }, [refresh,user]);

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
