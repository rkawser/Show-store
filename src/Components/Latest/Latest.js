import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Latest.css'
const Latest = () => {
  return(<>
   <Container>
     <Row>
       <Col md={4}>
         <div className='L-image1'>
           <h5>some</h5>
         </div>
       </Col>
       
       <Col md={4}>
       <div className='L-image2'>
       </div>
       </Col>

       <Col md={4}>
       <div className='L-image3'>
       </div>
       </Col>
     </Row>
   </Container>
  </>);
};

export default Latest;
