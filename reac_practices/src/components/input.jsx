import React, { useState } from 'react';


export const InputComponent = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Valor del input: {inputValue}</p>
      </div>
    );
  };