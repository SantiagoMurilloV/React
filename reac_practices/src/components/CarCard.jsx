import React from 'react';

const  CarCard= ({ title, image,model }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Model:{model}</p>
        </div>
    );
};

export default CarCard;
