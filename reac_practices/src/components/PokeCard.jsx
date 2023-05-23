import React, { useState } from 'react';
import { getPokemon } from '../js/pokeApi';
import LoadingMessage from './loadingMessage';
import PokemonInfo from './PokeInfo';
import RefreshButton from './RefreshButtonSwapi';
import logo from '../pok.png';

const PokemonCard = () => {
    const style = {
        color: 'black',
        marginBottom: '10px'
    }



    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async () => {
        const data = await getPokemon();
        setPokemon(data);
    };

    const handleRefresh = () => {
        fetchPokemon();
    };

    if (!pokemon) {
        return (
            <div className="Pokemon-card">
                {/* <LoadingMessage msg={'Loading pokemon...'}  style={style} /> */}
                <RefreshButton onClick={handleRefresh} />
            </div>
        );
    }

    return (
        <div className="Pokemon-card">
            <img src={logo} alt="pokemon" />
            <PokemonInfo pokemon={pokemon} />
            <RefreshButton onClick={handleRefresh} />
        </div>
    );
};

export default PokemonCard;
