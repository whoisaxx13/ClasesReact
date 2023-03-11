import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';

import { ContextUserProvider } from '../contexts/UserContext'
import Main from '../pages/Main';


const LayoutPublic = () => {
  
  return (
    <ContextUserProvider>
      <Main />
    </ContextUserProvider>
  )
}

export default LayoutPublic