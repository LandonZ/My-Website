import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const basePath = '/My-Website';
    
    //easier to navigate
    const webpages = [
        { name: 'Home', path: `${basePath}/`},
        { name: 'Profile', path: `${basePath}/profile`},
        { name: 'Projects', path: `${basePath}/projects`}
    ];

    return (
        <header className='header'>
            <nav className='nav-links'>
                {webpages.map((item) => (
                    <Link 
                        key={item.name}
                        to={item.path}
                        className={location.pathname === item.path ? 'active' : ''}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
