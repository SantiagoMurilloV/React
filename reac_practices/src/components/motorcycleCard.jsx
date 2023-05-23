import React from 'react';

const MotorcycleCard = ({ title, image, model }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h2>{model}</h2>
    </div>
  );
};

export default MotorcycleCard;