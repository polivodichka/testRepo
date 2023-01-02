import { EDirection } from "../constants/EDirection";
import { AppDispatch } from "../store/store";
import { transform } from "./transform";

export const makeMove = (
  code: string,
  keyboardIsAble: boolean,
  dispatch: AppDispatch
) => {
  switch (code) {
    case "KeyW":
    case EDirection.top:
      keyboardIsAble && transform(EDirection.top, dispatch);
      break;
    case "KeyE":
    case EDirection.topRight:
      keyboardIsAble && transform(EDirection.topRight, dispatch);
      break;
    case "KeyQ":
    case EDirection.topLeft:
      keyboardIsAble && transform(EDirection.topLeft, dispatch);
      break;
    case "KeyS":
    case EDirection.bottom:
      keyboardIsAble && transform(EDirection.bottom, dispatch);
      break;
    case "KeyD":
    case EDirection.bottomRight:
      keyboardIsAble && transform(EDirection.bottomRight, dispatch);
      break;
    case "KeyA":
    case EDirection.bottomLeft:
      keyboardIsAble && transform(EDirection.bottomLeft, dispatch);
      break;
  }
};
