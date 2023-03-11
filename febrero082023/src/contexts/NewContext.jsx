import { useState } from "react";
import {createContext} from "react";
//Primer paso importar la funcion que permite crear el contexto
export const NewContext = createContext();

//Creamos el provider que permite envolver a los componentes a los que quiero mandar el contexto
const initialStatePersona=null;
export function ContextNewProvider(props){
  //Aquí pondremos todo lo que queremos que se vea en los componentes
  const [persona, setPersona] = useState(initialStatePersona)
  const value={persona, setPersona};
  //Debemos de exportar un componente de tipo provider
  return(  
    <NewContext.Provider value={value}>
      {props.children}
    </NewContext.Provider>)
}

//debemos exportar el contexto y el provider

//CREAMOS UN HOOK PERSONALIZADO CON MI CONTEXTO
export function useInfoContext(){
  const context= useContext(InfoContext);
  return context;
}