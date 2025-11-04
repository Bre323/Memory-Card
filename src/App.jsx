import './App.css'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'

function App() {
  return (
    <div className="wrapper">
      <Logo />
      <Score />
      <Board />
    </div>
  )
}

export default App
