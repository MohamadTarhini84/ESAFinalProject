function Watch(){
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900">
            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 min-h-80 bg-gray-200 dark:bg-stone-800 flex flex-col mt-20 justify-between 
                            sm:justify-evenly items-center gap-8 rounded-sm shadow-lg">
                    <video tabIndex="-1" className="w-full sm:w-4/6 aspect-video sm:mt-12" controls 
                        src="blob:https://www.youtube.com/2b604f92-50c6-4689-8fdb-752940afc945"/>
                    <div className="w-full sm:w-4/6 h-32 bg-black mb-12">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch