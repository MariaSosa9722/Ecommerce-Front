import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import Formulario from "../Pages/Formulario";

function Header() {



  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Formulario">Fomulario</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/IndexUser">Dash</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

    </>


  )

}

export default Header