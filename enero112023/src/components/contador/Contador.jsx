import React ,{ useState } from 'react'

const Contador = () => {
  

  const [contador, setContador] = useState(0)
  const [texto, setTexto] = useState(true)

  const handleIncrement=(e)=> {
    setContador(contador+1);
  }
  const handleDecrement=(e)=> {
    setContador(contador-1);
  }
  const handleCambiar=(e)=> {
    setTexto(!texto);
  }
  return (
    <>
      {
      texto && <h1>ES TRUE {contador}</h1> 
      }
      <button onClick={()=>handleIncrement()}>Incrementar</button> <br /> <br />
      <button onClick={()=>handleDecrement()}>Decrementar</button> <br /> <br />

      <button onClick={()=>handleCambiar()}>Cambiar</button> <br /> <br />

      <p>{texto}</p>


    </>

  )
}

export default Contador