import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Amex from "../../assets/img/experience/Amex.svg.png";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Container>
          <Tilt options={{ max: 25 }}>
          <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_Amex} alt="Amex logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Engineer</strong>
                    <br />
                    <strong>Technologies:</strong> React framework, HTML, CSS, 
                    <br />
                    <strong>Duration:</strong> Dec 2015 - Dec 2018
                    <br/>
                    <strong> Job Profile:</strong>
                    <ul className="text-left">
                      <li><strong>Built </strong>frontend Web Application by integrating with 
                      back-end services and functionality.</li>
                      <li><strong>Worked</strong> as a core member of an agile team that drives merchant 
                      story analysis and elaboration, design and development of web applications.
                      </li>
                      <li><strong>Collaborated </strong> closely with product managers, backend and frontend engineers 
                      to implement versatile solutions to web development problems.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
                </Card.Body>
            </Card>
            </Tilt>
        </Container>   
     </div>
  );
};

export default Experience;