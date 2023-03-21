function Action(props){
    return (
        <div id="popup" style={{display:props.value?"fixed":"none"}} className="z-20">
            <div id="wrapper" className={props.isLoading?"lds-dual-ring":""}> 
                <svg className={`checkmark ${props.isLoading?"fixed":"checkmark__anim"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                    <circle className={`checkmark__circle ${props.isLoading?"":"checkmark__circle__anim"}`} cx="26" cy="26" r="25" fill="none"/> 
                    <path className={`checkmark__check ${props.isLoading?"":"checkmark__check__anim"}`} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            {props.isLoading && <p>Submitting...</p>}
            {!props.isLoading && <p>{props.action} successful</p>}
            {!props.isLoading && <button className="px-3 py-1 rounded-md text-white bg-orange-900" onClick={()=>props.onClick(false)}>Close</button>}
        </div>
    )
}

export default Action;