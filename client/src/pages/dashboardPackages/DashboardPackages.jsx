import "./dashboardPackages.css";

import AddNewPackage from '../../components/addNewPackage/AddNewPackage';
import PackageContainer from '../../components/packageContainer/PackageContainer';
import { useEffect, useState } from "react";
import axios from "axios";


function DashboardPackages() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/api/packages/all");
            console.log(res); // log the entire response object
            setData(res.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <AddNewPackage />
            <div className="dash-pack-c">
                    <PackageContainer data={data} />
            </div>
        </div>
    )
}

export default DashboardPackages;
