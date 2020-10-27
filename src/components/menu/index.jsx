import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Edu X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastrar">cadastrar</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Menu;