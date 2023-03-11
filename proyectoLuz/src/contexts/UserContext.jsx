import { useContext, useState } from "react";
import {createContext} from "react";
//Primer paso importar la funcion que permite crear el contexto
export const UserContext = createContext();

//Creamos el provider que permite envolver a los componentes a los que quiero mandar el contexto
const initialStateUser=null;
export function ContextUserProvider(props){
  //Aquí pondremos todo lo que queremos que se vea en los componentes
  const [user, setUser] = useState(initialStateUser)
  const value={user, setUser};
  //Debemos de exportar un componente de tipo provider
  return(  
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    )
}

//debemos exportar el contexto y el provider

//CREAMOS UN HOOK PERSONALIZADO CON MI CONTEXTO
export function useUserContext(){
  const context= useContext(UserContext);
  return context;
}