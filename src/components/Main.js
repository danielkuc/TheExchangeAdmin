import React from 'react'
import { Container,Col, Row, } from 'react-bootstrap'
import AddProductsForm from './AddProductsForm'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';



const Main = () => {
  const { getAccessTokenSilently } = useAuth0();


  const getProducts = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience:"https://exchange/api",
        scope:"read:products"
      });
      const result = await axios.get("https://theexchangeapi.azurewebsites.net/admin/products.all", {
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      });

      console.log(result.data);

    } catch (error) {
      console.log(error);
    }
  }
  
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