import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/sideBar/SideBar';
import DashboardHome from '../../pages/dashboardHome/DashboardHome';
import DashboardUsers from '../../pages/dashboardUsers/DashboardUsers';
import DashboardAdmins from '../dashboardAdmins/DashboardAdmins';
import DashboardPackages from '../dashboardPackages/DashboardPackages';
import DashboardChannels from '../dashboardChannels/DashboardChannels';
import DashboardBroadcast from '../dashboardBroadcast/DashboardBroadcast';
import axios from 'axios';

function Admin(){
    const {user}=useAuthContext()
    const [show, setShow]=useState('dashboard')
    const navigate=useNavigate()

    function handleClick(value){
        setShow(value)
    }

    useEffect(()=>{
        if(user){
            axios.get('http://localhost:3001/api/user/single',{headers:{Authorization:`Bearer ${user.token}`}})
                .then((res)=>{
                    if(!res.data){
                        navigate('/home')
                    }
                })
        } else{
            navigate('/home')
        }
    },[user])

    return (
        <div className='w-full h-full pt-24 flex'>
            <SideBar function={(value)=>handleClick(value)}/>
            <div className='flex flex-col w-full'>
                { show=='dashboard' && <DashboardHome/>}
                
                { show=='channels' && <DashboardChannels />}
                
                { show=='broadcasts' && <DashboardBroadcast />}
                
                { show=='users' && <DashboardUsers />}
                
                { show=='admins' && <DashboardAdmins />}
                
                { show=='packages' && <DashboardPackages />}
            </div>
        </div>
    )
}

export default Admin;