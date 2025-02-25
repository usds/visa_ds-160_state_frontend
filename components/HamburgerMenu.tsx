import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}>
                &#9776;
            </button>
            {isOpen && (
                <div style={{ position: 'absolute', top: '40px', left: '10px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1000 }}>
                    <ul style={{ listStyleType: 'none', padding: '10px' }}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/settings">Settings</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;