import { useEffect } from "react";
import { radius } from "../../constants/constants";
import { EDirection } from "../../constants/EDirection";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCoordinates } from "../../utils/getCoordinates";
import { transform } from "../../utils/transform";
import Cell from "../Cell/Cell";
import Tile from "../Tile/Tile";
import { BoardStyled } from "./Board.styled";

const Board = () => {
  const { coordinates, tiles, keyboardIsAble } = useAppSelector((state) => {
    return {
      coordinates: state.board.coordinates,
      tiles: state.board.tiles,
      keyboardIsAble: state.board.keyboard,
    };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoordinates(radius));
  }, [dispatch]);

  useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => {
      const { code } = e;
      switch (code) {
        case "KeyW":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.top, dispatch);
          break;
        case "KeyE":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.topRight, dispatch);
          break;
        case "KeyQ":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.topLeft, dispatch);
          break;
        case "KeyS":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.bottom, dispatch);
          break;
        case "KeyD":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.bottomRight, dispatch);
          break;
        case "KeyA":
          if (!keyboardIsAble)
            return () => {
              document.removeEventListener("keypress", onKeypress);
            };
          keyboardIsAble && transform(EDirection.bottomLeft, dispatch);
          break;
      }
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [keyboardIsAble]);

  return (
    <BoardStyled className="board">
      {coordinates.map((coordinate) => (
        <Cell
          {...coordinate}
          key={`${coordinate.x}${coordinate.y}${coordinate.z}`}
        />
      ))}
      {tiles.map((coordinate) => (
        <Tile
          {...coordinate}
          key={`tile${coordinate.x}${coordinate.y}${coordinate.z}`}
        />
      ))}
    </BoardStyled>
  );
};

export default Board;
