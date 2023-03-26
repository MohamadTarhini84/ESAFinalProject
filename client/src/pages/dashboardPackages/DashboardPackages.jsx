import "./dashboardPackages.css";

import AddNewPackage from '../../components/addNewPackage/AddNewPackage';
import PackageContainer from '../../components/packageContainer/PackageContainer';
import { useEffect, useState } from "react";
import axios from "axios";

function DashboardPackages() {
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("http://localhost:3001/api/packages/all");
        setData(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/packages/delete/${id}`)
            .then(response => {
                console.log(response.data);
                fetchData(); // Refetch data after deleting an item
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <AddNewPackage />
            <PackageContainer data={data} handleDelete={handleDelete} />
        </div>
    )
}

export default DashboardPackages;
