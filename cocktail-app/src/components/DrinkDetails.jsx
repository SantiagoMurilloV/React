import React from 'react';

function DrinkDetails({ drink }) {
    return (
        <div className="drink-details">
            <h2>Drink Details</h2>
            <h3>{drink.strDrink}</h3>
            <p>{drink.strInstructions}</p>
            <h4>Ingredients:</h4>
            <ul>
                {Object.entries(drink)
                    .filter(([key, value]) => key.includes('strIngredient') && value)
                    .map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
        </div>
    );
}

export default DrinkDetails;
