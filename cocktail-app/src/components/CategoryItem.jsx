import React from 'react';

function CategoryItem({ category, onSelectCategory }) {
    const handleClick = () => {
        onSelectCategory(category.strCategory);
    };

    return (
        <li onClick={handleClick}>{category.strCategory}</li>
    );
}

export default CategoryItem;
