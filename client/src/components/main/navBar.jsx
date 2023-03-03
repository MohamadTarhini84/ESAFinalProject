import PodcastsIcon from '@mui/icons-material/Podcasts';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect, useState } from 'react';
import { themeContext } from '../../context/themeContext';
import { navBarContext } from '../../context/navBarContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar(){
    const {theme,themeToggle}=useContext(themeContext)
    const {isVisible}=useContext(navBarContext)
    const [show, setShow]=useState(false)

    useEffect(()=>{
        setShow(isVisible)
    },[isVisible])
 
    return (
        <div className={`navBar w-full fixed z-50 h-12 flex justify-between items-center sm:items-end px-4 
                         dark:text-white sm:px-12 sm:before:block before:hidden bg-white dark:bg-stone-800 
                         sm:bg-transparent sm:dark:bg-transparent before:bg-white before:shadow-md dark:before:bg-stone-800
                        ${show?"":"show"}`}>
            <PodcastsIcon className='scale-150 sm:mb-2'/>
            <div className='flex gap-4 sm:gap-16 sm:mr-10 mb-2'>
                <a href='#search_goto' className='relative group text-inherit hover:text-inherit'>
                    <SearchIcon className='group-hover:cursor-pointer'/>
                    <span className='tooltip sm:group-hover:scale-100'>Search</span>
                </a>
                {theme?
                    <div className='relative group'>
                        <DarkModeIcon onClick={()=>themeToggle(false)} className='group-hover:cursor-pointer'/>
                        <span className='tooltip sm:group-hover:scale-100'>Darkmode</span>
                    </div>
                    :<div className='relative group'>
                        <LightModeIcon onClick={()=>themeToggle(true)} className='group-hover:cursor-pointer'/>
                        <span className='tooltip sm:group-hover:scale-100'>Lightmode</span>
                    </div>}
                <div className='relative group'>
                    <LogoutIcon onClick={()=>console.log("ok")} className='group-hover:cursor-pointer'/>
                    <span className='tooltip sm:group-hover:scale-100'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar