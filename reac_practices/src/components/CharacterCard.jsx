import React, { useState } from 'react';
import { GetCharacters } from '../js/swapi.js';
import CharacterInfo from './CharacterInfoSwapi';
import CharacterImage from './CharacterImageSwapi';
import RefreshButton from './RefreshButtonSwapi';
import logo from '../Star-Wars.png'



const CharacterCard = () => {

    const infoStyle = {
        color: '#f6b400',
        marginBottom: '10px'
    };


    const [character, setCharacter] = useState({});

    const fetchCharacterData = async () => {
        const data = await GetCharacters();
        if (data && data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setCharacter(data.results[randomIndex]);
        }
    };

    useState(() => {
        fetchCharacterData();
    }, []);

    const handleRefresh = () => {
        fetchCharacterData();
    };

    return (
        <div className="Character-card">
            <CharacterImage logo={logo} size={'50px'} height={'100px'}  />
            <CharacterInfo character={character} style={infoStyle}/>
            <RefreshButton onClick={handleRefresh} />
        </div>
    );
};

export default CharacterCard;
