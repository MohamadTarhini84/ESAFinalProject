import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';


const App = () => {

  return (

    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* signup  */}
            <Route path="/signup" element={(<Signup />)} />

            {/* signin  */}
            <Route path="/signin" element={(<Signin />)} />

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
