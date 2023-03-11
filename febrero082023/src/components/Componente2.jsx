import React, {useContext, useState} from 'react'
import Componente3 from './Componente3'
import { NewContext } from '../contexts/NewContext';
import { useLoginContext } from '../contexts/LoginContext';

const Componente2 = () => {
  const miContext= useContext(NewContext);
  const LoginContext= useLoginContext();
  function handleLogin(){
    LoginContext.setLogin(!LoginContext.login);
    if(LoginContext.login){
      document.body.style.setProperty('background-color', 'grey');
    }else{
      document.body.style.setProperty('background-color', 'white');
    }
  }
  return (
    <div>
      <h2>Componente2</h2>
      {
        miContext.persona && <div>
                      <h2>DNI: {miContext.persona.dni}</h2>
                      <h2>Nombre: {miContext.persona.nombre}</h2>
                      <h2>Edad: {miContext.persona.edad}</h2>
                    </div>
      }

      <button onClick={handleLogin}>Login/Logout</button>
      <Componente3 />
    </div>
  )
}

export default Componente2