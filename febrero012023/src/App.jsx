import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormularioEjercicio from './components/formularioEjercicio/FormularioEjercicio'
import CardEjercicio from './components/cardEjercicio/CardEjercicio';
import getTime from './helpers/getTime';

//CREAR UN FORMULARIO QUE ME PIDA NOMBRE, LOCALIDAD, PAIS Y UN CAMPO QUE SE LLAME TOKEN, SI LOS TRES CAMPOS NO ESTÁN RELLENOS, EL CAMPO TOKEN NO APARECERÁ
//CUANDO LE DEMOS A ENVIAR HARÁ UNA CONSULTA CON ESE TOKEN A OPENWEATHERMAP MOSTRANDO EL TIEMPO DE LOS PRÓXIMOS 7 DIAS EN ESA LOCALIDAD.
//CREAR UN ARRAY CON ICONOS PARA MOSTRAR CON ESOS ICONOS EL TIEMPO
//LA LLAMADA A LA API EN UN HELPER
//NO USAR RUTAS
//USAR REACT HOOK FORM 
const initialStateTime= {};
function App() {
  // const [time, setTime] = useState(initialStateTime);
  // console.log(time)
  console.log(getTime())
  return (
    // <div className="App">
    //   <FormularioEjercicio setTime={setTime} />
    //   <CardEjercicio time={time} />
    // </div>
    <>
    </>
  )
}

export default App
