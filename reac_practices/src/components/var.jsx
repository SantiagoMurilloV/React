import React, { useState } from 'react';
import {NavItem} from './formatNvar'
const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <nav className="navbar">
            <ul>
                <NavItem
                    text="RED"
                    selected={selectedOption === 'RED'}
                    onClick={() => handleOptionClick('RED')}
                />
                <NavItem
                    text="GREEN"
                    selected={selectedOption === 'GREEN'}
                    onClick={() => handleOptionClick('GREEN')}
                />
                <NavItem
                    text="BLUE"
                    selected={selectedOption === 'BLUE'}
                    onClick={() => handleOptionClick('BLUE')}
                />
            </ul>
            <div className={`highlight ${selectedOption}`} />
        </nav>
    );
};


export default Navbar;
