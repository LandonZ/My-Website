import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        {
            src: process.env.PUBLIC_URL + "/photos/landon-headshot.jpg",
            alt: "Landon's Headshot"
        },
        {
            src: process.env.PUBLIC_URL + "/photos/landon-hockey2.png",
            alt: "Landon Playing Hockey 2"
        },
        {
            src: process.env.PUBLIC_URL + "/photos/landon-cruise.jpg",
            alt: "Landon on an Alaska Cruise Ship"
        },
        {
            src: process.env.PUBLIC_URL + "/photos/landon-hockey.JPG",
            alt: "Landon Playing Hockey"
        },
        {
            src: process.env.PUBLIC_URL + "/photos/landon-BCT.png",
            alt: "Landon at BCT"
        },
        {
            src: process.env.PUBLIC_URL + "/photos/landon-valedictorian.png",
            alt: "Landon receiving Valedictorian award"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    });

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='about-container'>
            <h1 className='about-title'>A Little More About Me...</h1>
            
            <a 
                className='resume-link'
                href={process.env.PUBLIC_URL + "/my-resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
            >
                Click here for my resume!
            </a>

            <div className='profile-content'>
                <div className='personal-info'>

                    <div className='profile-image'>
                        <div className="slideshow-container">
                            <button className="slide-arrow prev" onClick={prevImage}>&lt;</button>
                            <img 
                                src={images[currentImageIndex].src} 
                                alt={images[currentImageIndex].alt}
                                className="slide-image"
                            />
                            <button className="slide-arrow next" onClick={nextImage}>&gt;</button>
                            <div className="slide-dots">
                                {images.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <ul className='info-list'>
                        <li>I love to travel- I've been to {'>'}16.5 countries.</li>
                        <li>I enjoy reading books. My favorite ones are From Ant to Eagle and Echo!</li>
                        <li>I'm a proud gambler (not really). My favorite methods of gambling are Choctaw and Poker.</li>
                        <li>My favorite music genres are Hip Hop, Melodic Rap, and C-Pop.</li>
                        <li>Also, my favorite color's green, if you haven't already noticed.</li>
                    </ul>
                </div>

                <div className="skills-container">
                    <h2 className='skills-title'>Technical Skills</h2>
                    <div className='skills-grid'>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/java.png"} alt="Java" />
                            <span>Java</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/C.png"} alt="C" />
                            <span>C</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/c++.png"} alt="C++" />
                            <span>C++</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/python.png"} alt="Python" />
                            <span>Python</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/javascript.png"} alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/typescript.png"} alt="TypeScript" />
                            <span>TypeScript</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/html.png"} alt="HTML" />
                            <span>HTML</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/css.png"} alt="CSS" />
                            <span>CSS</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/r.png"} alt="R" />
                            <span>R</span>
                        </div>
                        <div className='skill-item'>
                            <img src={process.env.PUBLIC_URL + "/photos/sql.png"} alt="SQL" />
                            <span>SQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
