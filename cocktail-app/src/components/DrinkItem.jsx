import React from 'react';

function DrinkItem({ drink }) {
    return (
        <li>
            <h3>{drink.strDrink}</h3>
            <p>{drink.strInstructions}</p>
        </li>
    );
}

export default DrinkItem;