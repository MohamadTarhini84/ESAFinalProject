import "./dashboardBroadcast.css";
import AddNewBroadcast from '../../components/addNewBroadcast/AddNewBroadcast';
import BroadcastContainer from "../../components/broadcastContainer/BroadcastContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";


function DashboardBroadcast() {
    const { user } = useAuthContext()
    const [data, setData] = useState([]);
    const [broadcast, setBroadcast] = useState([]);

    const [query, setQuery] = useState(""); // set query to search for a broadcast

    useEffect(() => {
        if (user) {
            const fetchChannels = async () => {
                const res = await axios.get("http://localhost:3001/api/channels/all", { headers: { authorization: `Bearer ${user.token}` } });
                setData(res.data);
            };

            const fetchBroadcasts = async () => {
                const res = await axios.get("http://localhost:3001/api/broadcasts/all", { headers: { authorization: `Bearer ${user.token}` } });
                setBroadcast(res.data);
            };

            fetchChannels();
            fetchBroadcasts();
        }
    }, [user]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3001/api/broadcasts/searchBroadcast?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    return (
        <div>
            <AddNewBroadcast data={data} />
            <div className="broadcast-search">
                <input
                    type="search"
                    placeholder="Search.."
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
            </div>
            <div className="all-broadcasts">
                <BroadcastContainer broadcast={broadcast} />
            </div>
        </div>
    )
}

export default DashboardBroadcast;
