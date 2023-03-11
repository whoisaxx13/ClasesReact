import React from 'react'
import { Outlet } from 'react-router-dom'
import Navig from '../components/Navig'

const LayoutPublic = () => {
  return (
    <>
      <Navig />
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        Este es mi footer
      </footer>
    </>
  )
}

export default LayoutPublic