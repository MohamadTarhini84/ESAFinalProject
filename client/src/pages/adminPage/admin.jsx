import SideBar from '../../components/sideBar/SideBar';
import DashboardHome from '../../pages/dashboardHome/DashboardHome';
import { useState } from 'react';
import DashboardUsers from '../../pages/dashboardUsers/DashboardUsers';
import DashboardAdmins from '../dashboardAdmins/DashboardAdmins';
import DashboardPackages from '../dashboardPackages/DashboardPackages';
import DashboardChannels from '../dashboardChannels/DashboardChannels';
import DashboardBroadcast from '../dashboardBroadcast/DashboardBroadcast';

function Admin(){
    const [show, setShow]=useState('dashboard')

    function handleClick(value){
        setShow(value)
    }

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