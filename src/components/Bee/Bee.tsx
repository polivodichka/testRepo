import { EGameStatus } from "../../constants/EGameStatus";
import { useAppSelector } from "../../hooks/hooks";
import { BeeStyled } from "./Bee.styled";

const Bee = () => {
  const gameStatus = useAppSelector((state) => state.board.gameStatus);
  return (
    <BeeStyled className={gameStatus === EGameStatus.GameOver ? "moveOut" : ""}>
      <div className="bee">
        <div className="antennae"></div>
        <div className="wing one"></div>
        <div className="wing two"></div>
      </div>
      <div className="shadow"></div>
    </BeeStyled>
  );
};

export default Bee;
