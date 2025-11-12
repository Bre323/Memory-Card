import '../styles/board.css';

function Board({ pokemonList, shufflePokemons }) {
  const listItems = pokemonList.map(pokemon => 
    <div className="img" key={pokemon.name} onClick={shufflePokemons}>
      <img src={pokemon.img} alt={pokemon.name} />
    </div>
  );

  return (
    <div className="board">
      {listItems}
    </div>
  )
}

export default Board;
