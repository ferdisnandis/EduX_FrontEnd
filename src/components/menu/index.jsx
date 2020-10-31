import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo_2.png'

const Menu = () => {
    return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand scr={logo} href="/">EduX</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
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