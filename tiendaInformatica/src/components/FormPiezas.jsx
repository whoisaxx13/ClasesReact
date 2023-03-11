import React from 'react'
import { FormControl, InputLabel, Input, Button } from '@mui/material';
const FormPiezas = () => {
  return (
    <div>
      <FormControl style={{ margin: '5%'}} >
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <Input id="name" aria-describedby="my-helper-text" />
      </FormControl>
      <br />
      <FormControl style={{ margin: '5%'}}>
        <InputLabel htmlFor="price">Precio</InputLabel>
        <Input id="price" aria-describedby="my-helper-text" />
      </FormControl>
      <br />
      <FormControl style={{ margin: '5%'}}>
        <InputLabel htmlFor="val">Valoracion</InputLabel>
        <Input id="val" aria-describedby="my-helper-text" />
      </FormControl>
      <br />
      <Button style={{ backgroundColor:'black'}}>Enviar</Button>
    </div>
  )
}

export default FormPiezas