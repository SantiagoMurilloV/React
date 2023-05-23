import React from 'react';
import Title from './titleComponent';
import Image from './ImageComponenet';

const Card = ({ title, image }) => {
    return (
        <div className="card">
            <Title text={title} />
            <Image src={image} alt={title} />
        </div>
    );
};

export default Card;