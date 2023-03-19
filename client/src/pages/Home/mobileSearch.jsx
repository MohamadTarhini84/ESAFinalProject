function MSearch(props){
    return (
        <div className={`w-11/12 h-auto rounded-md flex item flex-col gap-4 mt-12 p-4 bg-gray-100 dark:bg-stone-800 dark:text-white ${props.className}`}>
            <div className="flex flex-col w-full gap-4 self-center pb-4 border-b-2">
                <h1 className='text-center text-xl m-4'>Find a broadcast:</h1>
                <div className="flex items-center">
                    <label>Search: </label>
                    <input style={{border:`2px solid gray`}} className="p-1" type="text" placeholder="Title or Genre or Channel"/>
                </div>
                <button className="border-2 border-gray-500 rounded-sm w-1/2 self-end">search</button>
            </div>
            <div className="flex flex-col items-center gap-1">
            </div>
        </div>
    )
}

export default MSearch