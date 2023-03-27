import "./dashboardBroadcast.css";
import AddNewBroadcast from '../../components/addNewBroadcast/AddNewBroadcast';
import BroadcastContainer from "../../components/broadcastContainer/BroadcastContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";


function DashboardBroadcast() {
    const {user}=useAuthContext()
    const [data, setData] = useState([]);
    const [broadcast, setBroadcast] = useState([]);

    useEffect(() => {
        if(user){
            const fetchChannels = async () => {
                const res = await axios.get("http://localhost:3001/api/channels/all",{headers:{authorization:`Bearer ${user.token}`}});
                setData(res.data);
            };

            const fetchBroadcasts = async () => {
                const res = await axios.get("http://localhost:3001/api/broadcasts/all",{headers:{authorization:`Bearer ${user.token}`}});
                setBroadcast(res.data);
            };

            fetchChannels();
            fetchBroadcasts();
        }
    }, [user]);

    return (
        <div>
            <AddNewBroadcast data={data} />
            <div className="broadcast-search">
                <input type="search" placeholder="Search" />
            </div>
            <div className="all-broadcasts">
            <BroadcastContainer broadcast={broadcast} />
            </div>
        </div>
    )
}

export default DashboardBroadcast;
