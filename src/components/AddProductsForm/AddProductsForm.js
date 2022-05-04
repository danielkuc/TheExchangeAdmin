import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { CONTAINER, MYFORM, BUTTON } from './AddProductsForm.styled';
import * as Yup from 'yup';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AddProductsForm = () => {
  
  const { user, getAccessTokenSilently } = useAuth0();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "*Product Name must have at least 5 characters")
      .max(15, "*Product Name can't be longer than 15 characters")
      .required("*Product Name is required"),
    description: Yup.string()
      .min(15, "*Product Description must have at least 15 characters")
      .max(30, "*Product Description can't be longer than 30 characters")
      .required("*Product Description is required"),
    price: Yup.number().positive().required("*Product Price is required"),
    isAvailable: Yup.bool(),
    quantity: Yup.number().min(0).max(1000000)
  });

  return (
    <CONTAINER>
      <Formik
        initialValues={{name:'', price:'', description:'', isAvailable:true, quantity:0, addedBy:''}}
        validationSchema={validationSchema}
        onSubmit={ async (values, {setSubmitting, resetForm}) => {
          
          setSubmitting(true);

          const accessToken = await getAccessTokenSilently({
            audience:"https://exchange/api",
            scope:"write:products"
          });          
          const newProduct = {...values, addedBy:user.email}
          console.log(newProduct);
          await axios.post("https://localhost:7015/admin/product.add", newProduct,{ 
            headers:{ 
              Authorization: `Bearer ${accessToken}` 
            } } )
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        })=>(

          <MYFORM className="mx-auto" onSubmit={handleSubmit}>
              <Form.Group controlId="prodName" className='py-4' >
              <Form.Label>Product Name :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "error" : null}
                />
                {touched.name && errors.name ? (<div className="error-message">{errors.name}</div>): null}
            </Form.Group>
            <Form.Group controlId="prodDesc" className='py-4' >
              <Form.Label>Product Description :</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Product Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={touched.description && errors.description ? "error" : null}
                />
                {touched.description && errors.description ? (<div className="error-message">{errors.description}</div>): null}
            </Form.Group>
            <Form.Group controlId="prodPrice" className='py-4' >
              <Form.Label>Product Price :</Form.Label>
              <Form.Control
                type="number"
                name="price"
                min="0.00"
                max="100000.00"
                step="any"
                placeholder="Product Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                className={touched.price && errors.price ? "error" : null}
                />
                {touched.price && errors.price ? (<div className="error-message">{errors.price}</div>): null}
            </Form.Group>
            <Form.Group controlId="prodQuantity" className='py-4' >
              <Form.Label>Product Quantity :</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                min="0"
                max="100000"
                step="any"
                placeholder="Product Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                className={touched.quantity && errors.quantity ? "error" : null}
                />
                {touched.quantity && errors.quantity ? (<div className="error-message">{errors.quantity}</div>): null}
            </Form.Group>
            <Form.Group controlId="prodAvailability" className='py-4' >
              <Form.Label>Mark product as available :</Form.Label>
              <Form.Control
                type="checkbox"
                name="isAvailable"
                placeholder="Product Available"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.isAvailable}
                className={touched.isAvailable && errors.isAvailable ? "error" : null}
                />
                {touched.isAvailable && errors.isAvailable ? (<div className="error-message">{errors.isAvailable}</div>): null}
            </Form.Group>
            <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
              Add New Product
            </BUTTON>
          </MYFORM>

        )}
      </Formik>
    </CONTAINER>
  )
}

export default AddProductsForm