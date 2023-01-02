import { EGameStatus } from "../../constants/EGameStatus";
import { useAppSelector } from "../../hooks/hooks";
import { IBillet } from "../../models/IBillet";
import { TileStyled } from "./Tile.styled";

const Cell = ({ x, y, z, value }: IBillet) => {
  const { size, gameStatus } = useAppSelector((state) => {
    return {
      size: state.board.tileSize,
      gameStatus: state.board.gameStatus,
    };
  });
  return (
    <TileStyled
      id={`tile${x}${y}${z}`}
      {...{ x, y, z, size }}
      value-data={value ?? 0}
      className={`tile${value} ${gameStatus === EGameStatus.Win && "hide"}`}
    >
      {value}
    </TileStyled>
  );
};

export default Cell;
