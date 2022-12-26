import styled from "styled-components";
import { radius, size } from "../../constants/constants";

export const BoardStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  height: ${size * 2 * (radius * 2 - 1.25)}px;
  
  clear: both;
`;
