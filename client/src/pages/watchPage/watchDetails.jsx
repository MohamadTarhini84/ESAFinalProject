import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'

function Details(props){
    const {user}=useAuthContext()
    const [channel,setChannel]=useState(null)
    const navigate=useNavigate()
    
    useEffect(()=>{
        try{
            axios.get('http://localhost:3001/api/channels/single/'+props.broadcast.channel,{headers:{Authorization:`Bearer ${user.token}`}})
                .then((res)=>{setChannel(res.data)})
        } catch(error){
            alert("An error occured: ",error)
        }
    },[])
    return (
        <div className="w-full sm:w-11/12 h-40 border sm:border-t-2 border-t-0 border-gray-400 dark:border-white bg-amber-400 
                    dark:bg-orange-900 sm:rounded-md flex justify-between items-center p-4 shadow-md dark:text-white gap-2 sm:gap-8">
            {channel && 
                <div className='h-full group relative flex justify-center items-center'>
                    <img className="max-h-full aspect-square rounded-md hover:cursor-pointer hover:scale-110 hover:rounded-xl transition-all" 
                        src={"http://localhost:3001/"+channel.logo.replace(/\\/g,"/")} onClick={()=>navigate('/home')}/>
                        <span className='tooltip sm:group-hover:scale-100 right-full z-10'>Channel</span>
                </div>}
            <div className="w-5/6 flex flex-col justify-between min-h-fit h-5/6">
                <h1 className='w-full flex flex-col sm:items-center sm:flex-row text-xs sm:text-xl capitalize'>
                    <span>Title: </span> <span className='w-5/6 bg-gray-200 dark:bg-stone-900 text-xs sm:text-lg rounded-md shadow-md p-2 '>{props.broadcast.title}</span>
                </h1>
                <h1 className='w-fit text-center text-xs sm:text-lg capitalize'>
                    Category: <span className='bg-gray-200 dark:bg-stone-900 rounded-md text-xs sm:text-lg py-1 px-4 shadow-md'>{props.broadcast.category}</span>
                </h1>
            </div>
        </div>
    )
}

export default Details