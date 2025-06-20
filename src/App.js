import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import axios from "axios";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedData) => {
    setUserDetails(updatedData);
  };

  const isUserLoggedIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/auth/is-user-logged-in",
        {},
        { withCredentials: true }
      );
      updateUserDetails(response.data.userDetails);
    } catch (error) {
      console.log("User not logged in", error);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);
   
  return (
   <Routes>
  <Route
    path="/login"
    element={
      userDetails ? (
        <Navigate to="/dashboard" />
      ) : (
        <AppLayout>
          <Login updateUserDetails={updateUserDetails} />
        </AppLayout>
      )
    }
  />

  <Route
    path="/dashboard"
    element={
      userDetails ? (
        <Dashboard userDetails={userDetails} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />

  <Route path="/" element={<Home />} />
</Routes>
);
}

export default App;