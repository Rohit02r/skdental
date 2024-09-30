import React from 'react';
import '../styles/Footer.css'
import YoutubeIcon from '../assests/Icon/y.svg';
import TwitterIcon from '../assests/Icon/t.svg';
import InstagramIcon from '../assests/Icon/i.svg';
import WhatsAppIcon from '../assests/Icon/w.svg';

const Footer = () => {
  return (
    <footer className="footer  text-light py-4" id='footer'>
      <div className="footer-container container">
        <div className="footer-row row">
         
          <div className="footer-col col-md-4 text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <p>Email: info@skdental.com</p>
            <p>Phone: +91 999 888 7777</p>
          </div>

          
          <div className="footer-col col-md-4 text-center">
            <em><h5 className="footer-heading">Location</h5></em>
            <em><p>NO 43 , Bell street, KG Nagar, Indiana polis State, United States of America</p></em>
          </div>

         
          <div className="footer-col col-md-4 text-center">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="footer-social-icons align-center">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={YoutubeIcon} alt="YouTube" width="24" height="24" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" width="24" height="24" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <img src={WhatsAppIcon} alt="WhatsApp" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className='mb-0 mt-1'>&copy; 2024 SK Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;