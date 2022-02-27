import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
import FirebaseAuthentication from './../Footer/Firebase/Firebase';
const Header = () => {
  const{user}=FirebaseAuthentication();
    return (
        <Navbar className='header-styles' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className='text-light'>Show Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home" className='header-style'>Home</Nav.Link>
        <Nav.Link as={Link} to="/about"  className='header-style'>About</Nav.Link>

        <NavDropdown className='header-text' title="Shop" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/boy">Boy</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/girls">Girls</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/babay">Baby</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact"  className='header-style'>Contact</Nav.Link>
          <Nav.Link as={Link} to="/login"  className='header-style'>Login</Nav.Link>
      </Nav>

      <Form className="d-flex">
        {/* <Button variant="outline-success">Login</Button> */}
        <span>{user.displayName}</span>
        <Sidebar/>
      </Form>

    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
