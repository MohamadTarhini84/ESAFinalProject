import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/main/navBar'
import Signup from './pages/signUp/signUp';
import Signin from './pages/signIn/signIn';
import EditProfile from './pages/editProfile/editProfile';
import Home from './pages/Home/Home';
import Watch from './pages/watchPage/watchPage';
import Subscribe from './pages/subscribe/subscribePage';
import Footer from './components/main/footer';
import { useContext } from 'react'
import { themeContext } from './context/themeContext';
import Admin from './pages/adminPage/admin';
import { AuthContextProvider } from './context/AuthContext';
import SideBar from './components/sideBar/SideBar';

const App = () => {
  const {theme}=useContext(themeContext)

  return (

    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <div className={theme ? "" : "dark"}>

            <Routes>
              <Route path="/home" element={<div><NavBar /><Home /></div>} />
              <Route path="/watch/:id" element={<div><NavBar /><Watch/></div>} />
              <Route path="/subscribe" element={<div><NavBar /><Subscribe/></div>} />
              {/* signUp  */}
              <Route path="/signup" element={<Signup />} />

              {/* signIn  */}
              <Route path="/signin" element={<Signin />} />

              {/* editProfile  */}
              <Route path="/editprofile" element={<EditProfile />} />

              {/* admin  */}
              <Route path="/admin" element={<div><NavBar /><Admin/></div>} />

              <Route path="*" element={<Navigate to="/home" />} />

              {/* test */}
              <Route path="/test" element={<SideBar />} />
            </Routes>
            
            {window.location.pathname === "/admin" ? null : (
              <Footer />
            )}
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </div>

  );
};

export default App;
