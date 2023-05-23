import React from 'react';

const Cocktail = ({ cocktail, style}) => {
  return (
    <div className="Cocktail-card">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} height={style} />
    </div>
  );
};

export default Cocktail;