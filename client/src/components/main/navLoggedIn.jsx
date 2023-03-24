import { useLogout } from '../../hooks/useLogout';
import { themeContext } from '../../context/themeContext';
import { useContext } from 'react';
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function LoggedIn(){
    const {logout}=useLogout()
    const {theme,themeToggle}=useContext(themeContext)

    return (
        <div className='flex gap-4 sm:gap-16 sm:mr-10 mb-2 self-end'>
                <a href='#search_goto' className='relative group text-inherit hover:text-inherit'>
                    <SearchIcon className='group-hover:cursor-pointer'/>
                    <span className='tooltip sm:group-hover:scale-100'>Search</span>
                </a>
                <Link to='/subscribe' className='relative group text-inherit hover:text-inherit'>
                    <SubscriptionsIcon className='group-hover:cursor-pointer'/>
                    <span className='tooltip sm:group-hover:scale-100'>Subscriptions</span>
                </Link>
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
                    <span className='tooltip sm:group-hover:scale-100' onClick={logout}>Logout</span>
                </div>
            </div>
    )
}

export default LoggedIn