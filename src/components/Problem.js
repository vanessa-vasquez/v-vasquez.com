import React from 'react';
import affinity from '../assets/affinity-diagram.png';
import Figure from 'react-bootstrap/Figure'

import { Container, Row, Col } from 'react-bootstrap';

export default function Problem(){
    return (
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col xs={12} md={10}>
                    <div className="librarian-header">The Problem</div>
                    <p> Current student-librarian communication practices involve a host of different platforms 
                        to both keep track of messages and deliver resources. Most of the time, important 
                        information is spread out across multiple emails, Zoom chat records, physical 
                        notes taken during in-person meetings, and other software with note-taking 
                        capabilities - none of which are specific to the goal of student-librarian consultations. <br />
                        After speaking to different librarians, we found that there does not currently exist a 
                        centralized way for students to share information with librarians or even for students to 
                        schedule an appointment with their academic librarians. 
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <Figure>
                        <Figure.Image src={affinity}/>
                        <Figure.Caption>
                        An affinity diagram depicting the different needs 
                        librarians encounter in their day-to-day
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
        </Container>
    )
}