import React, { useState } from 'react';
import { GetCocktails } from '../js/apiCocktailsFetch'; 
import Cocktail from './Cocktail';

const CocktailCard = () => {
  const [cocktails, setCocktails] = useState([]);
  const [currentCocktailIndex, setCurrentCocktailIndex] = useState(0);

  const fetchCocktailData = async () => {
    const data = await GetCocktails();
    setCocktails(data.drinks);
    setCurrentCocktailIndex(0);
  };

  const handleRefresh = async () => {
    const nextIndex = currentCocktailIndex + 1;
    if (nextIndex < cocktails.length) {
      setCurrentCocktailIndex(nextIndex);
    } else {
      await fetchCocktailData();
    }
  };

  if (cocktails.length === 0) {
    fetchCocktailData();
    return <p>Loading cocktails...</p>;
  }

  const cocktail = cocktails[currentCocktailIndex];

  return (
    <div>
      <Cocktail cocktail={cocktail}/>
      <button onClick={handleRefresh}>Actualizar</button>
    </div>
  );
};

export default CocktailCard;
