import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Gen from '../assests/Img/gen.jpg'
import Cos from '../assests/Img/cos.jpg'
import Orth from '../assests/Img/orth.jpg'
import '../styles/Services.css'

function Services() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care for all your oral health needs.',
      image: Gen,
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic dental services.',
      image: Cos,
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with our orthodontic treatments.',
      image: Orth,
    },
    
  ];

  return (
    <section id="services" className="py-5">
      <hr/>
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} className="mb-4" key={index} data-aos="fade-up">
              <Card className="h-100 sb mx-4">
                <Card.Img variant="top " src={service.image} style={{height:'230px'}}/>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
