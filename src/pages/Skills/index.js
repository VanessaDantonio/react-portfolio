import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

function Skills() {
  return(
    <div>
      <Container style={{ marginTop: 100 }}>
        <Row>
          <Col size="md-12">
            <h1>Skills</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <div className="card flex-item" style={{ display: "inline-flex" }}>
              <h3>Frontend</h3>
              <ul>
                <li><img id="html" src="../../assets/images/html-5.svg"/> HTML5</li>
                <li><img id="css" src="../../assets/images/css3.svg"/> CSS3</li>
                <li><img id="js" src="../../assets/images/javascript.svg"/> JavaScript</li>
                <li><img id="sass" src="../../assets/images/sass.svg"/> Sass</li>
                <li><img id="bootstrap" src="../../assets/images/bootstrap.svg"/> Bootstrap</li>
                <li><img id="react" src="../../assets/images/react.svg"/> React JS</li>
                <li><img id="redux" src="../../assets/images/redux.svg"/> Redux</li>
                <li><img id="react-router" src="../../assets/images/react-router.svg"/> React Router</li>
                <li><img id="material-ui" src="../../assets/images/material-ui.svg"/> Material-UI</li>
                <li><img id="react-bootstrap" src="../../assets/images/react-bootstrap.svg"/> React Bootstrap</li>
                <li><img id="styled-components" src="../../assets/images/styled-components.svg"/> styled-components</li>
              </ul>
            </div>
            <div className="card flex-item" style={{ display: "inline-flex" }}>
              <h3>Mobile</h3>
              <ul>
                <li><img id="flutter" src="../../assets/images/flutter.svg"/> Flutter</li>
              </ul>
            </div>
            <div className="card flex-item">
              <h3>Backend</h3>
              <ul>
                <li><img id="nodejs" src="../../assets/images/nodejs.svg"/> Node.js</li>
                <li><img id="express" src="../../assets/images/express.svg"/> Express</li>
                <li><img id="nestjs" src="../../assets/images/nestjs.svg"/> NestJS</li>
              </ul>
            </div>
            <div className="card flex-item" style={{ display: "inline-block" }}>
              <h3>Hosting Platforms</h3>
              <ul>
                <li><img id="heroku" src="../../assets/images/heroku.svg"/> Heroku</li>
                <li><img id="digital-ocean" src="../../assets/images/digital-ocean.svg"/> Digital Ocean</li>
                <li><img id="github-pages" src="../../assets/images/github.svg"/> GitHub Pages</li>
              </ul>
            </div>
            <div className="card flex-item" style={{ display: "inline-block" }}>
              <h3>Programming Languages</h3>
              <ul>
                <li><img id="javascript" src="../../assets/images/javascript.svg"/> JavaScript</li>
                <li><img id="typescript" src="../../assets/images/typescript.svg"/> TypeScript</li>
                <li><img id="dart" src="../../assets/images/dart.svg"/> Dart</li>
              </ul>
            </div>
            <div className="card flex-item" style={{ display: "inline-block" }}>
              <h3>Database</h3>
              <ul>
                <li><img id="postgresql" src="../../assets/images/postgresql.svg"/> PostgreSQL</li>
                <li><img id="mongodb" src="../../assets/images/mongodb.svg"/> MongoDB</li>
                <li><img id="firebase" src="../../assets/images/firebase.svg"/> Firebase</li>
                <li><img id="mssql" src="../../assets/images/mssql.svg"/> MS-SQL</li>
              </ul>
            </div>
            <div className="card flex-item" style={{ display: "inline-block" }}>
              <h3>Version Control</h3>
              <ul>
                <li><img id="git" src="../../assets/images/git.svg"/> Git</li>
              </ul>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;