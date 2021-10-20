import React from 'react';
import './Home.css';
import img from './../../images/header/header-img2.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCoffee,
    faHeadset,
    faPowerOff,
    faSwatchbook
} from '@fortawesome/free-solid-svg-icons';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
const Home = () => {
    const { services } = useServices();
    const { doctors } = useDoctors();
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide mt-5 caro"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={img}
                            className="d-block w-100 caro-img"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-caption d-block mt-5 caro-text">
                        <h1 className="mt-5">Complete Dental Solution</h1>
                        <p>
                            Beyond brushing, the internal factors that nourish
                            the teeth are so important: eating real foods,
                            hormonal balanced, minerals, fat-soluble vitamins,
                            and healthy fluid exchange through the teeth.
                        </p>
                    </div>
                </div>
            </div>

            <Container className="my-5">
                <Row
                    xs={1}
                    md={2}
                    lg={3}
                    className="g-4 d-flex justify-content-center"
                >
                    <Col className="card card1 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faSwatchbook}
                        />
                        <h4>10</h4>
                        <h6>Services</h6>
                    </Col>
                    <Col className="card card2 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faCheckCircle}
                        />
                        <h4>Lifetime </h4>
                        <h6>access prescription</h6>
                    </Col>
                    <Col className="card card3 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faHeadset}
                        />
                        <h4>Anytime</h4>
                        <h6>Chat with doctor</h6>
                    </Col>
                </Row>
            </Container>

            <section className="container my-5">
                <h1 className="fw-bold head-txt">
                    Find The Right <br />
                    Dental service For You
                </h1>
                <Row xs={1} md={2} lg={3} className="mx-3 g-3">
                    {services.slice(0, 3).map((service) => (
                        <Service key={service.id} service={service} />
                    ))}
                </Row>
                <Link
                    className="d-flex justify-content-end text-primary mt-5"
                    to="/services"
                >
                    See More>>
                </Link>
            </section>
            <br />
            <section className="doct-section container my-5">
                <h3 className="fw-bold head-txt">
                    We have best dentist in the town!
                </h3>
                <div className="doctors-container">
                    <div className="doctor-section">
                        {doctors.slice(0, 6).map((doctor) => (
                            <Doctor doctor={doctor} />
                        ))}
                    </div>
                </div>
                <Link
                    className="d-flex justify-content-end text-primary"
                    to="/doctor"
                >
                    See More>>
                </Link>
            </section>
        </div>
    );
};

export default Home;
