import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const {isAuthenticated, logout, isLoading } =useAuth0();
  function prueba() {

    try {
      console.log(isAuthenticated)
      isAuthenticated().then(async function (authenticated) {
        console.log(authenticated);
          if (authenticated) {
            return <h1>Hola mundo</h1>
          } else {
            return <Navigate to='/login' replace={true}/>
          }
      })
  } catch (err) {
      console.log("Log in failed", err);
  }
    
  }
  return (
    <>
      {prueba()}
    </>
  )
}

export default Home