import { useState } from 'react'
import './App.css'
import Logo from './components/logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
    </>
  )
}

export default App
