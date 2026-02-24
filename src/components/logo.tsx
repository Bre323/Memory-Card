import { GiBlindfold } from "react-icons/gi";

function Logo() {
  return (
    <div className="flex gap-5 items-center">
      <GiBlindfold className="h-20 w-20" />
      <h1 className="font-bold text-4xl">Memory Game</h1>
    </div>
  )
}

export default Logo;
