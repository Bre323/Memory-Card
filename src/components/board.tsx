interface BoardProps {
  pokemonList: Array<object>;
  choosePokemon: (choice: string) => void;
}

function Board({ pokemonList, choosePokemon }: BoardProps) {
  const listItems = pokemonList.map(pokemon => 
    <div
      className="img"
      key={pokemon.name}
      onClick={() => choosePokemon(pokemon.name)}
    >
      <img src={pokemon.img} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );

  return (
    <div className="board">
      {listItems}
    </div>
  )
}

export default Board;
