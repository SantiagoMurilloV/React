import React, { useState } from 'react';
import DrinkItem from './DrinkItem';

function DrinkList() {
    const [drinks, setDrinks] = useState([]);

    const fetchDrinks = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            console.log(error);
        }
    };

    if (drinks.length === 0) {
        fetchDrinks();
    }

    return (
        <div className="drink-list">
            <h2>Drink List</h2>
            <ul>
                {drinks.map(drink => (
                    <DrinkItem key={drink.idDrink} drink={drink} />
                ))}
            </ul>
        </div>
    );
}

export default DrinkList;
