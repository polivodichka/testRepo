import { useAppSelector } from "../../hooks/hooks";
import Bee from "../Bee/Bee";
import { GameStatusStyled } from "./GameStatus.styles";

const GameStatus = () => {
  const { gameStatus, score } = useAppSelector((state) => {
    return {
      gameStatus: state.board.gameStatus,
      score: state.board.score,
    };
  });
  return (
    <GameStatusStyled>
      <Bee />
      <div>
        Game Status: <span data-status={gameStatus}>{gameStatus}</span>
      </div>
      <div>Score: {score}</div>
    </GameStatusStyled>
  );
};

export default GameStatus;
