interface pokemon {
  name: string;
  img: string;
}

interface BoardProps {
  pokemonList: Array<pokemon>;
  choosePokemon: (choice: string) => void;
}

function Board({ pokemonList, choosePokemon }: BoardProps) {
  const listItems = pokemonList.map(pokemon => 
    <div
      className="flex flex-col items-center rounded-xl bg-background hover:bg-itemHover hover:text-itemText transition-[0.3s]"
      key={pokemon.name}
      onClick={() => choosePokemon(pokemon.name)}
    >
      <img src={pokemon.img} alt={pokemon.name} />
      <p className="text-[1.1rem] font-bold">{pokemon.name}</p>
    </div>
  );

  return (
    <div className="grid grid-rows-3 grid-cols-5 gap-[25px] flex-wrap h-[500px] w-[90%] my-0 mx-auto p-[25px] mt-[100px] bg-results rounded-xl">
      {listItems}
    </div>
  )
}

export default Board;
