import { useEffect, useState } from "react"
import Card from "./card"
import axios from "axios"

function Subscribe(){
    const [packages,setPackages]=useState([])

    useEffect(()=>{
        try{
            axios.get('http://localhost:3001/api/packages/all')
                .then((res)=>{setPackages(res.data)})
        } catch(error){
            console.log(error)
        }
    },[])

    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900 flex justify-center items-center">
            <div className="w-5/6 min-h-80 mt-20 p-10 flex justify-center items-center flex-wrap bg-gray-200 dark:bg-stone-800 gap-6 rounded-md shadow-lg">
                {packages.length==0 && <p className="text-3xl text-center">There are currently no packages available.</p>}
                {packages && packages.map((item)=>(
                    <Card key={item._id} package={item}/>
                ))
                }
            </div>
        </div>
    )
} 

export default Subscribe