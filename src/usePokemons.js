async function getPokemonList() {
  let pokemonList = [];
  const addedNames = new Set();

  for (let i = 1; pokemonList.length < 15; i++) {
    let index = Math.ceil(Math.random() * 150);
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then(res => res.json());

    if(addedNames.has(pokemon.name)) {
      continue;
    }

    let pokemonData = {
      name: pokemon.name,
      img: pokemon.sprites.front_default,
    };

    pokemonList.push(pokemonData); 
    addedNames.add(pokemon.name);
  }

  return pokemonList;
}

export default getPokemonList;
