import { useAppSelector } from "../../hooks/hooks";

const GameStatus = () => {
  const { gameStatus, score } = useAppSelector((state) => {
    return {
      gameStatus: state.board.gameStatus,
      score: state.board.score,
    };
  });
  return (
    <div>
      <div>
        Game Status: <span data-status={gameStatus}>{gameStatus}</span>
      </div>
      <div>Score: {score}</div>
    </div>
  );
};

export default GameStatus;
