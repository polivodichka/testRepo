import { EGameStatus } from "../constants/EGameStatus";
import { IBillet } from "../models/IBillet";

const initial: {
  coordinates: IBillet[];
  tiles: IBillet[];
  keyboard: Boolean;
  needNewTiles: Boolean;
  gameStatus: EGameStatus;
} = {
  coordinates: [],
  tiles: [],
  keyboard: true,
  needNewTiles: true,
  gameStatus: EGameStatus.Playing,
};
export default initial;
