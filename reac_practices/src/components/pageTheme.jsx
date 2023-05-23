// Componente principal
import React  from 'react';


export const Page = ({ theme })=> {
    const style = {
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '20px',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={style}>
            <h1>Theme of page </h1>
            <p>The current theme is: {theme}</p>
        </div>
    );
}