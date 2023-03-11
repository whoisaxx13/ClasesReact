//QUIERO TRAERME TODOS LOS USUARIOS Y PINTARLOS EN UNAS CARDS DE BOOSTRAP 

//IMPORTS
import React, { useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import getUsers from '../../helpers/getUsers';

//VARIABLES GLOBALES
const initialStateUsuarios = [];

const DatosApi = () => {
  //DELCARACION DE LOS ESTADOS
  const [usuarios, setUsuarios] = useState(initialStateUsuarios);
  //DECLARACION DE LOS EFECTOS
  useEffect(() => {
    traerUsuarios();
    console.log("Estoy en el efecto");
  }, [])
  
  //LOGICA DE FUNCIONES
  const traerUsuarios = () =>{
    //Funcion que gracias al helper getUser me devuelve los usuarios de la api resqre.in
    getUsers()
      .then(users => {
      setUsuarios(users);
    })
      .catch((error) => console.log(error));
  }

  return (
    <>
      {
      
      usuarios.map(element => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.avatar} />
        <Card.Body>
          <Card.Title>{element.first_name} {element.last_name}</Card.Title>
          <Card.Text>
            Email: {element.email}
          </Card.Text>
        </Card.Body>
        </Card>
      ))
      }
    </>
  )
}

export default DatosApi