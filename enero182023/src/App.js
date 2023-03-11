import logo from './logo.svg';
import './App.css';
import UsandoUseEfect from './components/todo/UsandoUseEfect';
import DatosApi from './components/datosApi/DatosApi';
import SelectMovie from './components/selectMovie/SelectMovie';
import { useEffect, useState } from 'react';

import InfoMovie from './components/infoMovie/InfoMovie';
//CON LA PAGINA THEMOVIEDB.ORG CREAR DOS COMPONENTES DONDE HAYA UN FORM DE BOOSTRAP(FORM.SELECT)
//DOS DIV, UNO CON UN COMPONENTE SELECTOR(FORM) Y EN EL OTRO UN COMPONENTE LLAMADO INFOPELICULAS 
//AL CARGAR LA APLICACION MUESTRA EN EL SELECT LAS 10 MEJORES PELICULAS DEL MOMENTO
//AL DAR CLICK A UNA PELICULA APARECERÁ AL LADO EL NOMBRE DE LA PELÍCULA, SU SINOPSIS Y SU IMAGEN

//COSITAS CHULAS 
//peliculas + populares https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=ed1b952492d90faa859065763f81dad9
//info peli https://api.themoviedb.org/3/movie/idPeli?&language=es-es&api_key=ed1b952492d90faa859065763f81dad9
//para sacar la foto  https://image.tmdb.org/t/p/original/'POSTERPATH'

//EJERCICIO NUEVO TODO LIST
//TENEMOS DOS CONTENEDORES EN DONDE EN UNO HAY UN FORMULARIO (BOOTSTRAP) DONDE PONGA TAREA, IMPORTANCIA(CON ESTRELLITAS) Y UN BOTON DE AÑADIR
//CUANDO SE AÑADE APARECE UNA CARD CON UNA TAREA PUESTA, SE AÑADEN UNA ENCIMA DE OTRA(UNSHIFT AL ARRAY)
//LA TARJETA TIENE EDITAR O BORRAR/COMPLETAR(CUANDO SE BORRA SE ALMACENA EN EL LOCALSTORAGE)
//CUANDO DOY A AÑADIR SE LIMPIAN LOS CAMPOS Y EL TEXTO DE LA TAREA ES OBLIGATORIO
//CADA VEZ QUE DEMOS A EDITAR LA INFORMACIÓN EN EL FORM
//SE GUARDA EN JSON SERVER

const initialStateIdPeli = 0;
function App() {
  const [idPeli, setIdPeli] = useState(initialStateIdPeli);
  return (
    <div className="App"> 
      <div><SelectMovie setIdPeli={setIdPeli}  /></div>
      <div><InfoMovie idpeli={idPeli}/></div>
    </div>
  );
}

export default App;
