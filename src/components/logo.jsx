import '../styles/logo.css';
import { GiBlindfold } from "react-icons/gi";

function Logo() {
  return (
    <div className="logo">
      <GiBlindfold className='icon' />
      <h1>Memory Game</h1>
    </div>
  )
}

export default Logo;
