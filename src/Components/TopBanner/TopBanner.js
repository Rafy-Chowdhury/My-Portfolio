import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Typed from 'react-typed';
import logo from '../../image/me.jpg';
import ParticleBackground from '../ParticleJs/ParticleBackground';
import Navigation from '../Navigation/Navigation';
import './TopBanner.css';


const TopBanner = () => {
    return (
        <div style={{backgroundColor: "#20191a"}}>
            <ParticleBackground/>
            <Navigation/>
       <div style={{padding: "50px"}} className="container">
          
            <Row>
             <Col xs={12} md={8}>
      <h1 style={{color: "white"}}>I'm, <br/> RAFY CHOWDHURY</h1>
      <Typed style={{fontSize: "50px", color: "white"}}
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
      <a className="resume" href="https://drive.google.com/file/d/1fDJCt5QRi4-xm2I2abJ_nlH4mVKhhPkX/view?usp=sharing" target="_blank" rel="noreferrer">MY RESUME</a>
             </Col>
            <Col className="" xs={6} md={4}>
            
            <img className="image" src={logo} alt="Rafy Chowdhury" />
            </Col>
            </Row>
       </div>
       
       </div>
    );
};

export default TopBanner;