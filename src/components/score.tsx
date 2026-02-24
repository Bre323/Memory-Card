interface ScoreProps {
  score: number;
  personalRecord: number;
}

function Score({ score, personalRecord }: ScoreProps) {
  return (
    <div className="w-60 h-25 p-5 rounded-3xl bg-green-600 shadow-md font-bold text-xl">
      <p className="mb-[10px]">Personal Record: {personalRecord}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Score;
