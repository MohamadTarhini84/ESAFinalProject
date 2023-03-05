import "./sideBar.css";



function SideBar(props) {

    return (
        <div className="flex flex-col w-96 h-full bg-gray-200">
            <button onClick={()=>props.function("digitalInfo")}>
                digital info
            </button>
            <button onClick={()=>props.function("channelSearch")}>
                channel search
            </button>
        </div>
    )
}

export default SideBar;
