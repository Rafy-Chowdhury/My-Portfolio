import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WOW from 'wowjs';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpenText, faHouseUser, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';

const AboutMe = () => {
  new WOW.WOW().init();
    return (
        <div>
            <div style={{padding: "50px"}} className="container wow slideInDown" data-wow-iteration="1">
                     <div className="text-center">
                        <h1 className="styling">About Me</h1>
                    </div>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <div>
                          <FontAwesomeIcon style={{position:"relative", top:"35px", fontSize: "30px", color: "crimson"}} icon={faUser} />
                          <h2 className="ml-5">Rafy Chowdhury</h2>  
                        </div>
                        <div>
                          <FontAwesomeIcon style={{position:"relative", top:"35px", fontSize: "30px", color: "crimson"}} icon={faHouseUser} />
                          <h2 className="ml-5">Lalbagh, Dhaka</h2>  
                        </div>
                        <div>
                          <FontAwesomeIcon style={{position:"relative", top:"35px", fontSize: "30px", color: "crimson"}} icon={faEnvelopeOpenText} />
                          <h2 className="ml-5">rafichowdhury115@gmail.com</h2>  
                        </div>
                        <div>
                          <FontAwesomeIcon style={{position:"relative", top:"35px", fontSize: "30px", color: "crimson"}} icon={faPhoneAlt} />
                          <h2 className="ml-5">01752380850</h2>  
                        </div>
                        
                    </Col>

                    <Col xs={12} md={6}>
                        <h4 style={{lineHeight:"47px"}} className="mt-3"> I have more than 6 month and 10 plus projects experience about <span style={{color:"crimson"}}>MERN</span> stack web development. I can build many types of dynamic website within very short time.I have learned <span style={{color:"crimson"}}>HTML</span>,<span style={{color:"crimson"}}>CSS</span>,<span style={{color:"crimson"}}>JAVASCRIP</span>,<span style={{color:"crimson"}}>REACT JS</span>,<span style={{color:"crimson"}}>NODE JS</span>,<span style={{color:"crimson"}}>EXPRESS JS</span>,<span style={{color:"crimson"}}>MONGODB</span>,<span style={{color:"crimson"}}>FIREBASE</span> and <span style={{color:"crimson"}}>GITHUB</span> to build myself as a efficient web developer.</h4>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutMe;