import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../node_modules/react-bootstrap/Navbar'
import Nav from '../node_modules/react-bootstrap/Nav'
import Container from '../node_modules/react-bootstrap/Container'
import NavDropdown from '../node_modules/react-bootstrap/NavDropdown'
import Offcanvas from '../node_modules/react-bootstrap/Offcanvas'
import { AuthContext } from './Contxt/AuthContext'
import { useContext } from 'react'
import '../src/ind.css'

const NavTemplate = () => {


   const{logUser,cartItemno}=useContext(AuthContext) 

    return (

       
    <div>
<>
<Navbar className='Navbar' bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Bambi Tea</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <div className='mainbar'>
      <Nav>

      <a className="nav-link"><Link defaultChecked to="/home"> About </Link></a>
      <a className="nav-link"><Link to="/product">Products</Link></a>
        <a className="nav-link"><Link to="/form">Register </Link></a>
        <a className="nav-link"><Link to="/logout">Logout </Link></a>
        <a className="nav-link"><Link to="/contact">Contact</Link></a>
        <a className="nav-link"><Link to="/cart">Cart <span className='cartItemNo'>{cartItemno} </span>  </Link></a> 
       <a className="nav-link">  User:<span className='text-danger'>{logUser}</span> </a> 
      
      </Nav>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
 </div>
 
    
)}

export default NavTemplate
 