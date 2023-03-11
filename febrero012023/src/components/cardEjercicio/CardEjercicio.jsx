import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';

const CardEjercicio = ({ time }) => {
  console.log(time,'Estoy en card');
  const  mapTiempo=new Map([
    ['Clear','despejado.png'],
    ['Clouds','nube.png'],
    ['Thunderstorm','tormenta.png'], 
    ['Drizzle','nevada.png'],
    ['Rain','lluvia.png'],
    ['Snow','nieve.png'],
    ['Mist','humo.png'],
    ['Smoke','humo.png'],
    ['Haze','humo.png'],
    ['Dust','humo.png'],
    ['Fog','humo.png'],
    ['Sand','humo.png'],
    ['Ash','humo.png'],
    ['Squall','humo.png'],
    ['Tornado','humo.png'],
    ]);
    let salida= time.weather;
  return (
    <div>
      <Card style={{ width: '18rem' , backgroundColor:"brown", borderRadius:"10px"}}>
        {salida && <Card.Img style={{ width: '8rem'}}variant="top" src={`/src/assets/img/${mapTiempo.get(salida[0].main)}`}/>}
        <Card.Body>
          <Card.Title>{time.name}</Card.Title>
          <Card.Text>
            {time.main?.temp}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardEjercicio