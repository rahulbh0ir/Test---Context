import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <h2>Navbar</h2>
      <div className='opt'>
        <Link className='Home' to="/home">Home</Link>
         <Link className='About' to="/about">About</Link>
      </div>   
    </div>
  )
}

export default Navbar
