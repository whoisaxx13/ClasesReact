import React from 'react'
import Componente2 from './Componente2'
import { useInfoContext } from '../contexts/InfoContext'
const Componente1 = () => {
  const InfoContext = useInfoContext();
  console.log(InfoContext)
  return (
    <div>
      <h1>Componente1</h1>
      <h2> AH {InfoContext.edad}</h2>
      <Componente2 />
      </div>
    
  )
}

export default Componente1