import React from 'react';

const AnimalCard = ({ title, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default AnimalCard;