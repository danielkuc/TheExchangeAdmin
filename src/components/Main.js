import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik'
import { Form, Container, Row, Col } from 'react-bootstrap';
import SubmitButton from './SubmitButton';

const Main = () => {

  const validator = yup.object({
    // cx_number: yup.number('Must be a number').positive('Must be positive').integer('Must be an Integer').required('Cx number is required'),
    // bonus_date: yup.date().required('Date required'),
    // bogof: yup.number('Must be a number').positive().min(0, "Must be positive").integer('Must be an Integer'),
    // designer_frames: yup.number('Must be a number').positive().min(0, "Must be positive").integer('Must be an Integer'),
    // coatings: yup.number('Must be a number').positive().min(0, "Must be positive").integer('Must be an Integer')
    productName: yup.string().required('Must kaka'),
    productDescription: yup.string().required(),
    productPrice: yup.number().required()
  });

  const handleSubmit = (values) => {
      console.log(values);
    }

  return (
    <Container>
      <Row className='vh-90 d-flex justify-content-center align-items-center' >
        <Col md={4} >
          <Formik
            validationSchema={validator}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleSubmit}
            initialValues={{ 
                productName:'',
                productDescription:'',
                productPrice: 0
              }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors
            })=>(
              <Form
                onSubmit={handleSubmit}
              >
              <Form.Group controlId='productName' className='py-3'>
                <Form.Label>Product name</Form.Label>
                <Form.Control as='input' type='text' value={values.productName} onBlur={handleBlur} onChange={handleChange} isInvalid={errors.productName} />
                <p>{errors.productName}</p>
              </Form.Group>

              <Form.Group controlId='productDescription' className='py-3'>
                <Form.Label>Product description</Form.Label>
                <Form.Control as='textarea' type='textarea' htmlSize='50' value={values.productDescription} onBlur={handleBlur} onChange={handleChange} isInvalid={errors.productDescription} />
              </Form.Group>

              <Form.Group controlId='productPrice'  className='py-3'>         
                <Form.Label>Product price</Form.Label>
                <Form.Control as='input' type='number' value={values.productPrice} onBlur={handleBlur} onChange={handleChange} isInvalid={errors.productPrice} />
              </Form.Group>
              <SubmitButton text="Add new product" />
            </Form>
            )}
          </Formik>
      </Col>
      </Row>
    </Container>
    )
  }



export default Main