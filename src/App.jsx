import { useState } from 'react'
import './App.css'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'
import getPokemonList from './usePokemons'

let list = await getPokemonList();
console.log(list);

function App() {
  let [personalRecord, setPersonalRecord] = useState(0);
  let [score, setScore] = useState(0);

  const shufflePokemons = () => {
    const shuffledList = [...list];
    let currentIndex = shuffledList.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledList[currentIndex], shuffledList[randomIndex]] = [
        shuffledList[randomIndex], shuffledList[currentIndex]
      ];
    }

    console.log(shuffledList);
    return shuffledList;
  }

  return (
    <div className="wrapper">
      <Logo />
      <Score score={score} personalRecord={personalRecord} />
      <Board pokemonList={list} shufflePokemons={shufflePokemons}/>
    </div>
  )
}

export default App
