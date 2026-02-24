import { GiBlindfold } from "react-icons/gi";

function Logo() {
  return (
    <div className="flex gap-10 items-center">
      <GiBlindfold className="h-40 w-40" />
      <h1 className="font-size-4xl">Memory Game</h1>
    </div>
  )
}

export default Logo;
