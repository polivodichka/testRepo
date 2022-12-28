import styled from "styled-components";
import { stroke } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: ${EColors.ModalBG};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalStyled = styled.div`
  background-color: ${EColors.BG};
  max-width: 360px;
  padding: 45px;
  border: ${stroke}px solid ${EColors.BeeBody};
  color: ${EColors.BeeStripe};
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    button {
      text-transform: uppercase;
      outline: 0;
      background: ${EColors.BeeBody};
      width: 100%;
      border: 0;
      padding: 15px;
      color: ${EColors.BeeStripe};
      font-size: 14px;
      transition: all 0.3 ease;
      cursor: pointer;
    }
    button:hover,
    button:active,
    button:focus {
      background-color: ${EColors.ButtonHover};
    }

    .formRaw {
      display: flex;
      flex-direction: column;
      position: relative;
      input {
        outline: 0;
        background: ${EColors.ModalBG};
        width: 100%;
        border: 0;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
      }
      .error {
        color: ${EColors.C256};
      }
      .radiusLabel {
        padding: 0 15px 5px;
      }
    }
  }
`;
export const Range = styled.input.attrs((props: { content: string }) => props)`
  display: block;
  -webkit-appearance: none;
  background-color: ${EColors.BORDER};
  max-height: 2px;
  border-radius: 5px;
  margin: 0 auto;
  outline: 0;
  &::-webkit-slider-thumb {
    &::before {
      content: "hjhjj";
    }
    -webkit-appearance: none;
    background-color: ${EColors.BeeBody};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  &::-webkit-slider-thumb:hover {
    background-color: ${EColors.ButtonHover};
    border: 2px solid ${EColors.ButtonHover};
  }
  &::-webkit-slider-thumb:active {
    transform: scale(1.6);
  }
`;
