import '../styles/score.css';

function Score({ score, personalRecord }) {
  return (
    <div className="score">
      <p>Personal Record: {personalRecord}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Score;
