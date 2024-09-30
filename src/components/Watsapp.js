import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/Watsapp.css'; 

function Whatsapp() {
  const whatsappNumber = '9360790829'; 
  const message = 'Hello, I would like to book an appointment.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} color="#fff" />
    </a>
  );
}

export default Whatsapp;
