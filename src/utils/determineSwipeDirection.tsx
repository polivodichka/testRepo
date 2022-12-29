import { EDirection } from "../constants/EDirection";

export const determineSwipeDirection = (
  start: [number, number],
  end: [number, number]
) => {
  const [x1, y1] = start;
  const [x2, y2] = end;
  const angle = (Math.atan((y2 - y1) / (x2 - x1)) * 180) / Math.PI;
  if (angle >= -59 && angle <= -2) {
    return y1 > y2 ? EDirection.topRight : EDirection.bottomLeft;
  } else if (angle >= 1 && angle <= 59) {
    return y1 > y2 ? EDirection.topLeft : EDirection.bottomRight;
  } else if (Math.abs(angle) >= 60 && Math.abs(angle) <= 90) {
    return y1 > y2 ? EDirection.top : EDirection.bottom;
  }
  return "";
};
