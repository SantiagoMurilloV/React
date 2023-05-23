// Componente principal
import React from 'react';


export const Image = ({ src, alt, descripcion, round }) => {
    const style = {
        borderRadius: round ? '100%' : '0'
    };

    return (
        <div>
            <img src={src} alt={alt} style={style} />
            <p>{descripcion}</p>
        </div>
    );
}