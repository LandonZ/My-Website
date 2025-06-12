import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import './ContactIcons.css';

const ContactIcons = () => {
    return (
        <div className='contact-icons-container'>
            <a href='https://github.com/LandonZ' target='_blank' rel='noopener noreferrer' className='icon-button'>
                <FaGithub className='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/landonzheng/' target='_blank' rel='noopener noreferrer' className='icon-button'>
                <FaLinkedin className='icon'/>
            </a>
            <a href='mailto:lzhengbusiness@gmail.com' className='icon-button'>
                <FaEnvelope className='icon'/>
                <span className='tooltip-text'>lzhengbusiness@gmail.com</span>
            </a>
            <a href='tel:+14692778838' className='icon-button'>
                <FaPhoneAlt className='icon'/>
                <span className='tooltip-text'>(469)-277-8838</span>
            </a>
        </div>
    );
};

export default ContactIcons;