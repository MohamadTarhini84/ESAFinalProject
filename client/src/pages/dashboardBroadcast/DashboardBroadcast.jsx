import "./dashboardBroadcast.css";
import AddNewBroadcast from '../../components/addNewBroadcast/AddNewBroadcast';
import BroadcastContainer from "../../components/broadcastContainer/BroadcastContainer";
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardBroadcast() {

    const [data, setData] = useState([]);
    const [broadcast, setBroadcast] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/channels/all");
            setData(res.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/broadcasts/all");
            setBroadcast(res.data);
        };
        fetchData();
    }, []);


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
