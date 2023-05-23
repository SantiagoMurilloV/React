import React from 'react';

const CounterDisplay = ({ count, style}) => {
  return <h1 style={style}>Counter: {count}</h1>;
};

export default CounterDisplay;
