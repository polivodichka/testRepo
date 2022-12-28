import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { store } from "../../store/store";
import Board from "../Board/Board";
import Description from "../Description/Description";
import GameStatus from "../GameStatus/GameStatus";
import LevelControl from "../LevelControl/LevelControl";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/:radius"
          element={
            +global.location.pathname.replace(/\D/g, "") <= 5 &&
            +global.location.pathname.replace(/\D/g, "") >= 2 ? (
              <>
                <GameStatus />
                <Board />
                <Description />
                <LevelControl />
              </>
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/"
          element={
            <>
              <GameStatus />
              <Board />
              <Description />
              <LevelControl />
            </>
          }
        />
      </Routes>
    </Provider>
  );
};

export default App;
