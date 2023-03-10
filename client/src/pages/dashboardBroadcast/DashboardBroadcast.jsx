import "./dashboardBroadcast.css";


function DashboardBroadcast() {

    return (
        <div>
            <div>
                <select>
                    <option value="1"> Movies </option>
                    <option value="2"> Sport </option>
                    <option value="3"> News </option>
                    <option value="4"> Documentary </option>
                    <option value="5"> Kids </option>
                    <option value="6"> Cooking </option>
                    <option value="7"> Anime </option>
                    <option value="8"> Entertainment </option>
                    <option selected hidden> Channel Category </option>
                </select>
            </div>
            <div>
                <input type="url" placeholder="Channel Link" />
            </div>
        </div>
    )
}

export default DashboardBroadcast;
