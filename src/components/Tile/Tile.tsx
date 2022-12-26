import { IBillet } from "../../models/IBillet";
import { TileStyled } from "./Tile.styled";

const Cell = ({ x, y, z, value }: IBillet) => {
  return (
    <TileStyled
      id={`tile${x}${y}${z}`}
      x={x}
      y={y}
      z={z}
      value-data={value ?? 0}
      className={`tile${value}`}
    >
      {value}
    </TileStyled>
  );
};

export default Cell;
