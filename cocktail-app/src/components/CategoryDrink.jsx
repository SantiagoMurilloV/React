import React, { useState, useEffect } from 'react';
import DrinkItem from './DrinkItem';

function CategoryDrinks({ category }) {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinksByCategory = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
                const data = await response.json();
                setDrinks(data.drinks);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDrinksByCategory();
    }, [category]);

    return (
        <div className="category-drinks">
            <h2>{category} Drinks</h2>
            <ul>
                {drinks.map(drink => (
                    <DrinkItem key={drink.idDrink} drink={drink} />
                ))}
            </ul>
        </div>
    );
}

export default CategoryDrinks;
