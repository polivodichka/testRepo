import { useAppSelector } from "../../hooks/hooks";
import { IBillet } from "../../models/IBillet";
import { TileStyled } from "./Tile.styled";

const Cell = ({ x, y, z, value }: IBillet) => {
  const size = useAppSelector((state) => state.board.tileSize);
  return (
    <TileStyled
      id={`tile${x}${y}${z}`}
      {...{ x, y, z, size }}
      value-data={value ?? 0}
      className={`tile${value}`}
    >
      {value}
    </TileStyled>
  );
};

export default Cell;
