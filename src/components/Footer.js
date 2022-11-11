import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaWhatsapp, FaGitlab } from 'react-icons/fa'
import logo from "../assets/img/LogoName.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" className="logo"/>
                </Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.instagram.com/devaaditya_/"><FaInstagram size={32} color="aquamarine"/></a>
                        <a href="https://wa.wizard.id/8575ca"><FaWhatsapp size={32} color="aquamarine"/></a>
                        <a href="https://github.com/devaaditya28"><FaGithub size={32} color="aquamarine"/></a>
                        <a href="https://gitlab.com/devaaditya28"><FaGitlab size={32} color="aquamarine"/></a>
                    </div>
                    <p>Copyright By Deva Aditya Octavian</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;