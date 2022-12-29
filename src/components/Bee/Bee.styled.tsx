import styled from "styled-components";

import { windowWidth } from "../../constants/constants";
import { EColors } from "../../constants/EColor";

export const BeeStyled = styled.div`
  transform: scale(0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.moveOut {
    transition: transform 2s ease-in;
    transform: scale(0.5) translateX(${windowWidth + 100}px);
  }
  &.winnerDance {
    animation: circle linear 1.5s normal;
  }
  .bee {
    display: inline-block;
    position: relative;
    width: 130px;
    height: 90px;
    z-index: 100;
    background-color: ${EColors.BeeStripe};
    border-radius: 100% 98% 98% 100%;
    box-shadow: inset 0px -10px 0px -2px rgba(0, 0, 0, 0.15),
      inset 32px 0px 0px -20px ${EColors.BeeStripe},
      inset 48px 0px 0px -20px ${EColors.BeeBody},
      inset 58px 0px 0px -20px ${EColors.BeeStripe},
      inset 88px 0px 0px -28px ${EColors.BeeBody};

    transform: rotate(2deg);
    animation: float 3s infinite;

    &:before,
    &:after {
      display: block;
      content: "";
      position: absolute;
    }
    &:before {
      right: 24px;
      bottom: 57%;
      width: 8px;
      height: 15px;
      border-radius: 100% 100% 88% 88%;
      background-color: #fff;
      box-shadow: 10px 0px 0px -2px #fff;
      animation: blink 7s infinite;
    }
    &:after {
      left: -7px;
      top: 50%;
      width: 20px;
      height: 10px;
      border-radius: 100% 100% 0 0%;
      border-top: 5px solid ${EColors.BeeStripe};
    }
    & .antennae {
      position: relative;
      & :before,
      & :after {
        display: block;
        content: "";
        position: absolute;
      }
      & :before {
        top: 4px;
        right: 2px;
        height: 32px;
        width: 18px;
        z-index: -1;
        border-left: 4px solid ${EColors.BeeStripe};
        border-radius: 100% 0 0 100%;
        transform: rotate(30deg);
        animation: antenna 5s infinite;
      }
      & :after {
        top: -4px;
        right: 20px;
        height: 32px;
        width: 6px;
        z-index: -1;
        border-left: 4px solid ${EColors.BeeStripe};
        border-radius: 100% 0 0 100%;
        transform: rotate(14deg);
        animation: antenna 10s infinite;
      }
    }
    & .wing {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 100% 100% 100% 100%;
    }
    & .wing.one {
      width: 34px;
      height: 52px;
      top: -44px;
      left: 27px;
      box-shadow: inset 6px 1px 0px -4px rgba(0, 0, 0, 0.3);
      transform-origin: 50% 100%;
      transform: rotate(-30deg);
      animation: wings 0.01s infinite;
    }
    & .wing.two {
      width: 32px;
      height: 44px;
      top: -48px;
      left: 32px;
      box-shadow: 3px 1px 0px -1px rgba(0, 0, 0, 0.4);
      transform-origin: 50% 100%;
      transform: rotate(50deg);
      animation: wingstwo 0.01s infinite;
    }
  }

  @keyframes float {
    0% {
      box-shadow: inset 0px -11px 0px -2px rgba(0, 0, 0, 0.2),
        inset 32px 0px 0px -20px ${EColors.BeeStripe},
        inset 48px 0px 0px -20px ${EColors.BeeBody},
        inset 58px 0px 0px -20px ${EColors.BeeStripe},
        inset 88px 0px 0px -28px ${EColors.BeeBody};
      transform: translate(0, 7px);
    }
    50% {
      box-shadow: inset 0px -10px 0px -2px rgba(0, 0, 0, 0.15),
        inset 32px 0px 0px -20px ${EColors.BeeStripe},
        inset 48px 0px 0px -20px ${EColors.BeeBody},
        inset 58px 0px 0px -20px ${EColors.BeeStripe},
        inset 88px 0px 0px -28px ${EColors.BeeBody};
      transform: translate(0, 0);
    }
    100% {
      box-shadow: inset 0px -11px 0px -2px rgba(0, 0, 0, 0.2),
        inset 32px 0px 0px -20px ${EColors.BeeStripe},
        inset 48px 0px 0px -20px ${EColors.BeeBody},
        inset 58px 0px 0px -20px ${EColors.BeeStripe},
        inset 88px 0px 0px -28px ${EColors.BeeBody};
      transform: translate(0, 7px);
    }
  }
  @keyframes antenna {
    0% {
      transform: rotate(0);
    }
    30% {
      transform: rotate(-8deg);
    }
    79% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(10deg);
    }
    81% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes blink {
    0% {
      height: 14px;
    }
    30% {
      height: 14px;
    }
    31% {
      height: 1px;
    }
    32% {
      height: 14px;
    }
    88% {
      height: 14px;
    }
    89% {
      height: 1px;
    }
    90% {
      height: 14px;
    }
    100% {
      height: 14px;
    }
  }
  @keyframes wings {
    0% {
      transform: rotate(-36deg);
    }
    50% {
      transform: rotate(-40deg);
    }
    100% {
      transform: rotate(-36deg);
    }
  }
  @keyframes wingstwo {
    0% {
      transform: rotate(50deg);
    }
    50% {
      transform: rotate(54deg);
    }
    100% {
      transform: rotate(50deg);
    }
  }
  @keyframes circle {
    0% {
      transform: scale(0.5) rotate(0deg) translateX(0);
    }
    50% {
      transform: scale(0.5) rotate(180deg) translateY(-150px);
    }
    100% {
      transform: scale(0.5) rotate(360deg) translateX(0);
    }
  }
`;
