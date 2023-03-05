import "./dashboardPackages.css";

import AddNewPackage from '../../components/addNewPackage/AddNewPackage';
import PackageContainer from '../../components/packageContainer/PackageContainer';


function DashboardPackages() {

    return (
        <div>
            <AddNewPackage />
            <PackageContainer />
        </div>
    )
}

export default DashboardPackages;
