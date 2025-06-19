import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container text-center">
        <h1>
            Welcome to Home Page
             <Link to="/LoginForm" className="btn btn-primary">Go to Login</Link>
        </h1>
      
    </div>
  )
}

export default Home
