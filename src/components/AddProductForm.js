import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const AddProductForm = () => {
  return (
    <Formik
      initialValues={{
        productName:'',
        productDescription:'',
        productPrice:''
      }}
      // onSubmit={handleSubmit}
    >

    </Formik>
  )
}

export default AddProductForm