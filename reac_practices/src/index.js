import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import CocktailBox from './components/CocktailBox';
import CharacterCard from './components/CharacterCard.jsx'
import PokemonCard from './components/PokeCard'
import Navbar from './components/var'
import {CardContainer} from './components/RandomCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <div className='title'><h1>APIs with React</h1></div>
    <div className='apiContainers'>
      <div className='Cocktail'>
        <CocktailBox/>
      </div>
      <div className='swapi'>
        <CharacterCard/>
      </div>
      <div className='pokemon'>
        <PokemonCard/>
      </div>
    </div>
    <div>
      <CardContainer/>
    </div>
    <Navbar/>
    
      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
