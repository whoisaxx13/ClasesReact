import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import guardarTarea from '../../helpers/guardarTarea';
import React from 'react'
import './formu.css'
const Formu = ({ tasks , setTasks }) => {
  const save=(e)=>{
    e.preventDefault()
    const $d=document,
      name=$d.querySelector('#name').value,
      form=$d.querySelector('#form');
    let rating;
      if($d.querySelector('.rating :checked')){
        rating=$d.querySelector('.rating :checked').value;
      }
      name && rating ? guardarTarea( {name, rating} )
      .then(()=>{
        form.reset();
        const newTasks = [ ...tasks ];
        newTasks.unshift( {name, rating} );
        setTasks( newTasks);
      })
      .catch((error)=>{
        console.log(error);
      })   
      : alert('Rellene todos los campos por favor');
  }
  return (
    <div>
      <Form id='form'>
      <Form.Group className="mb-3">
        <Form.Label><h3>Nombre de la tarea</h3></Form.Label>
        <Form.Control type="text" id='name' name='name' />
      </Form.Group> <br />
      <InputGroup>
        <Form.Group className="mb-3">
          <Form.Label><h3>Dificultad</h3></Form.Label>
          <fieldset id=''>
            <div className='rating'>
              <input id="rating1" type="radio" className="ratingb" name='rating' value="1" />
              <label htmlFor="rating1">1</label>
              <input id="rating2" type="radio" className="ratingb" name='rating' value="2"/>
              <label htmlFor="rating2">2</label>
              <input id="rating3" type="radio" className="ratingb" name='rating' value="3"/>
              <label htmlFor="rating3">3</label>
              <input id="rating4" type="radio" className="ratingb" name='rating' value="4"/>
              <label htmlFor="rating4">4</label>
              <input id="rating5" type="radio" className="ratingb" name='rating' value="5"/>
              <label htmlFor="rating5">5</label>   
            </div>     
          </fieldset>
        </Form.Group>
      </InputGroup>
      <br />  
      <Button variant="primary" type="submit" onClick={(e)=>{save(e)}}>
        <h3>Submit</h3>
      </Button>
    </Form>
    </div>
  )
}

export default Formu