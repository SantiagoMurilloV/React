import React from 'react';

export const User = ({ name, age, email }) => {
    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {name}</p>
            <p>Edad: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

