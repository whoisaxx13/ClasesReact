import React, { useContext } from 'react'
import { Navigate, useOutletContext } from "react-router-dom";

const Home = ({  }) => {
  const context =useOutletContext();
  console.log(context)
  return (
    <>
     { context.user ? <div>Hola</div> : <Navigate to="/login" replace={true} />}
    </>
  )
}

export default Home