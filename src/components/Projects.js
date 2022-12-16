import React from "react";
import "../styles/Projects.css";

import { NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Display, Github, Youtube } from "react-bootstrap-icons";

import Snack_Search from "../assets/Snack_Search.svg";
import Your_Occasional_Flower from "../assets/Your_Occasional_Flower.svg";
import Crush_Map from "../assets/Crush_Map.svg";
import Library_Smells from "../assets/Library_Smells.svg";
import Glitch_Logo from "../assets/glitch.svg";

export default function Projects() {
  const projects = {
    "magenta-synth": {
      title: "magenta-synth",
      image: null,
      desc: "A basic synthesizer where users are able to create simple musical pieces and choose sections of these pieces to automatically compose using machine learning",
      tools: "HTML/CSS, JavaScript, Web Audio API, Magenta API",
      youtube: null,
      github: "https://github.com/vanessa-vasquez/magenta-synth",
      read: null,
      open: null,
      glitch: "https://magenta-synth.glitch.me/",
    },
    "Snack Search": {
      title: "Snack Search",
      image: Snack_Search,
      desc: "A website that allows users to search for and randomly generate a recipe based on their preferences.",
      tools: "HTML/CSS, JavaScript, Flask, PostgreSQL, Spoonacular API",
      youtube: "https://www.youtube.com/watch?v=ZE_9oMm58qU",
      github: null,
      read: null,
      open: null,
      glitch: null,
    },
    "Your Occasional Flower": {
      title: "Your Occasional Flower",
      image: Your_Occasional_Flower,
      desc: "A website that allows users to find the meaning behind different types of flowers and the best occasions suited to them.",
      tools: "HTML/CSS, JavaScript, Flask",
      youtube: "https://youtu.be/XOAU2Lanco4",
      github: null,
      read: null,
      open: null,
      glitch: null,
    },
    "the crush map.": {
      title: "the crush map.",
      image: Crush_Map,
      desc: "A web app for visualizing student crushes in the CU community.",
      tools: "React, Bootstrap, CytoscapeJS, Firebase",
      youtube: null,
      github: "https://github.com/vanessa-vasquez/the-crush-map",
      read: null,
      open: "https://cu-crush-map.herokuapp.com/",
      glitch: null,
    },
    "Library Smells": {
      title: "Library Smells",
      image: Library_Smells,
      desc: "A funny web app for tracking the smells in the libraries in the CU community.",
      tools: "React, Bootstrap, SightEngine Text Moderation API, Firebase",
      youtube: null,
      github: "https://github.com/vanessa-vasquez/cu-library-smells",
      read: null,
      open: "https://cu-library-smells.herokuapp.com/",
      glitch: null,
    },
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="my-projects-header">projects</div>
        </Col>
      </Row>
      <Row xs={1} md={2}>
        {Object.keys(projects).map((key, i) => (
          <Col className="mx-auto" key={key}>
            <div className="my-projects-section">
              <Card>
                <Card.Body>
                  {projects[key]["image"] != null ? (
                    <Card.Img src={projects[key]["image"]} />
                  ) : (
                    <div className="card-proj-title">
                      {projects[key]["title"]}
                    </div>
                  )}
                  <div className="overlay">
                    <Card.Title className="project-title">
                      {projects[key]["title"]}
                    </Card.Title>
                    <Card.Text className="description">
                      {projects[key]["desc"]}
                    </Card.Text>
                    <Card.Text className="tools">
                      {projects[key]["tools"]}
                    </Card.Text>
                    {projects[key]["youtube"] != null && (
                      <a href={projects[key]["youtube"]}>
                        <Youtube className="youtube-icon" size={40} />
                      </a>
                    )}
                    {projects[key]["github"] != null && (
                      <a href={projects[key]["github"]}>
                        <Github className="github-icon-2" size={40} />
                      </a>
                    )}
                    {projects[key]["read"] != null && (
                      <NavLink
                        className="read-more-btn"
                        to={projects[key]["read"]}
                      >
                        Read More
                      </NavLink>
                    )}
                    {projects[key]["open"] != null && (
                      <a href={projects[key]["open"]}>
                        <Display className="display-icon" size={40} />
                      </a>
                    )}
                    {projects[key]["glitch"] != null && (
                      <a href={projects[key]["glitch"]}>
                        <Image
                          src={Glitch_Logo}
                          className="glitch-icon"
                          alt="Glitch icon"
                          fluid="true"
                        />
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
