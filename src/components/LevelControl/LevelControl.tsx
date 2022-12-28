import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetTileSize, updateGameRadius } from "../../store/slice";
import { LevelButton } from "./LevelControl.styled";

const LevelControl = () => {
  const range = useAppSelector((state) => state.board.gameRadius);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetTileSize());
    dispatch(updateGameRadius(2));
  };
  return (
    <>
      <Link to={"/2"}>
        <LevelButton
          levelColor={"red"}
          title={"2"}
          state={false}
          onClick={handleClick}
        >
          2
        </LevelButton>
      </Link>
      <Link to={"/3"}>
        <LevelButton
          levelColor={"red"}
          title={"3"}
          state={true}
          onClick={handleClick}
        >
          3
        </LevelButton>
      </Link>
    </>
  );
};

export default LevelControl;
