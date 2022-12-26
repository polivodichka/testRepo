import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Board from "../Board/Board";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Board />
      </div>
    </Provider>
  );
};
