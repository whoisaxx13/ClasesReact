import React, {useContext}from 'react'
import Componente4 from './Componente4'
import { InfoContext } from '../contexts/InfoContext'
const Componente3 = () => {
  const AumentarEdad= useContext( InfoContext );  function handleAument(){
    AumentarEdad.setEdad((edad)=>(edad-1))
  }
  return (
    <div>
      <h3>Componente3</h3>
      <button onClick={handleAument}>Restar Edad</button>
      <Componente4 />
    </div>
  )
}

export default Componente3