import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroMainbg from '../../../Images/hero-main-bg.png';
import injectTool from '../../../Images/inject-tool.png';
const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Dr. Nathan Currie</h1>
                        </div>
                        <div className="breadcrumb-nav">
                            <a href="/" className="text-decoration-none text-white">Home Page</a>
                            <span href="/" className="text-decoration-none text-white ml-2">welcome </span>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                            <div className="banner-animate">
                                <img src={HeroMainbg} alt="" className="img-fluid" />
                                <img src={injectTool} alt="" className="img-fluid a5" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;