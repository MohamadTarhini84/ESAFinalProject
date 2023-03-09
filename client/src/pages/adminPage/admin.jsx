import SideBar from '../../components/sideBar/SideBar';
import DashboardHome from '../../pages/dashboardHome/DashboardHome';
import DashboardChannelSearch from '../../components/dashboardChannelSearch/DashbordChannelSearch';
import AddNewChannel from '../../components/addNewChannel/AddNewChannel';
import { useState } from 'react';
import DashboardUsers from '../../pages/dashboardUsers/DashboardUsers';
import DashboardAdmins from '../dashboardAdmins/DashboardAdmins';
import DashboardPackages from '../dashboardPackages/DashboardPackages';

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
                
                { show=='channels' && 
                    <div className='flex flex-col w-full h-full'>
                        <AddNewChannel/>
                        <DashboardChannelSearch/>
                    </div>
                }
                
                { show=='users' && <DashboardUsers />}
                
                { show=='admins' && <DashboardAdmins />}
                
                { show=='packages' && <DashboardPackages />}
            </div>
        </div>
    )
}

export default Admin;