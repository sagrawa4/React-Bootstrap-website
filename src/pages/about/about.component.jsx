import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile from "../../assets/img/profile/Shruti_photo.jpg";
import Button from 'react-bootstrap/Button'
import "./about.style.css";


const About =() => {
    return (
        <div id='about'>
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image  className="profile justify-content-end" alt="profile"  src={profile} thumbnail />
                        </Row>
                    </Col>
                    <Col  xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Shruti Agrawal</strong>
                <br />I am a Full Stack Web Developer with React.js ans Spring boot frameworks as my tech stack.
                <br />
                I am currently pursuing my Masters in Computer Science from SUNY Binghamton University.
                <br />
                I have experience working with front end frameworks such as React, Express and developing microservices backend in Java.
                <br />
                I have experience in deploying services on AWS cloud as well as working with Oracle database in AWS. 
                <br /> I love learning new technologies, even though I might not have directory experience in some required technologies I am happy to learn them.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1n9R0a56k6MfSftzaZTzkfiQ3JYWBma99Gf0y1MIig-c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sagrawa4" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/shruti-agrawal-9b226310a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
  
}

export default About;
