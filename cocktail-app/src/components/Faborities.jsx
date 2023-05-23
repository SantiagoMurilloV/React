import React from 'react';
import DrinkItem from './DrinkItem';

function Favorites({ favoriteDrinks }) {
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            {favoriteDrinks.length === 0 ? (
                <p>No favorite drinks yet</p>
            ) : (
                <ul>
                    {favoriteDrinks.map(drink => (
                        <DrinkItem key={drink.idDrink} drink={drink} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favorites;
