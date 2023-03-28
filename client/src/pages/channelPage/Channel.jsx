import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';

function Channel() {
  const {user}=useAuthContext()
  const [results,setResults]=useState([])
  const [name,setName]=useState("")
  let {id}=useParams()

  useEffect(()=>{
    try{
      axios.get('http://localhost:3001/api/channels/single/'+id)
          .then((res)=>setName(res.data.name))
      if(user){
        axios.get('http://localhost:3001/api/broadcasts/channel/'+id,{headers:{Authorization:`Bearer ${user.token}`}})
        .then((res)=>{setResults(res.data)})
      }
    } catch(error){
      console.log(error)
    }
  },[user])
  return (
    <div className="bg-gradient-to-b from-amber-800 to-amber-200 dark:from-amber-900 dark:via-amber-800 dark:to-orange-900 
                pt-16 text-black dark:text-white">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4 border-b border-gray-800">
          <img className='w-14 sm:w-24 aspect-square'
            src='https://cdn.discordapp.com/attachments/772533209992134676/1089641435395010701/image.png' alt="Channel Logo" />
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>
        <div className='flex flex-col w-full'>
          <h1 className='text-4xl m-4'>Channel Broadcasts:</h1>
          <div className="grid grid-cols-4 gap-4 py-4">
            <div className="col-span-3 grid grid-cols-2 gap-4">
              {results && results.map((item)=>{
                return (  
                  <div key={item._id} className="w-80 aspect-video bg-amber-800 dark:bg-stone-800 px-4 pt-4 rounded 
                        shadow-lg">
                    <Link to={`/watch/${item.path}`}>
                      <img
                        className="w-full h-48 object-cover rounded hover:opacity-80 border border-black dark:border-white"
                        src={`https://i.ytimg.com/vi/${item.path}/mqdefault.jpg`}
                        alt="Game thumbnail"
                      />
                    </Link>
                    <div className="my-4">
                      <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.category}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;