import React from "react";

export const About = (props) => {

    const SCREEN_CONSTANTS = { 
        description: "Saya Mahasiswa Teknik Informatika STMIK Bandung. Saya adalah orang yang senang dengan hal baru. Hobi saya adalah menonton film dan olahraga. Saat ini saya sedang mengikuti program Kampus Merdeka pada Skilvul Tech For Impact dengan Learning Track Front End Web Development.",
        highlights: {
            bullets: [
                "Front End Web Development",      
                "UI/UX Design",
                "Back End Web Development"
           ],
           heading: "My Highlight:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <section className='aboutme' id='about'>
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent ">
                <h2>About Me</h2>
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <a href="https://sites.google.com/view/cv-devaaditya-octavian/home">
                            <button className="btn highlighted-btn"> Get My CV </button>
                         </a>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        </section>
    )
}

export default About;