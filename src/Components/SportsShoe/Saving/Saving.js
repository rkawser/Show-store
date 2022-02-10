import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Saving.css'
const Saving = () => {
  return (
    <>
    <Container fluid>
   <Row className='saving-image'>
       <Col>
       <Container>
       <div className='saving-text'>
         <h1 className='mt-5 tex-white'>Saving 50%</h1>
         <h3>ALL Online Store</h3>
         <h2 className='mt-5'>OFFER AVAILABLE ALL SHOES & PRODUCTS</h2>

         <button className='saving-button'>Shop Now</button>
       </div>
       </Container>
       
       
       </Col>
   </Row>
    </Container>
    </>
  )
}

export default Saving