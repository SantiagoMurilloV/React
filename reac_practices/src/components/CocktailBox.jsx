import React from 'react';
import CocktailCard from './CocktailCards';

const CocktailBox = () => {
  const handleClick = () => {
    console.log('Mensaje de título');
  };

  return (
    <div >
        <CocktailCard  onClick={handleClick}/>
 
    </div>
   
  );
};

export default CocktailBox;