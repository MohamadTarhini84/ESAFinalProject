import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Signup from './pages/signUp/signUp';
import Signin from './pages/signIn/signIn';
import EditProfile from './pages/editProfile/editProfile';


const App = () => {

  return (

    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* signUp  */}
            <Route path="/signup" element={(<Signup />)} />

            {/* signIn  */}
            <Route path="/signin" element={(<Signin />)} />

            {/* editProfile  */}
            <Route path="/editprofile" element={(<EditProfile />)} />

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
