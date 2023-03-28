import "./sideBar.css";


function SideBar(props) {

    return (
        <div className="flex flex-col w-96 h-full bg-gray-200
        sidebar-menu">
            <ul>
                <li className="kabse active">
                    <button onClick={() => props.function("dashboard")}>
                        Dashboard
                    </button>
                </li>
                <li className="kabse">
                    <button onClick={() => props.function("channels")}>
                        Channels
                    </button>
                </li>
                <li className="kabse">
                    <button onClick={() => props.function("broadcasts")}>
                        Broadcasts
                    </button>
                </li>
                <li className="kabse">
                    <button onClick={() => props.function("users")}>
                        Users
                    </button>
                </li>
                <li className="kabse">
                    <button onClick={() => props.function("admins")}>
                        Admins
                    </button>
                </li>
                <li className="kabse">
                    <button onClick={() => props.function("packages")}>
                        Packages
                    </button>
                </li>
            </ul>


        </div>
    )
}

export default SideBar;
