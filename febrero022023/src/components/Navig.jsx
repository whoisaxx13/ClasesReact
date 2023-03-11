import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const Navig = () => {
  const {isAuthenticated, logout } =useAuth0();
  return (
    <nav className='navbar navbar-dark bg-dark'>
      {isAuthenticated && <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>}
    </nav>
  )
}

export default Navig