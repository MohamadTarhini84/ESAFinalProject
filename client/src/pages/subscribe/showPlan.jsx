function Plan(){
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-orange-900 flex justify-center items-center">
            <div className="w-5/6 min-h-80 mt-20 p-10 flex flex-col justify-center items-center flex-wrap 
                bg-gray-200 dark:bg-stone-800 gap-6 rounded-md shadow-lg text-black dark:text-white">
                <h1 className="text-3xl font-extrabold">You're already subscribed to a plan!</h1>
                <div>
                    <h1>Your plan:</h1>
                                        
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="img_avatar.png" alt="Avatar" style={{width:"300px",height:"300px"}}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1> 
                                <p>Architect & Engineer</p> 
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan