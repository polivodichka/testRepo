import { useEffect } from "react";
import { EGameStatus } from "../../constants/EGameStatus";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setGameStatus } from "../../store/slice";
import { getCoordinates } from "../../utils/getCoordinates";
import { makeMove } from "../../utils/makeMove";
import Cell from "../Cell/Cell";
import Tile from "../Tile/Tile";
import { BoardStyled } from "./Board.styled";

const Board = () => {
  const {
    coordinates,
    tiles,
    keyboardIsAble,
    gameRadius,
    tileSize,
    restartGameFlag,
  } = useAppSelector((state) => {
    return {
      coordinates: state.board.coordinates,
      tiles: state.board.tiles,
      keyboardIsAble: state.board.keyboard,
      gameRadius: state.board.gameRadius,
      tileSize: state.board.tileSize,
      restartGameFlag: state.board.restartFlag,
    };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGameStatus(EGameStatus.Playing));
    dispatch(getCoordinates({ radius: gameRadius, initial: true }));
  }, [dispatch, gameRadius, restartGameFlag]);

  useEffect(() => {
    const onKeypress = (e: KeyboardEvent) => {
      const { code } = e;
      makeMove(code, keyboardIsAble, dispatch);
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
