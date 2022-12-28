import styled from "styled-components";
import { EColors } from "../../constants/EColor";

export const Range = styled.input``;
export const LevelButton = styled.button.attrs(
  (props: { levelColor: string; title: string; state: boolean }) => props
)`
  height: 52px;
  width: 52px;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => (props.state ? props.levelColor : "white")};
  color: ${(props) => (props.state ? "white" : "black")};
  font-weight: 500;
  font-size: 24px;
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
    background-color: ${(props) => props.levelColor};
  }
`;
