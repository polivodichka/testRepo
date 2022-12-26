import { radius } from "../constants/constants";
import { IBillet } from "../models/IBillet";
import { store } from "../store/store";

//top-bottom
export const getXY = (coordinates: IBillet[]) => {
  const xy = [];
  for (let i = -radius + 1; i < radius; i++) {
    const row = coordinates.filter(
      (el) => el.value && el.value > 0 && el.x === i
    );
    !!row.length && xy.push(row);
  }
  return xy;
};

//topLeft-bottomRight
export const getZX = (coordinates: IBillet[]) => {
  const zx = [];
  for (let i = -radius + 1; i < radius; i++) {
    const row = coordinates.filter(
      (el) => el.value && el.value > 0 && el.z === i
    );
    !!row.length && zx.push(row);
  }
  return zx;
};

//topRight-bottomLeft
export const getYZ = (coordinates: IBillet[]) => {
  const yz = [];
  for (let i = -radius + 1; i < radius; i++) {
    const row = coordinates.filter(
      (el) => el.value && el.value > 0 && el.y === i
    );
    !!row.length && yz.push(row);
  }
  return yz;
};
