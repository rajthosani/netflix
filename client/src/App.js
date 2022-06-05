import logo from './logo.svg';

import Navbar from "./components/Navbar";
import Featured from './components/Featured';
import { useState } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {BrowserRouter,Route,Navigate, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

function App() {
  const {user}=useSelector(state=>state.UserReducer);
  console.log('user is',user);
  return (
    <div >
      <BrowserRouter>
            
          <Routes>
            
            <Route exact path="/" element={user.username?<Home/>:<Login/>}></Route>
            
            <Route path="/login" element={user.username?<Navigate to="/"/>:<Login/>}></Route>
            <Route path="/register" element={user.username?<Navigate to="/"/>:<Register/>}></Route>
            
            <Route path="/movies" element={<Home type="movie"/>}></Route>
            <Route path="/series" element={<Home type="series"/>}></Route>
            <Route path="/watch" element={<Watch/>}></Route>
                
        
            
          </Routes>
             
        
      
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
