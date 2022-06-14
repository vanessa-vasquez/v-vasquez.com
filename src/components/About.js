import React from 'react'; 
import '../styles/About.css'; 
import pic from '../assets/vanessa-picture.png';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { Envelope, Github } from 'react-bootstrap-icons';

export default function About() {
    return (
        <Container>
            <Row>
                <Col sm={12} md={11}>
                    <div id="about-section">
                        <div>
                            <span className="title">hey! i'm vanessa</span>
                            <div className="bio">
                                i’m a rising senior and CS major at Columbia University
                                with a passion for creative coding and all things UI/UX.
                            </div>

                            <div className="technologies">
                                here are some of the technologies i've been playing around with:

                                <div className="lists">
                                    <div className="list-1">
                                        <ul>
                                        <li>HTML/CSS</li>
                                        <li>JavaScript (ES6+)</li>
                                        <li>Java</li>
                                        </ul>
                                    </div>
                                    <div className="list-2">
                                        <ul>
                                        <li>Python</li>
                                        <li>React</li>
                                        <li>Flask</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container shadow-3 d-none d-sm-none d-md-block">
                            <Image src={pic} alt="Vanessa" fluid="true"/>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={1}>
                    <div className="contact">
                        <a href="https://github.com/vanessa-vasquez"><Github className="github-icon" size={40} /></a> <br />
                        <a href="mailto:vv2317@columbia.edu"><Envelope className="mail-icon" size={40} /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}