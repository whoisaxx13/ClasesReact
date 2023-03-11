import { useState } from 'react'
import './App.css'
import FormProducts from './components/formProducts/FormProducts'
import CardProducts from './components/cardProducts/CardProducts'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51MZHIPAek27wJPNXWbKoI35L1X1xoQrGydSmkdnwvf3h81m9DEmrlgbmiLcd66cPSESr5XFyvoBD2kO2rf2GhDkC009v3wNISy');
function App() {
  const [products, setProducts] = useState([]);

  return (
      
      <div className="App" >
      <Container >
        <Row>
          <Col> <FormProducts products={products} setProducts={setProducts} /> </Col>
          <Col> <CardProducts products={products} setProducts={setProducts} /> </Col>
        </Row>
      </Container>
      </div>
  )
}

export default App
