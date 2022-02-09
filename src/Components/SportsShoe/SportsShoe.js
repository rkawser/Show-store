import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './SportsShoe.css';

const SportsShoe = () => {
  return(
       <>
       <Container>
           <Row>
               <Col md={6}>
                 <div className='overly'>
                 <div className='sports-image'>       
                   </div>
                 </div>
                   
               </Col>

               <Col md={6}>
                 <div className='overly'>
                 <div className='sports-image2'>
               </div>
               <div className='sports-style mt-3'>
                 <h1 className='mt-4'>Sports Shoes</h1>
                 <h4>UP TO 30% OFF ALL SHOES & PRODUCTS</h4>
                 <button className='sports-button'>SHOP NOW</button>
                </div>
                 </div>
              

             </Col>
           </Row>
       </Container>
       </>
       );
};

export default SportsShoe;
