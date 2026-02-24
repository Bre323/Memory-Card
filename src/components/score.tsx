interface ScoreProps {
  score: number;
  personalRecord: number;
}

function Score({ score, personalRecord }: ScoreProps) {
  return (
    <div>
      <p>Personal Record: {personalRecord}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Score;
