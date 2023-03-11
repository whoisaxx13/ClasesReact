import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import uuid from 'react-uuid';
import getMostRatedMovies from '../../helpers/getMostRatedMovies';
import './SelectMovie.css'

const initialStatePelis = [];
const SelectMovie = ( { setIdPeli }) => {  
  
  const [pelis, setPelis] = useState(initialStatePelis);
  useEffect(() => {
    traerPelis();
    
  }, [])
  
  const traerPelis=()=>{
    getMostRatedMovies()
      .then(peliculas =>{
        setPelis(peliculas);
      })
      .catch(error => console.log(error))
  }
  function handleChange(e){
    setIdPeli(e.target.value);
  }
  return (

    <Form.Select aria-label="Default select example" className='sel' onChange={(e)=>handleChange(e)}>
      {
        pelis.map(element=>{
          return(
          <option value={element.id}  key={uuid()}>{element.title}</option>
        )
      })
      }
    </Form.Select>
  )
}

export default SelectMovie