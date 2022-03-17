import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { CONTAINER, MYFORM, BUTTON } from './AddProductsForm.styled';
import * as Yup from 'yup';

const AddProductsForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "*Name must have at least 5 characters")
      .max(15, "*Names can't be longer than 15 characters")
      .required("*Name is required"),
    description: Yup.string()
      .min(15, "*Description must have at least 15 characters")
      .max(30, "*Description can't be longer than 30 characters")
      .required("*Description is required"),
    price: Yup.number().required("*Price is required")
  });

  return (
    <CONTAINER>
      <Formik
        initialValues={{name:'', price:'', description:''}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
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