import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <div className='company-name'>rekroot</div>
      <div className="navbar-items">
        <Link to="/">
          <div className='navbar-items-content'>Home</div>
        </Link>
        <Link to="/jobs">
          <div className='navbar-items-content'>Jobs</div>
        </Link>
        <Link to="/blog">
          <div className='navbar-items-content'>Blogs</div>
        </Link>
        <Link to="/contact">
          <div className='navbar-items-content'>Contact</div>
        </Link>

      </div>
      </div>

      <div className='navbar-right'>
        <div className='navbar-right-first'>
        <button className='sign-in-btn'>Sign In</button>
        <button className='dashboard-btn'>Dashboard</button>
        </div>
        <button className='post-job-btn'>Post A Job</button>
      </div>
      
    </div>
  )
}
