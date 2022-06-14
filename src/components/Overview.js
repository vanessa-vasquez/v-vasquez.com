import React from 'react';
import '../styles/Overview.css';
import demopic from '../assets/demo-pic.svg';

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Overview(){
    return (
        <Container>
            <Row>
                <Col md={1}></Col>
                <Col xs={12} md={10}>
                    <div className='librarian-title'>
                        Appointment Booking System <br /> for Collegiate Librarians 
                    </div>
                    <div className='librarian-img'>
                        <Image src={demopic} fluid="true"/>
                    </div>
                    <span className='demo-link'>
                        Demo:
                        <a href="https://www.youtube.com/watch?v=eICjFvrFqEU">
                            https://www.youtube.com/watch?v=eICjFvrFqEU
                        </a>
                    </span> 
                </Col>
                <Col md={1}>
                    <div className='sidebar-nav d-none d-md-block'>
                        <a href="#overview-section">overview</a> <br />
                        <a href="#problem-section">problem</a> <br />
                        <a href="#research-section">research</a> <br />
                        <a href="#results-section">results</a> <br />
                        <a href="/">back</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                <div id="overview-section">
                    <div className="librarian-header">
                        Overview
                    </div>
                    <p> This improved appointment booking system enables collegiate
                        librarians to optimize their workflow by allowing them to view their student 
                        consultations in a consolidated format and develop close relationships with 
                        their students through an open, instant-messaging style of communication.
                    </p>
                </div>
                </Col>
                <Col md={1}>
                </Col>
            </Row>
        </Container>
    )
}