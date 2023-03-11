import { useContext } from "react";
import { useState } from "react";
import {createContext} from "react";
//Primer paso importar la funcion que permite crear el contexto
export const InfoContext = createContext();

//Creamos el provider que permite envolver a los componentes a los que quiero mandar el contexto
const initialStateEdad=0;
export function ContextInfoProvider(props){
  //Aquí pondremos todo lo que queremos que se vea en los componentes
  const [edad, setEdad] = useState(initialStateEdad)
  const value={edad, setEdad};
  //Debemos de exportar un componente de tipo provider
  return(  
    <InfoContext.Provider value={value}>
      {props.children}
    </InfoContext.Provider>)
}

//debemos exportar el contexto y el provider


//CREAMOS UN HOOK PERSONALIZADO CON MI CONTEXTO
export function useInfoContext(){
  const context= useContext(InfoContext);
  if(context)
  return context;
}