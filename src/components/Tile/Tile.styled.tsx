import styled from "styled-components";
import { animationDuration, sqrt3, stroke } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const TileStyled = styled.div.attrs(
  (props: { x: number; y: number; z: number; size: number }) => props
)`
  display: flex;
  color: ${EColors.BeeStripe};
  justify-content: center;
  align-items: center;
  font-size: calc(${(props) => props.size / 2.3}px);
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
  position: absolute;
  top: calc(
    50% - (${(props) => props.size * sqrt3}px) / 2 *
      (1 + ${(props) => props.x + 2 * props.y}) +
      ${(props) => stroke * props.y + (stroke / sqrt3) * props.x}px +
      ${stroke}px
  );
  right: calc(
    50% - (${(props) => props.size * 2}px) / 2 - ${(props) => props.x} *
      (${(props) => props.size * 2}px) / 1.325 -
      ${(props) => stroke * (props.y + props.z)}px + ${stroke}px
  );

  transition-property: top left right bottom;
  transition: all ${animationDuration}s ease-in-out;

  &.tile2 {
    background: ${EColors.C2};
  }
  &.tile4 {
    background: ${EColors.C4};
  }
  &.tile8 {
    background: ${EColors.C8};
  }
  &.tile16 {
    background: ${EColors.C16};
  }
  &.tile32 {
    background: ${EColors.C32};
  }
  &.tile64 {
    background: ${EColors.C64};
  }
  &.tile128 {
    background: ${EColors.C128};
  }
  &.tile256 {
    background: ${EColors.C256};
  }
  &.tile512 {
    background: ${EColors.C512};
  }
  &.tile1024 {
    background: ${EColors.C1024};
  }
  &.tile2048 {
    background: ${EColors.C2048};
  }
`;
