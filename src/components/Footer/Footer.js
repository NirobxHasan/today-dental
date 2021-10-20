import React from 'react';
import {
    Col,
    Container,
    FormControl,
    InputGroup,
    Row,
    Button
} from 'react-bootstrap';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Row xs={1} sm={1} md={2} lg={4}>
                <Col className="d-flex justify-content-center align-items-center">
                    <Container>
                        <div>
                            <h1 className="brand-name">Today-Dentist</h1>
                            <p>
                                There is no weaponry in the feminine armoury to
                                which men are so vulnerable as they are to a
                                smile
                            </p>
                        </div>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h4 className="title">Company</h4>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Event</a>
                        <a href="">Instructor</a>
                        <a href="">Become a Dentist</a>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h4 className="title">Platform</h4>
                        <a href="">Browse Library</a>
                        <a href="">Library</a>
                        <a href="">Partner</a>
                        <a href="">News & Blogs</a>
                        <a href="">FAQ</a>
                    </Container>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Container>
                        <h4 className="title">Subscribe</h4>
                        <InputGroup className="mb-3">
                            <FormControl
                                className="input-field"
                                placeholder="your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="btn-color" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
