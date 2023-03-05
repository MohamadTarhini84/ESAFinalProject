import SideBar from '../../components/sideBar/SideBar';
import DashboardDigitalInfo from '../../components/dashboardDigitalInfo/DashboardDigitalInfo'
import DashboardChannelSearch from '../../components/dashboardChannelSearch/DashbordChannelSearch';
import AddNewChannel from '../../components/addNewChannel/AddNewChannel'
import { useState } from 'react';

function Admin(){
    const [show, setShow]=useState('digitalInfo')

    function handleClick(value){
        setShow(value)
    }

    return (
        <div className='w-full h-full pt-24 flex'>
            <SideBar function={(value)=>handleClick(value)}/>
            <div className='flex flex-col w-full'>
                { show=='digitalInfo' && <DashboardDigitalInfo/>}
                
                { show=='channelSearch' && 
                    <div className='flex flex-col w-full h-full'>
                        <AddNewChannel/>
                        <DashboardChannelSearch/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Admin