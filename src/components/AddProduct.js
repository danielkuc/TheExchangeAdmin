import React from 'react'
import { useFormik } from 'formik'

const AddProduct = () => {
  const formik = useFormik({
    initialValues:  {
      productName:'',
      productDescription:'',
      productPrice:''
    }
  });

  return (
    <div>AddProduct</div>
  )
}
export default AddProduct