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
  
  const choosePokemon = () => {}

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
