import styled from "styled-components";
import { EColors } from "../../constants/EColor";
import { TileStyled } from "../Tile/Tile.styled";

export const RestartBtnStyled = styled(TileStyled)`
  background-color: ${EColors.BeeBody};
  font-size: calc(${(props) => props.size}px);
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  display: none;
  &.show {
    display: flex;
    animation: showBtn ease-in-out 1.5s normal;
    animation-fill-mode: forwards;
  }
  &:hover {
    background-color: ${EColors.BORDER};
  }
  @keyframes showBtn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    40% {
      transform: scale(1.02);
    }
    50%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
