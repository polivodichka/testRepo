import { useEffect } from "react";
import { EDirection } from "../../constants/EDirection";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetTileSize, updateGameRadius } from "../../store/slice";
import { getCoordinates } from "../../utils/getCoordinates";
import { transform } from "../../utils/transform";
import Cell from "../Cell/Cell";
import Tile from "../Tile/Tile";
import { BoardStyled } from "./Board.styled";

const Board = () => {
  const { coordinates, tiles, keyboardIsAble, gameRadius, tileSize } =
    useAppSelector((state) => {
      return {
        coordinates: state.board.coordinates,
        tiles: state.board.tiles,
        keyboardIsAble: state.board.keyboard,
        gameRadius: state.board.gameRadius,
        tileSize: state.board.tileSize,
      };
    });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoordinates({ radius: gameRadius, initial: true }));
    const urlRadius = +global.location.pathname.replace(/\D/g, "");
    dispatch(updateGameRadius(urlRadius ? urlRadius : 2));
  }, [dispatch, gameRadius]);

  useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => {
      const { code } = e;
      switch (code) {
        case "KeyW":
          keyboardIsAble && transform(EDirection.top, dispatch);
          break;
        case "KeyE":
          keyboardIsAble && transform(EDirection.topRight, dispatch);
          break;
        case "KeyQ":
          keyboardIsAble && transform(EDirection.topLeft, dispatch);
          break;
        case "KeyS":
          keyboardIsAble && transform(EDirection.bottom, dispatch);
          break;
        case "KeyD":
          keyboardIsAble && transform(EDirection.bottomRight, dispatch);
          break;
        case "KeyA":
          keyboardIsAble && transform(EDirection.bottomLeft, dispatch);
          break;
      }
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, [dispatch, keyboardIsAble]);

  return (
    <BoardStyled className="board" size={tileSize} radius={gameRadius}>
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
