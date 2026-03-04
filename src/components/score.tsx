interface ScoreProps {
  score: number;
  personalRecord: number;
}

function Score({ score, personalRecord }: ScoreProps) {
  return (
    <div className="w-[225px] rounded-3xl p-[15px] bg-results shadow-lg font-bold text-xl">
      <p className="mb-[10px]">Personal Record: {personalRecord}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Score;
