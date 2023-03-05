import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/main/navBar'
import Signup from './pages/signUp/signUp';
import Signin from './pages/signIn/signIn';
import EditProfile from './pages/editProfile/editProfile';
import Home from './pages/Home/Home';
import Watch from './pages/watchPage/watchPage';
import Subscribe from './pages/subscribe/subscribePage';
import { useContext } from 'react'
import { themeContext } from './context/themeContext';

import DashboardDigitalInfo from './components/dashboardDigitalInfo/DashboardDigitalInfo';
// import SideBar from './components/sideBar/SideBar';


const App = () => {
  const {theme}=useContext(themeContext)

  return (
    
    <div>
      <BrowserRouter>
        <div className={theme?"":"dark"}>
          <NavBar/>
          <Routes>
            <Route path='/home' element={(<Home/>)}/>
            <Route path='/watch' element={<Watch/>}/>
            <Route path='/subscribe' element={<Subscribe/>}/>
            {/* signUp  */}
            <Route path="/signup" element={(<Signup />)} />

            {/* signIn  */}
            <Route path="/signin" element={(<Signin />)} />

            {/* editProfile  */}
            <Route path="/editprofile" element={(<EditProfile />)} />

            {/* test  */}
            <Route path="/test" element={(<DashboardDigitalInfo />)} />
           

          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
};

export default App;
