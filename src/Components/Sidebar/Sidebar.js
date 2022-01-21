import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return(
<>
   <Button variant="primary" onClick={handleShow}>
        <AiOutlineMenuUnfold/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link as={Link} to="/home" className='side-text'>Home</Nav.Link>
        <Nav.Link as={Link} to="/myorders" className='side-text'>My ORders</Nav.Link>
        <Nav.Link as={Link} to="/payment" className='side-text'>Payment</Nav.Link>
        <Nav.Link as={Link} to="/review" className='side-text'>Review</Nav.Link>
        <Nav.Link as={Link} to="/home" className='side-text'>LogOut</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
};

export default Sidebar;
