import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
    return (
        <div id="footer" className="footer  mt-5">
            <Row>
                <Col className="text-center" xs={12} md={12}>
                


                <div>
                    
                <a className="icons" href="https://web.facebook.com/capricious.jaran" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                <a className="icons" href="https://github.com/Rafy-Chowdhury" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>

                <a className="icons" href="https://www.linkedin.com/in/rafy-chowdhury-0954961ba/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                
                
                
                </div>
                
                <h3> <i>Created by <span style={{color:"crimson"}}>RAFY CHOWDHORY</span></i></h3>
                
                </Col>
            </Row>
            
        </div>
    );
};

export default Footer;