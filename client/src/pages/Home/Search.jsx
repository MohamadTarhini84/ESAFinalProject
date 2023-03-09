function Search(){
    return(
        <div id="main_search" className="w-full p-6 h-auto mt-14 flex flex-col gap-4">
            <h1 className="text-2xl ml-4">Find Broadcasts: </h1>
            <div className="w-full bg-gray-100 dark:bg-stone-800 rounded-md p-4 shadow-lg">
                <div className="w-full flex justify-center gap-6 pb-6 pt-3 items-center border-b-2 ">
                    <label>Search: </label>
                    <input style={{border:"1px solid black"}} id="search_goto" className="w-1/2 p-2 text-black" type="text" placeholder="Enter Title or Genre or Channel"/>
                    <button className="border-2 border-gray-300 rounded-md py-1 px-3">Search</button>
                </div>
                <div className="flex flex-wrap justify-center h-auto gap-2 pt-10 ">
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                    <div className="h-52 min-w-40 bg-black">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search