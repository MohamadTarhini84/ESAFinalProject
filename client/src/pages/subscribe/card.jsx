function Card(){
    return (
        <div className="Card h-5/6 w-64 relative border-2 group bg-black border-white overflow-hidden
                    rounded-md flex flex-col py-16 px-10">
            <h1 className="z-10 text-3xl text-white group-hover:text-black transition-colors">Monthly</h1>
            <h1 className="z-10 text-2xl">3.99$</h1>
            <p className="z-10 mt-2 h-24">
                perfect package for travelling and stuff!
            </p>
            <button className="z-10 mt-2 py-1 border-2 border-black rounded-md hover:border-orange-900 hover:text-orange-900">
                Click to subscribe</button>
        </div>
    )
}

export default Card