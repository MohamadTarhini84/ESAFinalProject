import Details from "./watchDetails"

function Watch(){
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900">
            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 min-h-80 bg-gray-200 dark:bg-stone-800 flex flex-col mt-20 justify-between 
                            sm:justify-evenly items-center sm:gap-8 rounded-lg shadow-lg sm:p-12">
                    <video tabIndex="-1" controls
                        className="w-full sm:w-5/6 aspect-video rounded-sm border-2 border-black dark:border-white shadow-lg"
                        src="https://cdn.discordapp.com/attachments/829155749040750597/1024320124322332722/zero.mp4"/>
                    <Details/>
                </div>
            </div>
        </div>
    )
}

export default Watch