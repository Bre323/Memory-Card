import { useEffect, useState } from 'react'
import './App.css'
import Logo from './components/logo'
import Board from './components/board'
import Score from './components/score'
import getPokemonList from './usePokemons'

let list = await getPokemonList();

function App() {
  let [personalRecord, setPersonalRecord] = useState(0);
  let [score, setScore] = useState(0);
  let [pokemons, setPokemons] = useState(list);
  let [addedNames, setAddedNames] = useState<string[]>([]);

  useEffect(() => {
    setPokemons(shufflePokemons());
  }, [score]);

  const shufflePokemons = () => {
    const shuffledlist = [...list];
    let currentIndex = shuffledlist.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledlist[currentIndex], shuffledlist[randomIndex]] = [
        shuffledlist[randomIndex], shuffledlist[currentIndex]
      ];
    }

    return shuffledlist;
  }

  const choosePokemon = (choice: string) => {
    let names = [...addedNames];

    if (names.includes(choice)) {
      if (score > personalRecord) {
        setPersonalRecord(score);
      }
      setScore(0);
      setAddedNames([]);
    }
    else {
      setPokemons(list);
      setScore(prevScore => prevScore + 1);
      setAddedNames([...addedNames, choice]);
    }
  }

  return (
    <div>
      <Logo />
      <div className='gameboard'>
        <Score score={score} personalRecord={personalRecord} />
        <Board pokemonList={pokemons} choosePokemon={choosePokemon} />
      </div>
    </div>
  )
}

export default App
