import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavEjemplo = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <NavLink to='/peliculas' className='btn btn-primary'>Peliculas </NavLink>
      <NavLink to='/about' className='btn btn-primary'>About </NavLink>
      <NavLink to='/infopeliculas' className='btn btn-primary'>Info Pelis </NavLink>
    </nav>
  )
}

export default NavEjemplo
//https://jsonplaceholder.typicode.com/posts