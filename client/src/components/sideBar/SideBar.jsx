import "./sideBar.css";



function SideBar(props) {

    return (
        <div className="flex flex-col w-96 h-full bg-gray-200">
            <button onClick={() => props.function("dashboard")}>
                Dashboard
            </button>
            <button onClick={() => props.function("channels")}>
                Channels
            </button>
            <button onClick={() => props.function("users")}>
                Users
            </button>
            <button onClick={() => props.function("admins")}>
                Admins
            </button>
            <button onClick={() => props.function("packages")}>
                Packages
            </button>
        </div>
    )
}

export default SideBar;
