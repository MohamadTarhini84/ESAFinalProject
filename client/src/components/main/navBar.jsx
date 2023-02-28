import PodcastsIcon from '@mui/icons-material/Podcasts';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect } from 'react';
import { themeContext } from '../../context/themeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar(){
    const {theme,themeToggle}=useContext(themeContext)

    return (
        <div className="navBar w-full bg-white h-12 flex justify-between items-center sm:items-end px-4 
                        dark:bg-stone-800 dark:text-white sm:px-12 sm:before:block before:bg-white dark:before:bg-stone-800">
            <PodcastsIcon className='scale-150 sm:mb-2'/>
            <div className='flex gap-4 sm:gap-16 sm:mr-10 mb-2'>
                <div className='relative group'>
                    <SearchIcon className='group-hover:cursor-pointer'/>
                    <span className='tooltip sm:group-hover:scale-100'>Search</span>
                </div>
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