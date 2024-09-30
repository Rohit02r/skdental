import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import  '../styles/Appoint.css'

function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(form);
    setSubmitted(true);
    
    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    });
  };

  return (
    <section id="appointment" className="py-5 bg-light appoin shadow-lg">
      
      <Container>
        <h2 className="text-center mb-4">Book an Appointment</h2>
        <hr/>
        {submitted && <Alert variant="success">Your appointment has been booked!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              name="name"
              value={form.name}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="Enter your phone number" 
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Preferred Date</Form.Label>
            <Form.Control 
              type="date" 
              name="date"
              value={form.date}
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Your Message" 
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Form.Group>

        </Form>
          <Button variant="primary" type="submit" className='ab'>
            Book Appointment
          </Button>
      </Container>
    </section>
  );
}

export default AppointmentForm;
