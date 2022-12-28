import styled from "styled-components";
import { sqrt3, stroke } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const CellStyled = styled.div.attrs(
  (props: { x: number; y: number; z: number; size: number }) => props
)`
  display: flex;
  height: calc(${(props) => props.size * sqrt3}px);
  width: calc(${(props) => props.size * 2}px);
  background: ${EColors.BORDER};
  -webkit-clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0% 50%
  );
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  position: absolute;
  top: calc(
    50% - (${(props) => props.size * sqrt3}px) / 2 *
      (1 + ${(props) => props.x + 2 * props.y}) +
      ${(props) => stroke * props.y + (stroke / sqrt3) * props.x}px
  );
  right: calc(
    50% - (${(props) => props.size * 2}px) / 2 - ${(props) => props.x} *
      (${(props) => props.size * 2}px) / 1.325 -
      ${(props) => stroke * (props.y + props.z)}px
  );
  .inner {
    font-size: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(${(props) => props.size * sqrt3 - stroke * 2}px);
    width: calc(${(props) => props.size * 2 - stroke * 2}px);
    -webkit-clip-path: polygon(
      25% 0%,
      75% 0%,
      100% 50%,
      75% 100%,
      25% 100%,
      0% 50%
    );
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background: ${EColors.BG};
    background-size: cover;
    margin: auto;
  }
`;
