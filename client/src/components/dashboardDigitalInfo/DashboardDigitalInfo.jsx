import "./dashboardDigitalInfo.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faUserCheck, faTv, faSackDollar } from '@fortawesome/free-solid-svg-icons';


function DashboardDigitalInfo() {

    return (
        <div className="digital-info-container">
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
                            186784
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
                            3
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
                            157
                        </div>
                    </div>
                </div>
            </div>
            <div className="digital-info-right-side">
                <div className="total-income">
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
