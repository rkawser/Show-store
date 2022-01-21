import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { AiOutlineMenuUnfold } from "react-icons/ai";

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>something</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
};

export default Sidebar;
