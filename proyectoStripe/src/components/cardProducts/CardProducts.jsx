import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import uuid from 'react-uuid';

const CardProducts = ({ products, setProducts }) => {
  useEffect(() => {

  }, [products])
  
  function handleDelete(e){
    e.preventDefault();
    const newProducts= products.filter((product)=> product.name!=e.target.parentElement.querySelector('.card-header').innerText);
    setProducts(newProducts);
  }

  return (
    <div>
      {
        products.map((product) =>(
          <Card bg='danger' border='warning' style={{ width: '18rem' }} key={uuid()}>
            <Card.Header>{product.name}</Card.Header>
            <Card.Body>
              <Card.Text>
                {product.price}€
              </Card.Text>
            </Card.Body>
            <button onClick={handleDelete}>Eliminar</button>
          </Card>
        ))
      }
    </div>
  )
}

export default CardProducts