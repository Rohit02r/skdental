import React from "react";

import '../styles/Testimonials.css';
import {Card} from 'react-bootstrap';
import G1 from '../assests/Img/g1.jpg'
import B1 from '../assests/Img/b1.jpg'
import G2 from '../assests/Img/g2.jpg'


function Testimonials() {
    return (
        <div>
            <h2 className="text-center mt-2"><em>Our Happy Customers</em></h2>
            
        <div className="testimonials-container d-flex justify-content-center flex-wrap mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tc" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img 
                        variant="top" 
                        src={G1} 
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }} 
                        className="rounded-circle"  
                    />
                    <hr/>
                    <Card.Body style={{ overflow: 'hidden' }} >
                        <Card.Title>
                            <h3 className="nam">Zara</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span >
                            I had a wonderful experience with the general dentist. The treatment was smooth, and they made sure I was comfortable throughout. Highly recommend for routine checkups!",
                            </span><br/><br/>
                            <em className="">Dated 20/05/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tc" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img 
                        variant="top" 
                        src={B1} 
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }} 
                        className="rounded-circle"
                    />
                    <hr/>
                    <Card.Body style={{ overflow: 'hidden' }}>
                        <Card.Title>
                            <h3 className="nam">Anto joseph</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span >
                            The cosmetic dentist transformed my smile with whitening and veneers. The results were beyond my expectations which i awesome. Truly life-changing!",
                            </span><br/><br/>
                            <em>Dated 12/07/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-duration="1000">
                <Card className="shadow-lg tc" style={{ width: '20rem', height: '400px' }}>
                    <Card.Img 
                        variant="top" 
                        src={G2} 
                        style={{ height: '150px', width: '150px', objectFit: 'cover', display: 'block', margin: '10px auto' }} 
                        className="rounded-circle" 
                    />
                      <hr/>
                    <Card.Body style={{ overflow: 'hidden' }} >
                        <Card.Title>
                            <h3 className="nam">Jeevitha</h3>
                        </Card.Title>
                        <Card.Text className="small">
                            <span >
                            "My experience with the orthodontist was great. They fixed my teeth alignment with braces, and now my smile looks perfect. Amazing care and attention to detail!</span><br/><br/>
                            <em>Dated 08/09/2024</em>
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </div>
           
        </div>
         <hr/>
         </div>
    );
}
export default Testimonials;