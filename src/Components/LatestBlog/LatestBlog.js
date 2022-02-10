import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './LatestBlog.css';
import { AiOutlineCalendar} from "react-icons/ai";

const LatestBlog = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={4}>
                <div>
                    <div className='blogOverly'>
                    <div className='blogImage1'></div>
                    </div>
                    
                    <div className='blogtext'>
                        <p><AiOutlineCalendar className='blog-icon'/> 27,Jun 2022</p>
                        <h4 className='text-black'>Lorem ipsum dolor ametcons adipisicing elit sed</h4>
                         
                         <button className='blog-button'>Read More</button>
                    </div>
                </div>
            </Col>

            <Col md={4}>
            <div>
                    <div className='blogOverly'>
                    <div className='blogImage2'></div>
                    </div>
                    
                    <div className='blogtext'>
                        <p><AiOutlineCalendar className='blog-icon'/> 27,Jun 2022</p>
                        <h4 className='text-black'>Lorem ipsum dolor ametcons adipisicing elit sed</h4>
                         
                         <button className='blog-button'>Read More</button>
                    </div>
                </div>
            </Col>

            <Col md={4}>
            <div>
                    <div className='blogOverly'>
                    <div className='blogImage3'></div>
                    </div>
                    
                    <div className='blogtext'>
                        <p><AiOutlineCalendar className='blog-icon'/> 27,Jun 2022</p>
                        <h4 className='text-black'>Lorem ipsum dolor ametcons adipisicing elit sed</h4>
                         
                         <button className='blog-button'>Read More</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default LatestBlog