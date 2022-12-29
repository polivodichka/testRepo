import { prop } from "ramda";
import styled from "styled-components";

import { sqrt3, stroke } from "../../constants/constants";

export const BoardStyled = styled.div.attrs(
  (props: { size: number; radius: number }) => props
)`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  clear: both;
`;
