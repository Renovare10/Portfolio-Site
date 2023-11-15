import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link className='disabled'>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar;