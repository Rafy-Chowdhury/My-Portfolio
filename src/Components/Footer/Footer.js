import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import fb from '../../image/fb.png';
import github from '../../image/github.png';
import linkedin from '../../image/in.png';

const Footer = () => {
    return (
        <div id="footer" className="container footer  mt-5">
            <Row>
                <Col className="text-center" xs={12} md={12}>
                <h2>MY PORTFOLIO</h2>
                <div>
                <a href="https://web.facebook.com/capricious.jaran" target="_blank" rel="noreferrer"><img src={fb} alt="logo" /></a>
                <a href="https://github.com/Rafy-Chowdhury" target="_blank" rel="noreferrer"><img src={github} alt="logo" /></a>
                <a href="https://www.linkedin.com/in/rafy-chowdhury-0954961ba/" target="_blank" rel="noreferrer"><img src={linkedin} alt="logo" /></a>
                
                
                
                </div>
                <h2>Copyright &copy;2021</h2>
                <h2>Designed By: RAFY CHOWDHORY</h2>
                
                </Col>
            </Row>
            
        </div>
    );
};

export default Footer;