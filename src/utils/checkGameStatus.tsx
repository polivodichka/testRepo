import { IBillet } from "../models/IBillet";
import { getXY, getYZ, getZX } from "./getTable";

export const checkGameStatus = (coordinates: IBillet[], radius: number) => {
  const xy = getXY(radius)(coordinates);
  const yz = getYZ(radius)(coordinates);
  const zx = getZX(radius)(coordinates);
  const cellsNum = coordinates.length;
  const freeCells = cellsNum > xy.flat().length;

  if (!freeCells) return checkTable(xy) || checkTable(yz) || checkTable(zx);
  else return true;
};
const checkTable = (table: IBillet[][]) => {
  for (let i = 0; i < table.length; i++) {
    const tileArray = table[i];
    for (let j = 1; j < tileArray.length; j++) {
      if (tileArray[j].value === tileArray[j - 1].value) {
        return true;
      }
    }
  }
  return false;
};
