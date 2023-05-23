export const getPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      const results = data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      const randomPokemon = results[randomIndex];
      const pokemonResponse = await fetch(randomPokemon.url);
      const pokemonData = await pokemonResponse.json();
      return {
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
      };
    } catch (error) {
      console.log(error);
    }
  };
  