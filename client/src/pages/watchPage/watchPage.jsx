import Details from "./watchDetails"
import {useParams, Navigate, Link} from'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import ReportIcon from '@mui/icons-material/Report';
import RotateRightIcon from '@mui/icons-material/RotateRight';

function Watch(){
    const [media,setMedia]=useState(null)
    const [isLoading,setLoading]=useState(true)
    const {id}=useParams()

    useEffect(()=>{
        try{
            axios.get('http://localhost:3001/api/broadcasts/single/'+id)
                .then((res)=>{setMedia(res.data);setLoading(false)})
        } catch(error){
            console.log(error)
        }
    },[])
    return (
        <div className="w-full min-h-screen bg-amber-200 dark:bg-amber-900">
            {isLoading && <RotateRightIcon className="absolute text-white m-auto left-9 right-0 animate-spin" style={{marginTop:"40vh", fontSize:"160px"}}/>}
            {!media && !isLoading && <div className="w-full h-screen flex flex-col justify-center items-center gap-10 text-red-600 dark:text-red-400">
                <ReportIcon style={{fontSize:'150px'}}/>
                <h1 className="text-4xl">Invalid Video ID</h1>
                <Link to='/home'>
                    <button className="text-gray-900 hover:text-white border border-black hover:bg-red-600 
                                hover:border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
                                dark:border-white dark:text-white dark:hover:bg-red-400">Return to Home</button>
                </Link>
            </div>}
            {media && !isLoading && <div className="w-full flex justify-center items-center">
                <div className="w-11/12 sm:min-h-80 bg-gray-200 dark:bg-stone-800 flex flex-col mt-20 justify-between 
                            sm:justify-evenly items-center sm:gap-8 rounded-lg shadow-lg sm:p-12">
                        <iframe className="w-full sm:w-9/12 aspect-video rounded-sm border-2 border-black dark:border-white shadow-lg"
                            src={"https://www.youtube.com/embed/"+media.path} title="YouTube video player" allow="accelerometer; autoplay; 
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {media && <Details broadcast={media}/>}
                </div>
            </div>}
        </div>
    )
}

export default Watch