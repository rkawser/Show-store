import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { AiOutlineHome} from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { RiHandHeartFill} from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import useAuth from './../PrivateRoute/UseAuth';

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const{LogOut}=useAuth();
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
        <Nav.Link as={Link} to="/home" className='side-text'><AiOutlineHome/> Home</Nav.Link>
        <Nav.Link as={Link} to="/myorders" className='side-text'><FaHandPointRight/> My ORders</Nav.Link>
        <Nav.Link as={Link} to="/payment" className='side-text'><MdPayments/> Payment</Nav.Link>
        <Nav.Link as={Link} to="/review" className='side-text'><RiHandHeartFill/> Review</Nav.Link>
        <Nav.Link as={Link} onClick={LogOut} to="/home"className='side-text'> <AiOutlineLogout/>LogOut</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
};

export default Sidebar;
