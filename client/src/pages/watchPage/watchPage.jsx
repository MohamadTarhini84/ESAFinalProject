import Details from "./watchDetails"

function Watch(){
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900">
            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 min-h-80 bg-gray-200 dark:bg-stone-800 flex flex-col mt-20 justify-between 
                            sm:justify-evenly items-center sm:gap-8 rounded-lg shadow-lg sm:p-12">
                        <iframe className="w-full sm:w-9/12 aspect-video rounded-sm border-2 border-black dark:border-white shadow-lg"
                            src="https://www.youtube.com/embed/MbqSMgMAzxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <Details/>
                </div>
            </div>
        </div>
    )
}

export default Watch