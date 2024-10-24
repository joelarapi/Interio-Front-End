import React, { useState, useEffect } from "react";
import './LandingPage.css';

function LandingPage() {

    const [activeIndex, setActiveIndex] = useState(0);

    const logos = [
        "/logoo.png",
        "/logoo1.png",
        "/logoo2.png",
        "/logoo3.png",
        "/logoo4.png",
        "/logoo5.png",
        "/logoo7.png",
        "/logoo8.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [logos.length]);

    return (
        <div className="landing-page">
            <div className="landing-page-navbar">
                <div className="landing-page-navbar-logo">
                    <a href="#landing-page-intr"><img src="/logoLNDPG.png" alt="Logo" /></a>
                </div>
                <div className="landing-page-navbar-components">
                    <a className="landing-page-navbar-components-internal" href="#about">About Us</a>
                    <a className="landing-page-navbar-components-internal" href="#contact">Contact Us</a>
                </div>
            </div>
            <div className="landing-page-intr">
                <div className="content">
                    <h1>Presenting Interio...</h1>
                    <p>Discover the perfect furniture for your space with ease! Our app connects you to top furniture providers offering custom designs and exclusive deals. Whether you're revamping your home or office, find exactly what you need - all in one place. Let's create your dream space today!</p>
                    <a href="/login" className="content-link">Let's get started!</a>
                </div>
                <div className="living-room">
                    <img className="lamps" src="/lamps.png" alt="Lamps" />
                    <div className="sofas">
                        <div className="sofa-carpet"> 
                            <div className="sofa-plant">
                                <img className="sofa" src="/sofa.png" alt="Sofa" />
                                <img className="plant" src="/table.png" alt="Plant" />
                            </div>
                            <img className="carpet" src="/carpet.png" alt="Carpet" />
                            <img className="toy" src="/Toy.png" alt="Toy" />
                        </div>
                        <img className="small-sofa" src="/small-sofa.png" alt="Small Sofa" />
                    </div>
                </div>
            </div>
            <div className="top-brands">
                <hr/>
                <h2>Our Top Brands</h2>
                <hr/>
            </div>
            <div className="carousel-container">
                <div className="spinner-carousel">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index}`}
                            className={index === activeIndex ? 'active' : 'inactive'}
                        />
                    ))}
                </div>
            </div>
            <div id="about">
            </div>
            <div id="contact">
            </div>
        </div>
    );
}

export default LandingPage;