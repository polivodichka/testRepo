import { useEffect } from "react";

import Bee from "../../components/Bee/Bee";
import Description from "../../components/Description/Description";
import LevelControl from "../../components/LevelControl/LevelControl";
import { useAppDispatch } from "../../hooks/hooks";
import { updateGameRadius } from "../../store/slice";

const ErrorPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateGameRadius(0));
  }, [dispatch]);
  return (
    <>
      <Bee />
      <LevelControl />
      <Description message="Oops! Page not found" />
    </>
  );
};

export default ErrorPage;
