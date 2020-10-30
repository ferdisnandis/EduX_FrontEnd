import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { render } from 'react-dom';
import logo from '../../assets/img/logo_2.png';
//import './index.css';

const Menu = () => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/"><img src={logo} alt='Logo da EduX' style={{ width: '100px'}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nr-auto">
              
            </Nav>
            <Nav>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default Menu;