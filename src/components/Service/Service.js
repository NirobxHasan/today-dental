import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, service_name, description, img } = service;
    return (
        <div>
            <Col className="d-flex justify-content-center my-3">
                <Card style={{ width: '20rem' }}>
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{service_name}</Card.Title>
                        <div>
                            <Card.Text>
                                {description.slice(0, 95)} ......{' '}
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Link className="link-btn" to={`/service/${id}`}>
                        <button className="cart-btn mx-auto">Details</button>
                    </Link>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
