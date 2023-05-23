import React from 'react';

export const IncrementButton = ({ onClick }) => {
    return <button onClick={onClick}> + </button>;
};



export const DecrementButton = ({ onClick }) => {
    return <button onClick={onClick}> - </button>;
};

