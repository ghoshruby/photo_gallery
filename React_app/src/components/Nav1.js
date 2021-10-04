import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/pin.jpg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function Nav1() {
    return(
   

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar">
  <Navbar.Brand as={Link} to="/">
  <img src ={logo} classname ='App-logo' alt="logo"></img> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    <Nav.Link as={Link} to ="/">Home</Nav.Link>
         <Nav.Link as={Link} to ="/about">About</Nav.Link>
         <Nav.Link as={Link} to ="/business">Business</Nav.Link>
         {/* <Nav.Link as={Link} to ="/buss"><b>Business</b></Nav.Link> */}
    </Nav>
    </Navbar.Collapse>
    <Nav.Link as={Link} to ="/">Logout</Nav.Link>
    </Navbar>
     
    
    )
}

export default Nav1;