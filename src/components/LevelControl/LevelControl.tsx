import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { updateGameRadius } from "../../store/slice";
import { Range } from "./LevelControl.styled";

const LevelControl = () => {
  const range = useAppSelector((state) => state.board.gameRadius);
  const dispatch = useAppDispatch();
  return (
    <Range
      type="range"
      min={2}
      max={6}
      value={range}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(updateGameRadius(+e.target.value))
      }
    />
  );
};

export default LevelControl;
