import React from 'react';
import dashboard from '../assets/demo-pic.svg';
import consultation from '../assets/hifi-consultation.svg';
import calendar from '../assets/hifi-calendar.svg';

import { Carousel, CarouselItem, Container, Row, Col, Image } from 'react-bootstrap';

export default function Results(){
    return (
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col xs={12} md={10}>
                <div id="results-section">
                    <div className="project-header">
                        Results
                    </div>
                    <p> Through a dashboard built to display past and upcoming consultations as well as a built-in 
                        chat function for each consultation, our design seeks to address librarians’ need for 
                        consultation organization as well as provide a centralized space for librarians to 
                        communicate with students. Unique to each student consultation page is a space for 
                        librarians to view all the relevant details of their appointment in addition to an 
                        auto-generated Zoom link that can be viewed and access by both parties at the time of 
                        the appointment. Exchanged files and resources can also be accessed by clicking the 
                        “View shared files” button – a component to the student-librarian email exchange which 
                        librarians’ mentioned would often get lost and become tedious to access. <br />
                        Under this new system, librarians can spend more time on the task at hand and less time 
                        worrying about logistical information. 
                    </p>
                </div>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Carousel>
                        <CarouselItem>
                            <Image src={dashboard} alt='Dashboard for hi-fi prototype' fluid='true' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={consultation} className='w-100' alt='Consultation for hi-fi prototype' fluid='true' />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={calendar} className='w-100' alt='Calendar for hi-fi prototype' fluid='true' />
                        </CarouselItem>
                    </Carousel>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={12} className='text-center footer mt-5 mb-5'>
                    This project was built alongside Janelle Ponnor and Daria Manea. 
                </Col>
            </Row>
        </Container>
    )
}