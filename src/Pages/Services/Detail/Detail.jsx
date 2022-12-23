import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/service-details-promo1.png";
import serviceDetailImg2 from "../../../Images/service-details-promo2.png";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing p-5">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold">PRF For Faster Healing</h2>
                <p>
                Whether you’re currently providing medical and dental services or 
                you would like to offer both in the future, Midmark is in a unique 
                position to help. From complete medical exam and procedure rooms to
                 dental treatment and oral surgery rooms, we can be your single 
                 source for much more than just equipment. Let our experts in clinical
                  environment design assist you with  better equipment, smarter workflows 
                  and more meaningful technolog
                </p>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="healing p-5 footer-bg">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg2}
                alt="expertDentist"
                className="img-fluid pt-xs-5"
              />
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2 className="fw-bold text-white">Composite or Mercury?</h2>
                <p className="text-white">
                Whether you’re currently providing medical and dental services or you would like to offer
                 both in the future, Midmark is in a unique position to help. From complete medical exam
                  and procedure rooms to dental treatment and oral surgery rooms, we can be your single source
                   for much more than just equipment. Let our experts in clinical environment
                 design assist you with better equipment, smarter workflows and more meaningful technolog
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
