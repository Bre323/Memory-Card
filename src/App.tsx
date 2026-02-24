import { useEffect, useState } from 'react'
import './App.css'
import Logo from './components/logo'
import Board from './components/board'
import Score from './components/score'
import Modal from './components/modal'
import getPokemonList from './usePokemons'

let list = await getPokemonList();

function App() {
  let [personalRecord, setPersonalRecord] = useState(0);
  let [score, setScore] = useState(0);
  let [pokemons, setPokemons] = useState(list);
  let [addedNames, setAddedNames] = useState<string[]>([]);
  let [modalIsOpen, setModalIsOpen] = useState(false);

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

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const choosePokemon = (choice: string) => {
    let names = [...addedNames];

    if (names.includes(choice)) {
      if (score > personalRecord) {
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
    <div>
      <Logo />
      <div className='flex flex-col items-center my-[100px] mx-auto p-6 bg-green-700'>
        <Score score={score} personalRecord={personalRecord} />
        <Board pokemonList={pokemons} choosePokemon={choosePokemon} />
      </div>
      <Modal isOpen={modalIsOpen}>
        <h1 className='mb-[20px] font-bold text-[40px]'>IT'S OVER</h1>
        <p className='text-[33px]'>Personal Record: {personalRecord}</p>
        <p className='text-[33px]'>Score: {score}</p>
        <button className='h-[50px] w-[125px] mt-[20px] rounded-lg bg-green-700 font-bold text-[1.2rem] cursor-pointer transition-[0.3s] hover:bg-slate-300 active:scale-90' onClick={closeModal}>Play Again</button>
      </Modal>
    </div>
  )
}

export default App
