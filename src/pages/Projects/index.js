import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card/index"
import "./style.css";

function Projects() {
  return(
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col size="md-12">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;