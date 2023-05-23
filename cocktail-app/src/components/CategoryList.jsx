import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList({ categories, onSelectCategory }) {
    return (
        <div className="category-list">
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <CategoryItem key={category.strCategory} category={category} onSelectCategory={onSelectCategory} />
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
