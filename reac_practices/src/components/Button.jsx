import React from 'react';
import { randomNumber } from '../js/random';

export const Button = ({ color, text, isSuccess }) => {
  let buttonColor = color; 

  if (isSuccess && randomNumber() === 0) {
    buttonColor = 'red';
    text='succes'
  } else if (isSuccess && randomNumber() === 1) {
    buttonColor = 'green';
    text='unsucces'
  } else {
    buttonColor = color;
  }

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}>{text}</button>
    </div>
  );
};