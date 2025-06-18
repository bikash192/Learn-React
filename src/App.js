import React from 'react';
import Login from "./Login";
import Home from "./Home"
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

function App(){
  return(
    <Routes>
      <Route path="/" element={<AppLayout><Home/></AppLayout>} />
      <Route path="/Login" element={<AppLayout><Login/></AppLayout>} />
      </Routes>
   
  )
}

export default App;

