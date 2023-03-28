import "./dashboardPackages.css";

import AddNewPackage from '../../components/addNewPackage/AddNewPackage';
import PackageContainer from '../../components/packageContainer/PackageContainer';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

function DashboardPackages() {
    const {user}=useAuthContext()
    const [data, setData] = useState([]);

    const [query, setQuery] = useState(""); // set query to search for a package

    async function fetchData(){
        const res = await axios.get("http://localhost:3001/api/packages/forAdmin",{headers:{authorization:`Bearer ${user.token}`}});
        setData(res.data);
    };

    useEffect(() => {
        if(user){
            fetchData();
        }
    }, [user]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/packages/delete/${id}`,{headers:{authorization:`Bearer ${user.token}`}})
            .then(response => {
                console.log(response.data);
                fetchData(); // Refetch data after deleting an item
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3001/api/packages/search?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    return (
        <div>
            <AddNewPackage />
            <div className="package-search">
                <input
                    type="search"
                    placeholder="Search.."
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                />
            </div>
            <PackageContainer data={data} handleDelete={(id)=>handleDelete(id)} />
        </div>
    )
}

export default DashboardPackages;
