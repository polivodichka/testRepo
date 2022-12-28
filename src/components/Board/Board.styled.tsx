import styled from "styled-components";

export const BoardStyled = styled.div.attrs(
  (props: { size: number; radius: number }) => props
)`
  position: relative;
  box-sizing: border-box;
  height: ${(props) => props.size * 2 * (props.radius * 2 - 1.25)}px;

  clear: both;
`;
