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
          <Form.Group as={Col} >
          <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
          </Form.Group>
        </Form>
      </Col>
      </Row>
    </Container>
    )
  }
export default Main