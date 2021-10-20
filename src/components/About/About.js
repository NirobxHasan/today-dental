import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';
import welcomeimg from '../../images/about.jpg';
const About = () => {
    return (
        <div className="about mb-5">
            <h1 className="fw-bold">About</h1>

            <Row xs={1} sm={1} md={1} lg={2} className="m-3">
                <Col className="p-3 ">
                    <div>
                        <h6 className="text-color-brand">Our Story</h6>
                        <h1>
                            Our Mission is to Provide a World‑class Dental
                            Solution.
                        </h1>
                        <p>
                            Every mountain top is within reach if you just keep
                            climbing
                        </p>
                    </div>
                </Col>
                <Col className="">
                    <iframe
                        className="video"
                        width="90%"
                        height="300"
                        src="https://www.youtube.com/embed/slDMfIcRjxM"
                    ></iframe>
                </Col>
            </Row>

            <div className="mt-5">
                <Row xs={1} sm={1} md={1} lg={2} className="m-3">
                    <Col className="">
                        <img
                            className="p-2"
                            width="90%"
                            src={welcomeimg}
                            alt=""
                        />
                    </Col>
                    <Col className="p-3 ">
                        <div>
                            <h3 className="text-color-brand">
                                Welcome to Today Dentist
                            </h3>

                            <p style={{ fontSize: '14px' }}>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. <br /> <br />
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem corporis suscipit
                                laboriosam nisi ut aliquid ex ea commodi
                                consequatur?
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;
