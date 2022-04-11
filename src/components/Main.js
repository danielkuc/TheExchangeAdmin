import axios from 'axios'
import React, { useEffect } from 'react'
import { Container,Col, Row, } from 'react-bootstrap'
import AddProductsForm from './AddProductsForm'
import { useAuth0 } from '@auth0/auth0-react';


const Main = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          //audience:"the-exchange/api/auth",
          //scope:"read-write:products"
        });

        const response = await axios("https://localhost:7015/admin/products.all",{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [getAccessTokenSilently])
  

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