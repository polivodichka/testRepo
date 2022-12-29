import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import GamePage from "../../pages/GamePage/GamePage";

const App = () => {
  const radius = useAppSelector((state) => state.board.gameRadius);
  return (
    <>
      <Routes>
        <Route
          path="/:radius"
          element={radius >= 2 && radius <= 5 ? <GamePage /> : <ErrorPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<GamePage />} />
      </Routes>
    </>
  );
};

export default App;
