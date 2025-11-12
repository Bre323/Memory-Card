//const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
//  .then(res => res.json());

/*
const pokemonData = {
  name: pokemon.name,
  img: pokemon.sprites.front_default,
};
*/

async function getPokemonList() {
  let pokemonList = [];

  for (let i = 1; i <= 16; i++) {
    let index = Math.ceil(Math.random() * 150);
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then(res => res.json());

    let pokemonData = {
      name: pokemon.name,
      img: pokemon.sprites.front_default,
    };

    pokemonList.push(pokemonData);
  }

  return pokemonList;
}

export default getPokemonList;
