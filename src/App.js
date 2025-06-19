import React from 'react';
import Login from "./Login";
import Home from "./Home"
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LoginForm from './LoginForm';
import Dashboard from './pages/Dashboard';

function App(){
  return(
    // <Routes>
    //   <Route path="/" element={<AppLayout><Home/></AppLayout>} />
    //   <Route path="/Login" element={<AppLayout><Login/></AppLayout>} />
    //   </Routes>
   <Routes>
    <Route path="/" element={<AppLayout>Home</AppLayout>}/>
    <Route path="/LoginForm" element={<LoginForm/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
   </Routes>
   
   
  )
}

export default App;

