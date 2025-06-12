import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    
    //easier to navigate
    const webpages = [
        { name: 'Home', path: '/'},
        { name: 'Profile', path: '/profile'},
        { name: 'Projects', path: '/projects'}
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
