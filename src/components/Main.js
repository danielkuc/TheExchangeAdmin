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
        audience:"https://exchange/api"
      });

      const result = await axios.get("https://localhost:7015/admin/products.all", {
        headers:{
          Accept:"application/json",
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
      <button onClick={getProducts} > Try Me </button>
    </Container>
    )
  }



export default Main