import { useState } from "react";
import {createContext} from "react";
import { useContext } from "react";

//Primer paso importar la funcion que permite crear el contexto
export const LoginContext = createContext();

//Creamos el provider que permite envolver a los componentes a los que quiero mandar el contexto
const initialStateLogin=false;
export function ContextLoginProvider(props){
  //Aquí pondremos todo lo que queremos que se vea en los componentes
  const [login, setLogin] = useState(initialStateLogin)
  const value={login, setLogin};
  //Debemos de exportar un componente de tipo provider
  return(  
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>)
}

//debemos exportar el contexto y el provider

//CREAMOS UN HOOK PERSONALIZADO CON MI CONTEXTO
export function useLoginContext(){
  const context= useContext(LoginContext);
  return context;
}