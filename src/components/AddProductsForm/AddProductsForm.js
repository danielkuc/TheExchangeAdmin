import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { CONTAINER, MYFORM, BUTTON } from './AddProductsForm.styled';
import * as Yup from 'yup';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AddProductsForm = () => {
  const defaultImgSrc = '/img/placeholder.png';
  const initialImgValues = {
    imgSrc : defaultImgSrc,
    imgFile: null
  }
  const [imgValues, setImgValues] = useState(initialImgValues)
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const requestURL = process.env.REACT_APP_AUTH0_REQUEST_URL;
  const { getAccessTokenSilently } = useAuth0();

  const showPreview= e =>{
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = x => {
        setImgValues({
          imgFile: imageFile,
          imgSrc: x.target.result
        });
      }
      reader.readAsDataURL(imageFile);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "*Product Name must have at least 5 characters")
      .max(15, "*Product Name can't be longer than 15 characters")
      .required("*Product Name is required"),
    description: Yup.string()
      .min(15, "*Product Description must have at least 15 characters")
      .max(100, "*Product Description can't be longer than 100 characters")
      .required("*Product Description is required"),
    price: Yup.number().positive().required("*Product Price is required"),
    isActive: Yup.bool(),
    quantity: Yup.number().min(0).max(1000000)
  });

  return (
    <CONTAINER>
      <Formik
        initialValues={{name:'', price:'', description:'', isActive: true, quantity:0, imgSource:defaultImgSrc, imgFile:null}}
        validationSchema={validationSchema}
        setFieldValue
        onSubmit={ async (values, {setSubmitting, resetForm}) => {
          
          setSubmitting(true);

          const accessToken = await getAccessTokenSilently({
            audience:audience,
            scope:"write:products"
          });          
          const newProduct = {...values}
          console.log(newProduct);
          await axios.post(requestURL, newProduct,{ 
            headers:{ 
              Authorization: `Bearer ${accessToken}` 
            } } )
            .then(response => {
              console.log(response);
              resetForm();
            })
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
          isSubmitting,
          setFieldValue
        })=>(

          <MYFORM className="mx-auto" onSubmit={handleSubmit}>
            <img src={imgValues.imgSrc} alt="product" className="productPreview"/>
              <Form.Group controlId="productImage"  className="py-4" >
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={showPreview}
                />
              </Form.Group>
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
              <Form.Label>Mark product as active :</Form.Label>
              <Form.Control
                type="checkbox"
                name="isActive"
                placeholder="Product Available"
                checked={values.isActive}
                onChange={() => {setFieldValue("isActive", !values.isActive)}}
                onBlur={handleBlur}
                className={touched.isActive && errors.isActive ? "error" : null}
                />
                {touched.isActive && errors.isActive ? (<div className="error-message">{errors.isActive}</div>): null}
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