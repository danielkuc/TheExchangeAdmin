import React from 'react'
import { Container,Col, Row, } from 'react-bootstrap'
import AddProductsForm from './AddProductsForm'


const Main = () => {
  
  return (
    <Container>
      <Row className='vh-90 d-flex justify-content-center align-items-center' >
        <Col md={8} >
          <AddProductsForm/>        
        </Col>
      </Row>
    </Container>
    )
  }



export default Main