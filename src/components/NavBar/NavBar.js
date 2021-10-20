import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="navbar"
                variant="dark"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#home">Today-Clinic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/services">
                                Our service
                            </Nav.Link>
                            <Nav.Link href="#pricing">Doctor</Nav.Link>
                            <Nav.Link href="#pricing">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link href="#deets">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
