import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import AOS from 'aos';
import Arrow from './components/Arrow';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Why from './components/Why'
import Footer from './components/Footer';
import Whatsapp from './components/Watsapp';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Hero />
      <Services />
      <Why/>
      <Testimonials/>
      <AppointmentForm />
      <Footer />
      <Whatsapp />
      <Arrow/>
    </>
  );
}

export default App;
