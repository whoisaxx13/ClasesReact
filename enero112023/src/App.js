import './App.css';
import Card from './components/card/Card';
import Contador from './components/contador/Contador';
import { v4 as uuidv4 } from 'uuid';
import Usuarios from './components/usuarios/Usuarios';
function App() {
  const nombres = [
    {
    nombre: "Antonio",
    profesion: "Limpiador",
    genero: 'masculino',
  }
  ,
  {
    nombre: "Mar",
    profesion: "Profesora",
    genero: 'femenino'
  }
  ,
  {
    nombre: "Elena",
    profesion: "Actriz",
    genero: 'femenino'
  }
  ,
  {
    nombre: "Marcos",
    profesion: "Piloto",
    genero: 'masculino'
  }
  ,
  {
    nombre: "Carlos",
    profesion: "Cocinero",
    genero: 'masculino'
  }
  ,
  {
    nombre: "Rosa",
    profesion: "Futbolista",
    genero: 'femenino'
  }
  ,
  {
    nombre: "Luisa",
    profesion: "Traductora",
    genero: 'femenino'
  }
  ,
  {
    nombre: "Juan",
    profesion: "Comercial",
    genero: 'masculino'
  }
  
];
  return (
    <div className="App"> {/* SOLO SE PUEDE PINTAR UN NODO PADRE , puede ser <> </> y no se muestra en el html*/}
      {/* <ol>
      {nombres.map((element)=>{
        return <li key={uuidv4()}><Card { ...element }/></li>
      })}
      </ol> */}
      
      {/* <Contador /> */}

      <Usuarios />

    </div>
  );
}
//crear una tarjeta que le pase como parametro un nombre, una profesion  y un enlace, y automaticamente me mostrará una tarjeta donde aparezca centrado 
//redondeada la imagen, h2 el nombre y la profesion un h3, la tarjeta va a tener un tamaño de 400x400 y un borde de 2px.
//La url tiene que generar aleatoriamente masculino y femenino, y un numero del 0 al 99
//Nombre y profesiones van a ir dentro de un objeto que tendrá 3 claves
export default App;
