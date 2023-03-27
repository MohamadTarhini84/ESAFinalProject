import { useEffect,useState } from "react"
import axios from "axios"

function Plan(props){
    const [plan,setPackage]=useState(null)

    useEffect(()=>{
        try{
            axios.get('http://localhost:3001/api/packages/single'+props.content.package,
            {headers:{authorization:`Bearer ${user.token}`}})
                .then((res)=>{
                    setPackage(res.data)
                })
        } catch(error){
            console.log(error)
        }
    },[])
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-orange-900 flex justify-center items-center">
            <div className="w-5/6 min-h-80 mt-20 p-10 flex flex-col justify-center items-center flex-wrap 
                bg-gray-200 dark:bg-stone-800 gap-6 rounded-md shadow-lg text-black dark:text-white">
                <h1 className="text-3xl font-extrabold">You're already subscribed to a plan!</h1>
                <div className="w-1/2 flex flex-col">
                    <h1>Your plan:</h1>
                                        
                    <div className="flip-card self-center">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={`http://localhost`} alt="Avatar" style={{width:"300px",height:"300px"}}/>
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