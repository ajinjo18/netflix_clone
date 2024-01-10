import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src="/Netflix_Logo_PMS.png" alt="" />
            <img className='nav__avatar' src="/Netflix-avatar.png" alt="" />
        </div>
    );
};

export default Nav;
