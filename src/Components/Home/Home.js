import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Latest from '../Latest/Latest';
import LatestBlog from '../LatestBlog/LatestBlog';
import SportsShoe from '../SportsShoe/SportsShoe';
import './Home.css'

const Home = () => {
    return (
        <>
        <Carousel fade>
        <Carousel.Item>
        <div className='banner-style'>
            <Container>
            
                <Row className='hero-section'>
                   <Col Md={6}>
                        <div className='banner-text'>
                            <h1>EXCLUSIVE <br/> NEW SHOES</h1>
                            <h3>Up To 30% Off All Shoes & Products</h3>
                            <button className=' banner-btn'>Shop Now</button>
                        </div>
                    </Col>

                    <Col Md={6}>
                        <div className='banner-imaage1'>
                          
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className='banner-style'>
        <Container>
                <Row className='hero-section'>
                    <Col Md={6}>
                        <div className='banner-text2'>
                            <h1>EXCLUSIVE <br/> NEW SHOES</h1>
                            <h3>Up To 30% Off All Shoes & Products</h3>
                            <button className='banner-btn'>Shop Now</button>
                        </div>
                     </Col>

                    <Col Md={6}>
                        <div className='banner-imaage2'>
                        </div>
                    </Col>
                </Row>
              
            </Container>
            </div>
        </Carousel.Item>

      </Carousel>

      <div className='my-5'>
      <Latest></Latest>
      </div>
      <div className='my-5'>
      <SportsShoe></SportsShoe>
      </div>

      <div className='my-5'>
      <LatestBlog></LatestBlog>
      </div>
      </>
      
      )
}

export default Home
