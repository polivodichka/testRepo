import { useEffect } from "react";

import Bee from "../../components/Bee/Bee";
import Board from "../../components/Board/Board";
import Description from "../../components/Description/Description";
import GameStatus from "../../components/GameStatus/GameStatus";
import LevelControl from "../../components/LevelControl/LevelControl";
import { useAppDispatch } from "../../hooks/hooks";
import { updateGameRadius } from "../../store/slice";
import { GamePageStyled, RawStyyled } from "./GamePage.styled";

const GamePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const urlRadius = +global.location.pathname.replace(/\D/g, "");
    dispatch(updateGameRadius(urlRadius ? urlRadius : 2));
  }, [dispatch]);
  return (
    <GamePageStyled>
      <RawStyyled>
        <Bee />
        <GameStatus />
      </RawStyyled>
      <Board />
      <RawStyyled>
        <LevelControl />
        <Description message={"Help this little bee to clean the honeycomb"} />
      </RawStyyled>
    </GamePageStyled>
  );
};

export default GamePage;
