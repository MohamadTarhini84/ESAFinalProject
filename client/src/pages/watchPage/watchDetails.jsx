import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Details(props){
    const [channel,setChannel]=useState(null)
    const navigate=useNavigate()
    
    useEffect(()=>{
        try{
            axios.get('http://localhost:3001/api/channels/single/'+props.broadcast.channel)
                .then((res)=>{setChannel(res.data)})

                // console.log(channel)
        } catch(error){

        }
    },[])
    return (
        <div className="w-full sm:w-11/12 h-40 border-2 sm:border-t-2 border-t-0 border-black dark:border-white bg-amber-400 
                    dark:bg-orange-900 sm:rounded-md flex justify-between p-4 shadow-md dark:text-white">
            <div className="w-5/6 flex flex-col justify-between">
                <h1 className='w-full flex flex-col sm:items-center sm:flex-row text-s sm:text-xl capitalize'>
                    <span>Title: </span> <span className='w-5/6 bg-gray-200 rounded-md shadow-md p-2 '>{props.broadcast.title}</span>
                </h1>
                <h1 className='w-fit text-center text-xs sm:text-lg capitalize'>
                    Category: <span className='bg-gray-200 rounded-md py-1 px-4 shadow-md'>{props.broadcast.category}</span>
                </h1>
            </div>
            {channel && <img className="h-full aspect-square rounded-md hover:cursor-pointer hover:scale-110 hover:rounded-xl transition-all" 
                src={"http://localhost:3001/"+channel.logo.replace(/\\/g,"/")} onClick={()=>navigate('/home')}/>}
        </div>
    )
}

export default Details