import React, {useState} from 'react'

const userIni=[
  {
    id:1,
    nombre: "nombre",
    edad: 0,
    img: "url",
  },
  {
    id:2,
    nombre: "nombre",
    edad: 0,
    img: "url",
  },
  {
    id:3,
    nombre: "nombre",
    edad: 0,
    img: "url",
  },
  {
    id:3,
    nombre: "nombre",
    edad: 0,
    img: "url",
  }
]


const Usuarios = () => {
  
  const [objeto, setObjeto] = useState(userIni);
  const handlerAddUser=(n,e)=>{
    const clonacion= { ...objeto[0] };
    clonacion.nombre=n;
    clonacion.edad=e;
    clonacion.img='https://randomuser.me/api/portraits/men/'+Math.floor(Math.random()*99)+'.jpg';
    console.log("Clonación",clonacion);
    setObjeto(()=>objeto.unshift(clonacion));
    console.log(objeto);
  }
  return (
    <div>
      {
        console.log(typeof objeto)
        // Array.isArray(objeto) && objeto.map((elemento)=>{
          
        //   return (
        //     <div key={elemento.id}>
        //       Nombre: {elemento.nombre} <br /> <br />
        //       Edad: {elemento.edad} <br /> <br />
        //       Imagen: {elemento.img} <br /> <br />
        //     </div>
        //   ) 
        // })
      }
      <button onClick={()=>handlerAddUser('Luis',12)}>Añadir</button>
    </div>
  )
}

export default Usuarios