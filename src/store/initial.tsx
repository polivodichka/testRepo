import { EGameStatus } from "../constants/EGameStatus";
import { IBillet } from "../models/IBillet";

const initial: {
  coordinates: IBillet[];
  tiles: IBillet[];
  keyboard: Boolean;
  needNewTiles: Boolean;
  gameStatus: EGameStatus;
  score: number;
  stepsNumber: number;
  gameRadius: number;
} = {
  coordinates: [],
  tiles: [],
  keyboard: true,
  needNewTiles: false,
  gameStatus: EGameStatus.Playing,
  score: 0,
  stepsNumber: 0,
  gameRadius: 2,
};
export default initial;
