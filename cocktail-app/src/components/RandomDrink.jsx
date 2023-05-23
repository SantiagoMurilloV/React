import React, { useState } from 'react';

function RandomDrink({ drinks }) {
    const [randomDrink, setRandomDrink] = useState(null);

    const getRandomDrink = () => {
        const randomIndex = Math.floor(Math.random() * drinks.length);
        setRandomDrink(drinks[randomIndex]);
    };

    return (
        <div className="random-drink">
            <h2>Random Drink</h2>
            {randomDrink ? (
                <div>
                    <h3>{randomDrink.strDrink}</h3>
                    <p>{randomDrink.strInstructions}</p>
                </div>
            ) : (
                <p>No random drink available</p>
            )}
            <button onClick={getRandomDrink}>Get Random Drink</button>
        </div>
    );
}

export default RandomDrink;
