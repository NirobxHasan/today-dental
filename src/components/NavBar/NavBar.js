import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './NavBar.css';
const NavBar = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="nav-section">
            <Navbar
                collapseOnSelect
                expand="lg"
                className="navbar"
                variant="dark"
                fixed="top"
            >
                <Container>
                    <Navbar.Brand href="#home">Today-Dental</Navbar.Brand>
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
                            <Nav.Link as={Link} to="/login">
                                {user ? '' : 'Login/Regiser'}
                            </Nav.Link>
                            <Nav.Link onClick={logOut}>
                                {user ? 'Logout' : ''}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
