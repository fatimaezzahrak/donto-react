import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    return (
        <>
            <section className="dentist-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-dentist-details">
                                <h2>Dr. urhoud <span>(DMD, MS, DICOI)</span></h2>
                                <p>We are here to best serve our customers.</p>
                            </div>
                            <div className="dentist-award">
                                <h3>Dental Associations</h3>
                                <ul className="p-0">
                                    <li>morrocan Dental Association</li>
                                    <li>Academy of General Dentistry</li>
                                    <li>CDental Society</li>
                                    <li>Academy of General Dentistry</li>
                                    <li>morrocan Association of Women Dentists</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="dentist-profile text-center">
                                <div className="profile-img"></div>
                                <p>Name: <strong>nourlhouda</strong></p>
                                <p>Specialization: <strong>Orthodontics</strong></p>
                                <p>Phone: <strong>0602157713</strong></p>
                                <div className="doctors-social">
                                    <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="achivement-img-bg"></div>
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Dentist</h2>
                            <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patientse</p>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Details;