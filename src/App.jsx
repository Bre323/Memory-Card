import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'
import Modal from './components/modal'
import getPokemonList from './usePokemons'

let list = await getPokemonList();

function App() {
  let [personalRecord, setPersonalRecord] = useState(0);
  let [score, setScore] = useState(0);
  let [pokemons, setPokemons] = useState(list);
  let [addedNames, setAddedNames] = useState([]);
  let [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    setPokemons(shufflePokemons());
  }, [score]);


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

    return shuffledList;
  }

  const openModal = () => {
    console.log("IT'S OVER");
  }

  const choosePokemon = (choice) => {
    let names = [...addedNames];

    if(names.includes(choice)) {
      if(score > personalRecord) {
        setPersonalRecord(score);
      }
      openModal();
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
    <div className="wrapper">
      <Logo />
      <Score score={score} personalRecord={personalRecord} />
      <Board pokemonList={pokemons} choosePokemon={choosePokemon}/>
      <Modal isOpen={modalIsOpen}>
        <h1>IT'S OVER</h1>
        <p>Personal Record: {personalRecord}</p>
        <p>Score: {score}</p>
        <button>Play Again</button>
      </Modal>
    </div>
  )
}

export default App
