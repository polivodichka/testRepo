import { EGameStatus } from "../../constants/EGameStatus";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetScore, restartGame } from "../../store/slice";
import { RestartBtnStyled } from "./RestartBtn.styled";

const RestartBtn = () => {
  const { size, gameStatus } = useAppSelector((state) => {
    return { size: state.board.tileSize, gameStatus: state.board.gameStatus };
  });
  const dispatch = useAppDispatch();
  return (
    <RestartBtnStyled
      {...{ x: 0, y: 0, z: 0, size }}
      className={`${gameStatus === EGameStatus.Win && "show"}`}
      onClick={() => {
        dispatch(resetScore());
        dispatch(restartGame());
      }}
    >
      ↻
    </RestartBtnStyled>
  );
};

export default RestartBtn;
