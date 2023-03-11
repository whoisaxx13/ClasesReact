import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid } from '@mui/material';
import FormPiezas from './components/FormPiezas';
//CREAR UN COMPONENTE QUE SEA UN FORMULARIO LLAMADO  FORMPIEZAS.JSX 
//CREAR UN COMPONENTE LLAMADO TABLAPIEZAS.JSX
//CREAR UN FICHERO DE CONFIGURACION DE FIREBASE DENTRO DE SRC QUE SE LLAME FIREBASE-CONFIG.JS
//CREAR UN FICHERO DENTRO DE HELPERS LLAMADO GESTION-PIEZAS.JS QUE PERMITA LLAMAR A FUNCIONES PARA INSERTAR, BUSCAR, MODIFICAR PIEZAS DE MI BD FIREBASE
//INSTALAR FIREBASE CON NPM
//INSTALAR BOOSTRAP O MATERIAL UI
//FIREBASE-CONFIG CONTENDRÁ LA FIREBASECONFIG
//CREAR EN FIRESTORE DATABASE UNA NUEVA BASE DE DATOS. (COLECCION)
function App() {
  const [piezas, setPiezas ] = useState({})

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item style={{ backgroundColor: 'white', padding:'5%'}} >
          <FormPiezas />
        </Grid>
        <Grid item>
          
        </Grid>
        
      </Grid>
    </div>
  )
}

export default App
