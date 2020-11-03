import React from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo_2.png'

const Menu = () => {
  const history = useHistory();

  const Sair = (event) => {
    event.preventDefault();
    localStorage.removeItem('token-edux');
    history.push('/home')
  }

  const renderMenu = () => {
    const token = localStorage.getItem('token-edux');

    if(token === null){
      return(
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
        </Nav>
        )
      } else if ( jwt_decode(token).role === 'professor'){
        return(
        <Nav>
          <Nav.Link href='/professor/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/timeline'>TimeLine</Nav.Link>
          <Nav.Link href='/professor/dashboard'>Sair</Nav.Link>
          <NavDropdown title={jwt_decode(token).nome} id="basic-nav-dropdown">
        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={event => Sair(event)}>Sair</NavDropdown.Item>
        </NavDropdown>
      </Nav>
        )
      } else {
        return(
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/timeline">TimeLine</Nav.Link>
          <NavDropdown title={jwt_decode(token).nome} id="basic-nav-dropdown">
        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={event => Sair(event)}>Sair</NavDropdown.Item>
      </NavDropdown>
        </Nav>
        )
      }
  }

    return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand scr={logo} href="/">EduX</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>

    { renderMenu() }

  </Navbar.Collapse>
</Navbar>
    )
}

export default Menu;