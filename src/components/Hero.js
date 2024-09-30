import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cov from '../assests/Img/cov.png'


function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container>
        <Row>
        <Col md={6}>
           
           <img src={Cov} alt="Dental Care" className="img-fluid rounded mt-5" />
         </Col>
          <Col md={6}>
            <h1 className='text-center mt-5'>Welcome to SK Dental</h1>
            <hr />
            <p className='text-start pt-2 lh-md fw-normal fs-5'>
  Your smile is our priority at <strong>SK Dental</strong>.We provide comprehensive dental care tailored to meet your needs.At <strong>SK Dental</strong>, we strive for excellence in maintaining your oral health.Quality and care go hand in hand at <strong>SK Dental</strong>.
</p>

<em>
<ul className='text-start p-2 lh-lg'>
  <li><strong>General Dentistry:</strong> From routine checkups to preventive care, <strong>SK Dental</strong> ensures your oral health is well-maintained.</li>
  <li><strong>Cosmetic Dentistry:</strong> Enhance your smile with services like teeth whitening, veneers, and more at <strong>SK Dental</strong>.</li>
  <li><strong>Orthodontics:</strong> Achieve a perfect smile with our specialized orthodontic treatments, including braces and aligners at <strong>SK Dental</strong>.</li>
</ul></em>

            <Button variant="primary" href="#appointment" className='ms-5'>Book an Appointment</Button>
          </Col>
         
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
