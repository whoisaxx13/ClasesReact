import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useUserContext } from '../contexts/UserContext';

const Main = () => {
  const miContext = useUserContext();
  return (
    <>
    <NavBar />
    <main>
      <Outlet context={miContext}></Outlet>
    </main>
    <footer>
      Footer
    </footer>
    </>
  )
}

export default Main