import styled from "styled-components";

import { stroke } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const LevelWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
`;
export const LevelButton = styled.button.attrs(
  (props: { title: string; state: boolean }) => props
)`
  height: 52px;
  width: 52px;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => (props.state ? EColors.BG : "transparent")};
  color: ${EColors.BeeStripe};
  border: ${stroke / 2}px solid ${EColors.BORDER};
  font-weight: 500;
  font-size: 24px;
  font-family: SquareMeal, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  cursor: pointer;
  &:before {
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.state ? "transparent" : EColors.BeeBody};
  }
`;
