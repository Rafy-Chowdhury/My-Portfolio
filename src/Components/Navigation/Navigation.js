import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (

      <div className="fixedNav" style={{backgroundColor: 'crimson'}}>
        <div className="container">          
  <Navbar expand="lg">
  <Navbar.Toggle style={{backgroundColor: 'white'}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Link className="links" smooth to="#home">Home</Link>
    <a className="links" href="https://rafichowdhury115.medium.com/" target="_blank" rel="noreferrer">Blog</a>
    <Link className="links" smooth to="#about">About</Link>
    <Link className="links" smooth to="#contact">Contact</Link>
    </Nav>
  </Navbar.Collapse>
 </Navbar>
  </div>
      </div>

    );
};

export default Navigation;