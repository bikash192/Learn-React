import React from 'react';
import Login from "./Login";
import Home from "./Home"
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>
   
  )
}

export default App;

