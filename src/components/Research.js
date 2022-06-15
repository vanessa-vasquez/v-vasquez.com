import React from 'react';
import ued from '../assets/ued.png'; 
import dashboard from '../assets/lowfi-dashboard.svg'; 
import consultation from '../assets/lowfi-consultation.svg'; 
import calendar from '../assets/lowfi-calendar.png'; 
import resources from '../assets/lowfi-resources.svg'; 

import { Carousel, CarouselItem, Container, Row, Col, Image, Figure } from 'react-bootstrap';

export default function Research(){
    return (
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col xs={12} md={10}>
                    <div className="librarian-header">Research</div>
                    <p> Determined to provide librarians with a better system to communicate with students, 
                        we created a user environment design (UED) to help us get started on a concrete way 
                        to think about a librarian’s user journey.
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Figure>
                        <Figure.Image src={ued}/>
                        <Figure.Caption>
                        A user environment design depicting a high level view of the appointment booking website - 
                        including the main purpose of the page and its functionality
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <p> Our UED condensed librarian work flow into six focus areas: a login page, a dashboard page, 
                        a consultation page, a calendar page, a library resources page, and a logout page. 
                        Its purpose was to streamline the communication between librarians and students as 
                        well as provide them with easy access to the library resources that they use in their 
                        day-to-day. <br />
                        From this UED, we were able to generate a low fidelity prototype that we used to test 
                        on our user group. 
                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Carousel>
                        <CarouselItem>
                            <Image src={dashboard} alt='Dashboard for low-fi prototype' fluid='true' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={consultation} alt='Consultation for low-fi prototype' fluid='true' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={calendar} alt='Calendar for low-fi prototype' fluid='true' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={resources} alt='Resources for low-fi prototype' fluid='true' />
                        </CarouselItem>
                    </Carousel>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}