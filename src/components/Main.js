import React from 'react'
import { useFormik } from 'formik'
import { Form, FloatingLabel, Container, Row, Col } from 'react-bootstrap';

const Main = () => {
  const formik = useFormik({
    initialValues:  {
      productName:'',
      productDescription:'',
      productPrice:''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <Container>
      <Row className='justify-content-center' >
        <Col md={4} >
        <Form>
          <Form.Group controlId='productName' >
            <Form.Label>Product name</Form.Label>
            <Form.Control as='input' type='text' />
          </Form.Group>
          <Form.Group controlId='productDescription' >
            <Form.Label>Product description</Form.Label>
            <Form.Control as='textarea' type='textarea' htmlSize='50' />
          </Form.Group>
          <Form.Group controlId='productPrice' >         
            <Form.Label>Product price</Form.Label>
            <Form.Control as='input' type='number' min='0.5' />
          </Form.Group>
        </Form>
      </Col>
      </Row>
    </Container>
    )
  }
export default Main