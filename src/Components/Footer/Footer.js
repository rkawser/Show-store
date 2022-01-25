import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import {BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import {GrInstagram} from "react-icons/gr";
import { AiFillGoogleCircle} from "react-icons/ai";
const Footer = () => {
  return (
  <div className='footer-style'>
    <Container>
        <Row>
            <Col md={3}>
                <div className='footer-details'>
                    <h2>SHOE STORE</h2>
                    <h3>+ (88) 01729573536</h3>
                    <h6>We are a team of designers and developers who creates high quality multipurpose and responsive premium Shopify themes.</h6>
                    <BsFacebook className='footeer-icon'/> <AiFillTwitterCircle/> <GrInstagram/> <AiFillGoogleCircle/>
                </div>
            </Col>

            <Col md={3}>
                <div>
                    <h6>MAIN MENU</h6>
                    <p>Home</p>
                    <p>For Men</p>
                    <p>For Girls</p>
                    <p>For kid</p>
                    <p>Top product</p>
                    <p>pages/layOut</p>
                </div>
            </Col>


            <Col md={3}>
                <div className='footer-help'>
                    <h6>Get help</h6>
                    <p>Order status</p>
                    <p>Shipping and Delivery</p>
                    <p>Returns</p>
                    <p>Payment Options</p>
                    <p>Contact Us</p>
                </div>
            </Col>

            <Col md={3}>
                <div className='footer-get'>
                    <h6>GET IN TOUCH</h6>
                    <p>Address :123 Main Street, Anytown,CA </p>
                    <p>12345 - Bangladesh.</p>
                    <p>Phone :+ (88) 01729573536</p>
                    <p>Email :raihankawser29@gmail.com</p>
                        
              </div>
            </Col>       
        </Row>
    </Container>
  </div>
  );
};

export default Footer;
