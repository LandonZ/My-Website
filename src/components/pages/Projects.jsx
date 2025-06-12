import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Kalshi Trading Strategies",
            description: [
                "Using Quantitative Analysis to find an edge within markets."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/kalshi.png",
                alt: "Kalshi Logo"
            },
            date: "March 2025 - Present"
        },
        {
            title: "Startup Business",
            description: [
                "More Info Later..."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/startup-temp.png",
                alt: "Startup Project"
            },
            date: "May 2025 - Present"
        },
        {
            title: "Quadcopter",
            description: [
                "Built a remote control Quadcopter from scratch with a team in Computer Architecture Honors.",
                "Programmed using Verilog (SV) & Python."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/quadcopter.png",
                alt: "Quadcopter Project"
            },
            githubLink: "https://github.com/LandonZ/Quadcopter",
            date: "May 2025"
        },
        {
            title: "HerdUp",
            description: [
                "In coordinance with UT Austin's council, we created a mobile app for students to find and join clubs.",
                "Developed the Sign in/up page & functionalities and Calendar with TypeScript & PostgreSQL."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/herdup.png",
                alt: "Herdup (HornsLink) Logo"
            },
            githubLink: "https://github.com/LandonZ/HerdUp",
            date: "January 2025 - May 2025"
        },
        {
            title: "Quantitative Trading Models",
            description: [
                "Developed an algorithmic VIX shorting Martingale strategy using the Kelly Criterion.",
                "Performed social analysis on the Trump Administration and Trump's Truth Social to find an edge within market reactions."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/quantitative-trading-models.png",
                alt: "Quantitative Trading Icon"
            },
            date: "February 2025 - May 2025"
        },
        {
            title: "Plate'Em",
            description: [
                "Part of a Startup, Plate'Em is a mobile app thathelps students in dorms find healthy food to eat.",
                "Orchestrated the making of the home page and Gen AI functionailities with Typescript, Flowise, and JS."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/Plate-Em.png",
                alt: "Plate'Em Logo"
            },
            githubLink: "https://github.com/LandonZ/Plate-Em-Mobile-App",
            date: "September 2024 - December 2024"
        },
        {
            title: "BCT Intern Projects",
            description: [
                "Successfully completed a migration script for a client's GPS-tracking app using Python.",
                "Created 2 Gen AI tools that helped improve BCT's internal processes (employee leave & invoice processing)."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/bahwan-cybertek.png",
                alt: "Bahwan CyberTek Logo"
            },
            githubLink: "https://github.com/LandonZ/Bahwan-CyberTek-Internship-Projects",
            date: "June 2024 - July 2024"
        },
        {
            title: "A Myth Studio - Roblox",
            description: [
                "The first business model I created with my partner, in creating video games in Roblox for revenue.",
                "Scripted backend, global and local scripts, and created the game's UI using Lua."
            ],
            image: {
                src: process.env.PUBLIC_URL + "/photos/cool-mega-obby.png",
                alt: "A Myth Studio"
            },
            githubLink: "https://github.com/LandonZ/A-Myth-Studio-Scripts",
            date: "January 2023 - May 2024"
        }
    ];

    return (
        <div className='projects-container'>
            <h1 className='projects-title'>Currently Working On..</h1>
            <div className='projects-section'>
                {projects.slice(0, 2).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <h1 className='projects-title'>Past Projects</h1>
            <div className='projects-section'>
                {projects.slice(2).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
