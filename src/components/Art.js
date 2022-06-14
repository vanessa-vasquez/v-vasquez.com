import React from 'react';
import '../styles/Art.css';
import art1 from '../assets/art1.png';
import art2 from '../assets/art2.png';
import art3 from '../assets/art3.png';

import { Carousel, CarouselItem, Container, Row, Col } from 'react-bootstrap';


export default function Art(){
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className='art-header'>art</div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className='art-section'>
                        <Carousel>
                            <CarouselItem>
                                <a href="https://www.thecolumbiasciencereview.com/covid-blog/tobacco-control-social-support-and-coping-during-the-pandemic-with-daniel-giovenco9908794">
                                <img
                                className="d-block w-100"
                                src={art1}
                                alt="Men smoking"
                                />
                                </a>
                            </CarouselItem>
                            <CarouselItem>
                                <a href="https://www.thecolumbiasciencereview.com/covid-blog/providing-cardiac-care-for-pregnant-women-during-covid-19-with-jennifer-haythe3272377">
                                <img
                                className="d-block w-100"
                                src={art2}
                                alt="Pregnant woman during COVID-19"
                                />
                                </a>
                            </CarouselItem>
                            <CarouselItem>
                                <a href="https://www.thecolumbiasciencereview.com/covid-blog/the-pandemics-effects-on-mass-incarceration-with-susan-sturm">
                                <img
                                className="d-block w-100"
                                src={art3}
                                alt="Incarcerated man"
                                />
                                </a>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>  
    )
}