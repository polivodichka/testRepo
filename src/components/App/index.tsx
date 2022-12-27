import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Board from "../Board/Board";
import Description from "../Description/Description";
import GameStatus from "../GameStatus/GameStatus";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <GameStatus />
        <Board />
        <Description />
      </div>
    </Provider>
  );
};
