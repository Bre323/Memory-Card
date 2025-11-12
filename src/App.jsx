import './App.css'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'
import getPokemonList from './usePokemons'

let list = await getPokemonList();
console.log(list);

function App() {
  return (
    <div className="wrapper">
      <img src={list[2].img} alt={list[2].name} />
      <Logo />
      <Score />
      <Board />
    </div>
  )
}

export default App
