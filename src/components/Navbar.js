import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='nav'>
    <ul className='nav-menu'>
        <li className='login'><Link to='/login'>Login</Link></li>
        <li className='register'> <Link to='/register'>Register</Link></li>
            
    </ul>
    </div>
  )
}

export default Navbar;