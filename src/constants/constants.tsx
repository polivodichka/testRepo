export const sqrt3 = Math.sqrt(3);
export const stroke = 5;
const radiusFromUrl = +global.location.pathname.replace(/\D/g, "");
export const radius2 = radiusFromUrl ? radiusFromUrl : 2;
export const size2 =
  (document.documentElement.clientHeight * 0.35) / (2 * radius2 - 1);
export const windowWidth = document.documentElement.clientWidth;
export const animationDuration = 0.13;
export const beeScale = 0.5;
