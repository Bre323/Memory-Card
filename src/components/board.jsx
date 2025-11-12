import '../styles/board.css';

function Board({ pokemonList }) {
  const listItems = pokemonList.map(pokemon => 
    <div className="img" key={pokemon.name}>
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
