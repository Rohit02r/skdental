import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Why.css'

const Why = () => {
  const reasons = [
    {
      title: 'Experienced Team',
      description: 'At SK Dental, our team consists of highly qualified and experienced dentists providing the best care for our patients.',
    },
    {
      title: 'Advanced Technology',
      description: 'We use the latest technology and modern equipment to ensure that you receive top-notch dental care.',
    },
    {
      title: 'Patient-Centered Care',
      description: 'Our approach focuses on making your dental experience comfortable, personalized, and stress-free.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-5 ">
        <hr/>
      <Container>
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row>
          {reasons.map((reason, index) => (
            <Col md={4} className="mb-4" key={index} data-aos="fade-up">
              <div className="p-3 wb text-white rounded shadow-lg h-100">
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <hr/>
    </section>
  );
};

export default Why;
