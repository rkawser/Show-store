import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
const Header = () => {
    return (
        <Navbar className='header-style' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className='text-light'>Show Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home" className='text-white'>Home</Nav.Link>
        <Nav.Link as={Link} to="/about"  className='text-white'>About</Nav.Link>

        <NavDropdown className='header-text' title="Shop" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Boy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Girls</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Baby</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact"  className='text-white'>Contact</Nav.Link>
      </Nav>

      <Form className="d-flex">
        {/* <Button variant="outline-success">Login</Button> */}
        <Sidebar/>
      </Form>

    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
