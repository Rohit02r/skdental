import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css'
import Logo from '../assests/Img/logo.jpg'

function NavbarComponent() {
  return (
    
    <Navbar expand="lg" fixed="top" className='nb shadow'>
      <Container >
      <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" className="logo rounded-circle" />
        </Navbar.Brand>
        <Navbar.Brand href="#" className=' text-white fw-bold'>SK Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='mx-2 nc'>Home</Nav.Link>
            <Nav.Link href="#services" className='mx-2 nc'>Services</Nav.Link>
            <Nav.Link href="#appointment" className='mx-2 nc'>Appointment</Nav.Link>
            <Nav.Link href="#footer" className='mx-2 nc'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
