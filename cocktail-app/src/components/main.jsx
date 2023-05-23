import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CategoryDrinks from './CategoryDrink';
import RandomDrink from './RandomDrink';
import SearchBar from './SearchBar';
import Favorites from './Faborities';

function Main() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [favoriteDrinks, setFavoriteDrinks] = useState([]);

    const handleSelectCategory = category => {
        setSelectedCategory(category);
    };

    const handleSearch = searchTerm => { <
    };

    const handleAddFavorite = drink => {
        setFavoriteDrinks(prevFavorites => [...prevFavorites, drink]);
    };

    return (
        <main>
            <CategoryList onSelectCategory={handleSelectCategory} />
            {selectedCategory ? (
                <CategoryDrinks category={selectedCategory} />
            ) : (
                <>
                    <RandomDrink onAddFavorite={handleAddFavorite} />
                    <SearchBar onSearch={handleSearch} />
                    <Favorites favoriteDrinks={favoriteDrinks} />
                </>
            )}
        </main>
    );
}

export default Main;
