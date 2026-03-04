import { GiBlindfold } from "react-icons/gi";

function Logo() {
  return (
    <div className="flex gap-[10px] items-center">
      <GiBlindfold className="h-[40px] w-[40px]" />
      <h1 className="text-[2.3rem]">Memory Game</h1>
    </div>
  )
}

export default Logo;
