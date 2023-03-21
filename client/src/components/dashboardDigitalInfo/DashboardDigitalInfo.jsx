import "./dashboardDigitalInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faUserCheck, faTv, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardDigitalInfo() {

    const [users, setUsers] = useState([]);
    const [packages, setPackages] = useState([]);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await axios.get("http://localhost:3001/api/user/all");
            const packages = await axios.get("http://localhost:3001/api/packages/all");
            const channels = await axios.get("http://localhost:3001/api/channels/all");

            setUsers(allUsers.data);
            setPackages(packages.data);
            setChannels(channels.data);
        };
        fetchData();
    }, []);

    return (
        <div className="digital-info-container w-full">
            <div className="digital-info-left-side">
                <div className="digital-info-left-side-left-side">
                    <div className="digital-info-side">
                        <div className="card-top">
                            <div className="card-name">
                                Total users
                            </div>
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="card-value">
                            {users.length}
                        </div>
                    </div>
                    <div className="digital-info-side">
                        <div className="card-top">
                            <div className="card-name">
                                Packages
                            </div>
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="card-value">
                            {packages.length}
                        </div>
                    </div>
                </div>
                <div className="digital-info-left-side-right-side">
                    <div className="digital-info-side">
                        <div className="card-top">
                            <div className="card-name">
                                Subscribed Users
                            </div>
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="card-value">
                            61,638
                        </div>
                    </div>
                    <div className="digital-info-side">
                        <div className="card-top">
                            <div className="card-name">
                                Channels
                            </div>
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="card-value">
                            {channels.length}
                        </div>
                    </div>
                </div>
            </div>
            <div className="digital-info-right-side">
                <div className="total-income h-full flex flex-col justify-between">
                    <div className="card-top">
                        <div className="card-name">
                            Total incomes
                        </div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="card-value">
                        615,770$
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardDigitalInfo;
