

//IMPORTS
import React, { useEffect, useState } from 'react'
//VARIABLES GLOBALES
const stateInitialContador1 = 0;
const stateInitialContador2 = 0;
const UsandoUseEfect = () => {
  //DELCARACION DE LOS ESTADOS
  const [contador1, setContador1] = useState(stateInitialContador1)
  const [contador2, setContador2] = useState(stateInitialContador2)

  //DECLARACION DE LOS EFECTOS
  useEffect(() => {
    console.log('hola');
  }, [])
  useEffect(() => {
    console.log('estoy usando el efecto cuando cambie el contador1');
  }, [contador1])
  useEffect(() => {
    console.log('estoy usando el efecto cuando cambie el contador1 o el contador2');
  }, [contador1,contador2])
  
  //LOGICA DE FUNCIONES
  function handleClickButton1(e){
    return setContador1((newcontador)=>newcontador+1)
  }
  function handleClickButton2(e){
    return setContador2((newcontador)=>newcontador+1)

  }
  return (
    <div>
      Contador 1: {contador1}
      <hr />
      Contador 2: {contador2}
      <hr />

      Ejemplo del uso de UseEffect y sus dependencias:
      <br />
      <br />
      <div>
        <button onClick={()=>handleClickButton1()}>Aumentar contador 1</button>
        <br />
        <br />
        <button onClick={()=>handleClickButton2()}>Aumentar contador 2 </button>

      </div>
    </div>
  )
}

export default UsandoUseEfect