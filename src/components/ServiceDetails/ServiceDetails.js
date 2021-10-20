import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetails.css';
const ServiceDetails = () => {
    const { id } = useParams();

    const { services } = useServices();
    const [service, setService] = useState({});
    useEffect(() => {
        const detail_service = services.find((service) => service.id === id);
        setService(detail_service);
    }, [services]);

    return (
        <div className="container my-5 details">
            <Container>
                <Card style={{ width: '50rem' }} className="mx-auto mt-5">
                    <Card.Img variant="top" src={service?.img} />
                    <Card.Body>
                        <Card.Text>
                            <h1>{service?.service_name}</h1>
                            <p>{service?.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ServiceDetails;
