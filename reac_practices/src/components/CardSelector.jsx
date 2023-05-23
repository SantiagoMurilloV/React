import React from 'react';
import CarCard from './CarCard';
import AnimalCard from './AnimalCard';
import CountryCard from './CountryCards';
import MotorcycleCard from './motorcycleCard';
import { carData } from '../js/carData';
import { animalData } from '../js/animalData';
import { countryData } from '../js/countryData.js';
import { motorData } from '../js/motocycleData.js';

const CardSelector = ({ theme }) => {
    if (theme === 'cars') {
        return (
            <div className='card1'>
                <CarCard title={carData[0].title} image={carData[0].image} model={carData[0].model} />
                <CarCard title={carData[1].title} image={carData[1].image} model={carData[1].model} />
                <CarCard title={carData[2].title} image={carData[2].image} model={carData[2].model} />
            </div>
        );
    } else if (theme === 'animals') {
        return (
            <div className='card2'>
                <AnimalCard title={animalData[0].title} image={animalData[0].image} />
                <AnimalCard title={animalData[1].title} image={animalData[1].image} />
                <AnimalCard title={animalData[2].title} image={animalData[2].image} />
            </div>
        );
    } else if (theme === 'countries') {
        return (
            <div className='card3'>
                <CountryCard title={countryData[0].title} image={countryData[0].image} />
                <CountryCard title={countryData[1].title} image={countryData[1].image} />
                <CountryCard title={countryData[2].title} image={countryData[2].image} />
            </div>
        );
    } else if (theme === 'motorcycles') {
        return (
            <div className='card4'>
                <MotorcycleCard title={motorData[0].title} image={motorData[0].image} model={motorData[0].model} />
                <MotorcycleCard title={motorData[1].title} image={motorData[1].image} model={motorData[1].model} />
                <MotorcycleCard title={motorData[2].title} image={motorData[2].image} model={motorData[2].model} />
            </div>
        );
    }

    return null;
};

export default CardSelector;
