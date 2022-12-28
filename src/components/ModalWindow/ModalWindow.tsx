import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ModalStyled, Range, Wrapper } from "./ModalWindow.styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { disableKeyboard, enableKeyboard } from "../../store/slice";
import { EGameStatus } from "../../constants/EGameStatus";
interface IFormInput {
  radius: number;
}
const ModalWindow = () => {
  const dispatch = useAppDispatch();
  const [rangeVal, SetRangeVal] = useState(2);
  useEffect(() => {
    dispatch(disableKeyboard());
  }, []);
  const gameStatus = useAppSelector((state) => state.board.gameStatus);
  if (gameStatus === EGameStatus.GameOver)
    return (
      <Wrapper>
        <ModalStyled>
          <form>
            <div className="radiusLabel">Radius: {rangeVal}</div>
            <Range
              type="range"
              id="radius"
              min={2}
              max={6}
              value={rangeVal}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                SetRangeVal(+e.target.value);
              }}
            />
            <Link to={`/${rangeVal}`}>
              <button type="submit" onClick={() => dispatch(enableKeyboard())}>
                Start
              </button>
            </Link>
          </form>
        </ModalStyled>
      </Wrapper>
    );
  else return <></>;
};

export default ModalWindow;
