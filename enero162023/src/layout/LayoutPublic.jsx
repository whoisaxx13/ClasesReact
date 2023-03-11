import React from 'react'
import { Outlet } from 'react-router-dom'
import NavEjemplo from '../components/NavEjemplo'

const LayoutPublic = () => {
  return (
    <>
      <NavEjemplo />
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default LayoutPublic