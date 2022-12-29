import styled from "styled-components";
import { stroke } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const GameOverBtnStyled = styled.button`
  height: 52px;
  padding: 0 15px;
  border-radius: 4px;
  position: relative;
  background-color: ${EColors.BG};
  color: ${EColors.BeeStripe};
  border: ${stroke / 2}px solid ${EColors.BORDER};
  font-weight: 500;
  font-size: 24px;
  font-family: SquareMeal, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  cursor: pointer;
  position: absolute;
  top: 60px;
  transform: scale(0);
  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out 0s;
  &:hover {
    background-color: transparent;
  }
  &.show {
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out 2s;
    transform: scale(1);
  }
`;
