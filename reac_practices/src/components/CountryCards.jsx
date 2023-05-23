import React from 'react';

const CountryCard = ({ title, image, idiom}) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h2>{idiom}</h2>
        </div>
    );
};

export default CountryCard;