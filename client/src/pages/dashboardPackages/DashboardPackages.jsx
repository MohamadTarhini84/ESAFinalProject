import "./dashboardPackages.css";

import AddNewPackage from '../../components/addNewPackage/AddNewPackage';
import PackageContainer from '../../components/packageContainer/PackageContainer';


function DashboardPackages() {

    return (
        <div>
            <AddNewPackage />
            <div className="dash-pack-c">
                    <PackageContainer />
                    <PackageContainer />
                    <PackageContainer />
            </div>
        </div>
    )
}

export default DashboardPackages;
