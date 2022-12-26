import { animationDuration, radius } from "../constants/constants";
import { EDirection } from "../constants/EDirection";
import { IBillet } from "../models/IBillet";
import {
  disableKeyboard,
  enableKeyboard,
  setNeedNewTiles,
} from "../store/slice";
import { AppDispatch, store } from "../store/store";
import { setCollapsePairs, collapse } from "./collapseTiles";
import { getCoordinates } from "./getCoordinates";
import { getXY, getZX, getYZ } from "./getTable";
import { shiftToEnd } from "./shiftTilesToEnd";
import { sortTable } from "./sortTable";

export const transform = (direction: EDirection, dispatch: AppDispatch) => {
  dispatch(disableKeyboard());
  let collapsePairs: IBillet[][] = [];
  let table2D: IBillet[][] = [];
  let getTable2D: (coordinates: IBillet[]) => IBillet[][];
  switch (direction) {
    case EDirection.top:
    case EDirection.bottom:
      getTable2D = getXY;
      break;
    case EDirection.topLeft:
    case EDirection.bottomRight:
      getTable2D = getZX;
      break;

    case EDirection.topRight:
    case EDirection.bottomLeft:
      getTable2D = getYZ;
      break;
  }

  table2D = getTable2D(store.getState().board.coordinates);
  sortTable(table2D, direction);
  collapsePairs = setCollapsePairs(table2D);
  !!collapsePairs.length && collapse(collapsePairs, dispatch, direction, true);

  setTimeout(() => {
    table2D = getTable2D(store.getState().board.coordinates);
    sortTable(table2D, direction);
    shiftToEnd(direction, table2D, dispatch);
    setTimeout(() => {
      store.getState().board.needNewTiles && dispatch(getCoordinates(radius));
      dispatch(setNeedNewTiles(false));
      dispatch(enableKeyboard());
    }, animationDuration * 1000 + 0.1);
  }, (animationDuration * 1000 + 0.1) * (!!collapsePairs.length ? 1 : 0));
};
