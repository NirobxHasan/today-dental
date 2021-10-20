import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
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
                            <Nav.Link as={Link} to="/doctor">
                                Doctor
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About us
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            {user.displayName ? (
                                <Button variant="secondary" size="sm" disabled>
                                    {user?.displayName}
                                </Button>
                            ) : (
                                ''
                            )}
                            {user.email ? (
                                <Nav.Link onClick={logOut}>Logout</Nav.Link>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    Login/Regiser
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
