import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import {BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle } from "react-icons/ai";
import {GrInstagram} from "react-icons/gr";
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaHeadset} from "react-icons/fa";
import {FaAddressCard} from "react-icons/fa";
import {FiPhoneCall } from "react-icons/fi";
import {MdEmail } from "react-icons/md";

const Footer = () => {
  return (
  <div className='footer-style'>
    <Container>
        <Row>
            <Col md={3}>
                <div className='footer-details'>
                    <h2><span className='footer-shoe'>SHOE</span>  <span className='footer-store'> STORE</span></h2>
                <h4><FaHeadset className='footer-call'/>(+88)01729573536</h4>
                    <h6>We are a team of designers and developers who creates high quality multipurpose and responsive premium Shopify themes.</h6>
                    <BsFacebook className='footeer-icon'/> <AiFillTwitterCircle className='footeer-icon'/> <GrInstagram className='footeer-icon'/> <AiFillGoogleCircle className='footeer-icon'/>
                </div>
            </Col>

            <Col md={3}>
                <div className='footer-menu'>
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
                    <p><FaAddressCard/>Address:123Main Street,Anytown,CA </p>
                    <p>12345 - Bangladesh.</p>
                    <p><FiPhoneCall/> Phone :+ (88) 01729573536</p>
                    <p><MdEmail/>Email :raihankawser29@gmail.com</p>
                    <p className='footer-payment'></p>
              </div>
            </Col>       
        </Row>
    </Container>
  </div>
  );
};

export default Footer;
