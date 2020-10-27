import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo_2.png';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src={logo} alt='Logo da EduX' style={{ width: '110px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
        </Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
        
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Menu;