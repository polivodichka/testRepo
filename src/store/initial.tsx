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
  tileSize: number;
} = {
  coordinates: [],
  tiles: [],
  keyboard: true,
  needNewTiles: false,
  gameStatus: EGameStatus.Playing,
  score: 0,
  stepsNumber: 0,
  gameRadius: 2,
  tileSize: 0,
};
initial.tileSize =
  (document.documentElement.clientHeight * 0.35) / (2 * initial.gameRadius - 1);
export default initial;
