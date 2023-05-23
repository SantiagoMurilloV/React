
export const  GetCocktails = async () => {
    try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}



