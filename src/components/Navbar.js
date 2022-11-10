import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/LogoName.png"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                        href="#home" 
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link 
                        href="#about" 
                        className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link 
                        href="#portfolio"
                        className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('portfolio')}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link 
                        href="#blog" 
                        className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('blog')}>
                            Blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;