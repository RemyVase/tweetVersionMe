import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import "./Navbar.css";

class Navbbar extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">Tweetly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/signup">S'inscrire</Nav.Link>
                    <Nav.Link href="/signin">Se connecter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbbar;