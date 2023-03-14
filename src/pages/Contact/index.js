import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
//import "./style.css";

function Contact() {
  return(
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
              <form action="#" className="row g-3">
                <div className="form-group col-md-4">
                  <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                <div className="form-group col-md-4">
                  <input type="text" className="form-control" placeholder="Last Name"/>
                </div>
                <div className="form-group col-md-4">
                  <input type="text" className="form-control" placeholder="Phone Number"/>
                </div>
                <div className="form-group col-md-12">
                  <input type="email" className="form-control" placeholder="Email Address"/>
                </div>
                <div className="form-group col-md-12">
                  <textarea name="" className="form-control" placeholder="Enter Your Message" rows="4"></textarea>
                </div>
                <div className="form-group text-center col-md-12">
                  <button className="btn btn-brand">Send Message</button>
                </div>
              </form>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;