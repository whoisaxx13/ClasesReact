import { useState } from 'react'
import './App.css'
import Componente1 from './components/Componente1'
import Componente5 from './components/Componente5'
import { ContextInfoProvider } from './contexts/InfoContext'
import { ContextLoginProvider, LoginContext } from './contexts/LoginContext'
import { ContextNewProvider } from './contexts/NewContext'



//CREAR UN BOTON EN EL COMPONENTE DOS QUE CUANDO ESTÉ LOGUEADO(variable true o false) automaticamente me ponga el fondo de color gris;
//Al pulsar el boton me desloguea y me pone de color blanco
//PRIMER CLICK LOGUEA,
//SEGUNDO DESLOGUEA
function App() {
  return (
    <div className="App">
      <ContextLoginProvider>
        <ContextNewProvider>
          <ContextInfoProvider>
            <Componente1 />
            <Componente5 />
          </ContextInfoProvider>
        </ContextNewProvider>
      </ContextLoginProvider>
    </div>
  )
}

export default App
