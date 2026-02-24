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
      className="flex flex-col items-center rounded-xl transition-[0.3s] bg-green-400 hover:bg-emerald-800 hover:text-slate-300"
      key={pokemon.name}
      onClick={() => choosePokemon(pokemon.name)}
    >
      <img src={pokemon.img} alt={pokemon.name} />
      <p className="text-lg font-bold">{pokemon.name}</p>
    </div>
  );

  return (
    <div className="h-[500px] w-[90%] my-0 mx-auto mt-[100px] p-6 bg-green-600 grid grid-cols-5 grid-rows-3 flex-wrap gap-[25px]">
      {listItems}
    </div>
  )
}

export default Board;
