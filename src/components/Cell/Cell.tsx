import { useAppSelector } from "../../hooks/hooks";
import { IBillet } from "../../models/IBillet";
import { CellStyled } from "./Cell.styled";

const Cell = ({ x, y, z, value }: IBillet) => {
  const size = useAppSelector((state) => state.board.tileSize);
  return (
    <CellStyled
      {...{ x, y, z, size }}
      id={`cell${x}${y}${z}`}
      data-x={x}
      data-y={y}
      data-z={z}
      data-value={value ?? 0}
    >
      <div className="inner"></div>
    </CellStyled>
  );
};

export default Cell;
