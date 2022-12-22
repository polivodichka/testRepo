import { useEffect } from "react";
import { radius } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCoordinates } from "../../utils/getCoordinates";
import Billet from "../Cell/Cell";

const Board = () => {
  const coordinates = useAppSelector((state) => state.board.coordinates);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoordinates({ n: radius }));
  }, []);

  return (
    <div>
      {coordinates.map((coordinate) => (
        <Billet
          {...coordinate}
          key={`${coordinate.x}${coordinate.y}${coordinate.z}`}
        />
      ))}
      <button
        onClick={() => {
          dispatch(getCoordinates({ n: 3, oldCoordinates: coordinates}));
        }}
      >press</button>
    </div>
  );
};

export default Board;
