function Card(){
    return (
        <div className="Card h-5/6 w-64 relative border-2 group bg-amber-400 dark:bg-orange-900 border-white overflow-hidden
                    rounded-md flex flex-col  py-16 px-10 text-white sm:text-amber-400 sm:dark:text-orange-900 font-extrabold">
            <h1 className="z-10 text-3xl text-white group-hover:text-amber-400 dark:group-hover:text-orange-900 
                        transition-colors">Monthly</h1>
            <h1 className="z-10 text-2xl">3.99$</h1>
            <p className="z-10 mt-2 h-24">
                perfect package for travelling and stuff!
            </p>
            <button className="z-10 mt-2 py-1 border-2 border-white sm:border-amber-400 sm:dark:border-orange-900 rounded-md 
                    hover:bg-amber-400 hover:text-white dark:hover:bg-orange-900 transition-colors ease-in-out">
                Click to subscribe</button>
        </div>
    )
}

export default Card