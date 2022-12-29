import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetBoard, updateGameRadius } from "../../store/slice";
import { LevelButton, LevelWrapper } from "./LevelControl.styled";

const LevelControl = () => {
  const currentLevel = useAppSelector((state) => state.board.gameRadius);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(resetBoard());
    dispatch(updateGameRadius(+(e.target as HTMLButtonElement).title));
  };
  const buttons = [
    { value: 2, active: currentLevel === 2 },
    { value: 3, active: currentLevel === 3 },
    { value: 4, active: currentLevel === 4 },
    { value: 5, active: currentLevel === 5 },
  ];
  return (
    <LevelWrapper>
      {buttons.map((button) => (
        <Link to={`/${button.value}`} key={button.value}>
          <LevelButton
            title={`${button.value}`}
            state={!button.active}
            onClick={handleClick}
          >
            {button.value}
          </LevelButton>
        </Link>
      ))}
    </LevelWrapper>
  );
};

export default LevelControl;
