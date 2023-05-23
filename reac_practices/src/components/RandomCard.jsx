import React, { useState } from 'react';
import CardSelector from './CardSelector';

export const CardContainer = () => {
    const [theme, setTheme] = useState('cars');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className='card-themes'>
            <button onClick={() => handleThemeChange('cars')}>Carros</button>
            <button onClick={() => handleThemeChange('animals')}>Animales</button>
            <button onClick={() => handleThemeChange('countries')}>Países</button>
            <button onClick={() => handleThemeChange('motorcycles')}>Motos</button>
            <div className="card-container">
                <CardSelector theme={theme} />
            </div>
        </div>
    );
};
