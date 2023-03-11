import React, {useContext} from 'react'
import { NewContext } from '../contexts/NewContext';
import { useLoginContext } from '../contexts/LoginContext';

const Componente5 = () => {
  const miContext = useContext(NewContext);
  function handleLogin(){
    LoginContext.setLogin(!LoginContext.login);
    if(LoginContext.login){
      document.body.style.setProperty('background-color', 'grey');
    }else{
      document.body.style.setProperty('background-color', 'white');
    }
  }
  function handlePersona(e){
    e.preventDefault();
    const dni= document.querySelector('#dni').value,
      nombre= document.querySelector('#nombre').value,
      edad= document.querySelector('#edad').value;
    const newPersona= {dni,nombre,edad};
    miContext.setPersona(newPersona);
  }
  return (
    <div>
      <h1>Componente5</h1>
      <form >
        <input type="text" id='dni' placeholder='Dni' /><br />
        <input type="text" id='nombre' placeholder='Nombre' /> <br />
        <input type="number" id='edad' placeholder='Edad' /> <br />
        <button onClick={handlePersona}>Submit</button>
      </form>
      <button onClick={handleLogin}>Login/Logout</button>

    </div>
  )
}

export default Componente5