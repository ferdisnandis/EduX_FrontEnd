import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { render } from 'react-dom';
import logo from '../../assets/img/logo_2.png';
//import './index.css';

const Menu = () => {
    return(
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/"><img src={logo} alt='Logo da EduX' style={{ width: '110px'}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
      </Navbar>
    );
}

export default Menu;