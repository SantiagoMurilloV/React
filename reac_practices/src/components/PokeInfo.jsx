import React from 'react';

const PokemonInfo = ({ pokemon }) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
};

export default PokemonInfo;
