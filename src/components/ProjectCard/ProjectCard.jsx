import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, githubLink, date }) => {
    const renderTitle = () => {
        if (githubLink) {
            return (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-title">
                    {title}
                </a>
            );
        }
        return <h2 className="project-title">{title}</h2>;
    };

    return (
        <div className="project-card">
            <div className="project-content">
                <div className="project-info">
                    {renderTitle()}
                    {date && <div className="project-date">{date}</div>}
                    <ul className="project-description">
                        {description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-image">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 