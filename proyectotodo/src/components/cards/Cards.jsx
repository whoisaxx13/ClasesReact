import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import traerTareas from '../../helpers/traerTareas';
import uuid from 'react-uuid';

const Cards = ({ tasks , setTasks } ) => {
  useEffect(() => {
    callTasks()
  }, [])
  const callTasks=()=>{
    traerTareas()
      .then(tareas =>{
        setTasks(tareas);
      })
      .catch(error => console.log(error))
  }
  const completeTasks = () => {

  };
  return (
    <div>
      <h1>Tareas</h1>
      {
        tasks.map(task => (
          <Card style={{ width: '50rem' , margin:'1% auto ' , backgroundColor:'grey', borderRadius:'25px'}} key={uuid()} data-id={task.id} >
            <Card.Body style={{ backgroundColor:'lightgrey', padding:'1%',borderRadius:'25px 25px 0px 0'}}>
              <Card.Title><h1>{task.name}</h1></Card.Title>
              <Card.Text>
                Dificultad: {task.rating}
              </Card.Text>
            </Card.Body>
            <div style={{ padding: '2%' }}>
              <Button style= {{ marginLeft: '5%' } }><h4>Completar</h4></Button>
              <Button style= {{ marginLeft: '5%' } }><h4>Editar</h4></Button>
              <Button style= {{ marginLeft: '5%' } }><h4>Eliminar</h4></Button>
            </div>
          </Card>
        ))
      }
    </div>
  )
}

export default Cards