import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
        <nav >
            <NavLink to='/' className='nav-items' >Home</NavLink>
            <NavLink to='/about'  className='nav-items'> About us</NavLink>
            <NavLink to='/users'  className='nav-items'> users</NavLink>
            <NavLink to='/profile'  className='nav-items'> Profile</NavLink>
        </nav>
        </div>
    );
}

export default Navbar;