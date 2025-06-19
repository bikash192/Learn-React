import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="container">
        <Link to="/">Home</Link> 
        <Link to="/LoginForm">Login</Link>
      
    </div>
  )
}

export default Header
