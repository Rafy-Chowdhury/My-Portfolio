import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Typed from 'react-typed';
import logo from '../../image/me.jpg';
import './TopBanner.css';

const TopBanner = () => {
    return (
       <div style={{marginTop:30}} className="container">
          
            <Row>
             <Col xs={12} md={8}>
      <h1>I'm, <br/> RAFY CHOWDHURY</h1>
      <Typed style={{fontSize: 50}}
        strings={[
            
            'Im a web Developer',
            'Im a web Designer',
            'Im a SEO Expert'
        ]}
            typeSpeed={60}
            backSpeed={60}
            loop
      />
      <br/>
      <br/>
      <br/>
      <a href="https://drive.google.com/file/d/1fDJCt5QRi4-xm2I2abJ_nlH4mVKhhPkX/view?usp=sharing" target="_blank" rel="noreferrer" className="resume">MY RESUME</a>
             </Col>
            <Col className="" xs={6} md={4}>
            
            <img className="image" src={logo} alt="Rafy Chowdhury" />
            </Col>
            </Row>
       </div>
    );
};

export default TopBanner;