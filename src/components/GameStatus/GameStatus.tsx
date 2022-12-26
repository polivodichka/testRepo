import { useAppSelector } from "../../hooks/hooks";

const GameStatus = () => {
  const gameStatus = useAppSelector((state) => state.board.gameStatus);
  return (
    <div>
      Game Status: <span data-status={gameStatus}>{gameStatus}</span>
    </div>
  );
};

export default GameStatus;
