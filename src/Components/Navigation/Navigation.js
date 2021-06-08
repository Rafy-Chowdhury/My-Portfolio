import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (

      <div style={{backgroundColor: 'crimson'}}>
        <div className="container">          
  <Navbar expand="lg">
  <Navbar.Toggle style={{backgroundColor: 'white'}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{color: 'white'}} href="#home">Home</Nav.Link>
      <Nav.Link style={{color: 'white'}} href="https://rafichowdhury115.medium.com/">Blog</Nav.Link>
      <Nav.Link style={{color: 'white'}} href="#footer">About</Nav.Link>
      <Nav.Link style={{color: 'white'}} href="#footer">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
  </div>
      </div>

    );
};

export default Navigation;