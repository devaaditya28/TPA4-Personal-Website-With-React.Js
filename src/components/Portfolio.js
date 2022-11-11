import React from 'react';
import bmi from "../assets/img/BMI-Calculator.png";
import movie from "../assets/img/Movie-App.png";
import daily from "../assets/img/Daily-Report.png";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { PortfolioCard } from './PortfolioCard';
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {
    const projects = [
        {
          title: "Web Development",
          description: "Sistem Pengelolaan Daily Report STMIK Bandung",
          imgUrl: daily,
        },
        {
          title: "BMI Calculator",
          description: "BMI Calculator",
          imgUrl: bmi,
        },
        {
          title: "Movie App",
          description: "Movie App With TMDB API",
          imgUrl: movie,
        },
    ];

    return (
        <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p> Berikut ini adalah beberapa Project yang telah saya buat</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Row>
                                        {
                                        projects.map((project, index) => {
                                            return (
                                                <PortfolioCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                        }
                                    </Row>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
      </section>
    )
}

export default Portfolio;