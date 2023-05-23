import React from 'react';

const CharacterInfo = ({ character, style }) => {
    return (
        <div>
            <h2 style={style}>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
        </div>
    );
};

export default CharacterInfo;