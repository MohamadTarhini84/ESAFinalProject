import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from './context/themeContext';
import NavBar from './components/main/navBar';
import MFeatured from './components/main/mobileFeatured';
import Featured from './components/main/Featured';
import MSearch from './components/mobileSearch';
import Signup from './pages/signUp/signUp';
import Signin from './pages/signIn/signIn';
import EditProfile from './pages/editProfile/editProfile';

import DashboardDigitalInfo from './components/dashboardDigitalInfo/DashboardDigitalInfo';


const App = () => {
  const {theme}=useContext(themeContext)

  const Home=()=>{
    return (
      <div className={`App ${theme?"":"dark"}`}>
        <div className='w-full min-h-screen bg-amber-200 dark:bg-orange-900 flex flex-col'>
          <NavBar/>
          <MFeatured className="sm:hidden"/>
          <Featured/>
          <MSearch className="sm:hidden"/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/home' element={(<Home/>)}/>
            {/* signUp  */}
            <Route path="/signup" element={(<Signup />)} />

            {/* signIn  */}
            <Route path="/signin" element={(<Signin />)} />

            {/* editProfile  */}
            <Route path="/editprofile" element={(<EditProfile />)} />
           
            {/* test  */}
            <Route path="/test" element={(<DashboardDigitalInfo />)} />

            {/* dashboard 
            <Route path="/" element={(<Home />)} />

            pages 
            <Route path="/channels" element={<Channels />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/packages" element={<Packages />} /> */}

          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
};

export default App;
