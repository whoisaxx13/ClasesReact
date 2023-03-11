
//EJERCICIO NUEVO TODO LIST
//TENEMOS DOS CONTENEDORES EN DONDE EN UNO HAY UN FORMULARIO (BOOTSTRAP) DONDE PONGA TAREA, IMPORTANCIA(CON ESTRELLITAS) Y UN BOTON DE AÑADIR
//CUANDO SE AÑADE APARECE UNA CARD CON UNA TAREA PUESTA, SE AÑADEN UNA ENCIMA DE OTRA(UNSHIFT AL ARRAY)
//LA TARJETA TIENE EDITAR O BORRAR/COMPLETAR(CUANDO SE BORRA SE ALMACENA EN EL LOCALSTORAGE)
//CUANDO DOY A AÑADIR SE LIMPIAN LOS CAMPOS Y EL TEXTO DE LA TAREA ES OBLIGATORIO
//CADA VEZ QUE DEMOS A EDITAR LA INFORMACIÓN EN EL FORM
//SE GUARDA EN JSON SERVER

import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Formu from './components/form/Formu';
import Cards from './components/cards/Cards';
import { useState } from 'react';
const initialStateTasks=[];
function App() {
  const [tasks, setTasks] = useState(initialStateTasks);
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Formu tasks={tasks} setTasks={setTasks} />
          </Col>
          <Col>
            <Cards tasks={tasks} setTasks={setTasks} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
