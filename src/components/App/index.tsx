import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { EGameStatus } from "../../constants/EGameStatus";
import { useAppSelector } from "../../hooks/hooks";
import { store } from "../../store/store";
import Board from "../Board/Board";
import Description from "../Description/Description";
import GameStatus from "../GameStatus/GameStatus";
import ModalWindow from "../ModalWindow/ModalWindow";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/:radius"
          element={
            <>
              <ModalWindow />
              <GameStatus />
              <Board />
              <Description />
            </>
          }
        />
        <Route path="/" element={<ModalWindow />} />
      </Routes>
    </Provider>
  );
};

export default App;
