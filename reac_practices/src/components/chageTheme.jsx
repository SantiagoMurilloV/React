import React, { useState } from 'react';
import { Page } from './pageTheme';


export const ChangeTheme = () => {
    const [theme, setTheme] = useState('light');

    const CTheme = () => {
        setTheme(prevtheme => (prevtheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <Page theme={theme} />
            <button onClick={CTheme}>
                change theme to {theme === 'light' ? 'dark' : 'claro'}
            </button>
        </div>
    );
}