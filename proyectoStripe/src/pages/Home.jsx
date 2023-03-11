import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { Navigate, NavLink } from 'react-router-dom';
import CardProducts from '../components/cardProducts/CardProducts';
import FormProducts from '../components/formProducts/FormProducts';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0)

  
  

  return (
      
      <div className="App" >
      <Container >
        <Row>
          <Col> <FormProducts products={products} setProducts={setProducts} totalPayment={totalPayment} setTotalPayment={setTotalPayment} /> </Col>
          <Col> <CardProducts products={products} setProducts={setProducts} /> </Col>
          
        </Row>
        <Row>
          <span> {totalPayment} €</span>
          <NavLink to="/payment">Ir a pagar</NavLink>
        </Row>
      </Container>
      </div>
  )
}

export default Home