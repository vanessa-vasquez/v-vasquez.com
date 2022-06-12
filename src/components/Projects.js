import React from 'react';
import '../styles/Projects.css';
import { useEffect } from 'react';
import Holder from 'holderjs';
import { run as runHolder } from 'holderjs/holder';

import { NavLink } from 'react-router-dom'; 
import { Carousel, CarouselItem, Container, Row, Col } from 'react-bootstrap';
import { Github, Youtube } from 'react-bootstrap-icons';

export default function Projects(){
    useEffect(() => { runHolder('image-class-name'); });
    Holder.addTheme("portfolio", {
        bg: "#faf7f2",
        fg: "#2b2522",
    });
    const projects = {
        "Snack Search":{
            "title": "Snack Search",
            "desc": "A website that allows users to search for and randomly generate a recipe based on their preferences.",
            "tools": "HTML/CSS, JavaScript, Flask, PostgreSQL, Spoonacular API",
            "youtube": "https://www.youtube.com/watch?v=ZE_9oMm58qU",
            "github": null,
            "read": null
        },
        "Your Occasional Flower":{
            "title": "Your Occasional Flower",
            "desc": "A website that allows users to find the meaning behind different types of flowers and the best occasions suited to them.",
            "tools": "HTML/CSS, JavaScript, Flask",
            "youtube": "https://youtu.be/XOAU2Lanco4",
            "github": null,
            "read": null
        },
        "the crush map.":{
            "title": "the crush map.",
            "desc": "A web app for visualizing student crushes in the CU community.",
            "tools": "React, Bootstrap, CytoscapeJS, Firebase",
            "youtube": null,
            "github": "https://github.com/vanessa-vasquez/the-crush-map",
            "read": null
        },
        "Collegiate Librarians":{
            "title": "Appointment Booking System for Collegiate Librarians",
            "desc": "A UX case study investigating solutions for an improved appointment booking system for collegiate librarians.",
            "tools": "Balsamiq, Figma",
            "youtube": null,
            "github": null,
            "read": "/collegiate-librarians"
        }
    }
    return (
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <div id='project-section'>
                        <div className='header'>projects</div>
                        <Carousel>
                            {Object.keys(projects).map((key, i) => (
                                <CarouselItem key={key}>
                                    <img
                                    className="d-block w-100"
                                    src="holder.js/100px450?text= &theme=portfolio&font=Epilogue"
                                    alt={projects[key]["title"]}
                                    />
                                    <Carousel.Caption>
                                        <div className='project-title'>{projects[key]["title"]}</div>
                                        <div className='description'>{projects[key]["desc"]}</div>
                                        <div className='tools'>{projects[key]["tools"]}</div>
                                        {projects[key]["youtube"] != null &&
                                            <a href={projects[key]["youtube"]}><Youtube className="youtube-icon" size={40} /></a>  
                                        }
                                        {projects[key]["github"] != null &&
                                            <a href={projects[key]["github"]}><Github className='github-icon-2' size={40} /></a>
                                        }
                                        {projects[key]["read"] != null &&
                                           <NavLink className="read-more-btn" to={projects[key]["read"]}>Read More</NavLink>
                                        }
                                    </Carousel.Caption>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>  
        </>
    )
}