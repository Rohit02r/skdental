import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
import Logo from '../assests/Img/logo.jpg';

function NavbarComponent() {
  const handleNavLinkClick = () => {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#basic-navbar-nav');

    // Check if the navbar is currently expanded
    if (navbarCollapse.classList.contains('show')) {
      // If it is expanded, simulate a click to collapse it
      navbarToggle.click();
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className='nb shadow'>
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" className="logo rounded-circle" />
        </Navbar.Brand>
        <Navbar.Brand href="#" className='text-white fw-bold'>SK Dental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Adding onClick to each Nav.Link to handle closing the navbar */}
            <Nav.Link href="#home" className='mx-2 nc' onClick={handleNavLinkClick}>Home</Nav.Link>
            <Nav.Link href="#services" className='mx-2 nc' onClick={handleNavLinkClick}>Services</Nav.Link>
            <Nav.Link href="#appointment" className='mx-2 nc' onClick={handleNavLinkClick}>Appointment</Nav.Link>
            <Nav.Link href="#footer" className='mx-2 nc' onClick={handleNavLinkClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
