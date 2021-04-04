import { Cookies } from "react-cookie";
import { ColorPageNo, ColorTestStep, SpeedPageNo } from "../constants/types";

const cookie = new Cookies();

export const setColorTestCookie = (
  result: Record<ColorPageNo, ColorTestStep>
) => {
  cookie.set("color", result);
};

export const setColorTestCountCookie = (
  result: Record<ColorPageNo, string>
) => {
  cookie.set("color-count", result);
};

export const getColorTestCookie = () => {
  return cookie.get("color");
};

export const getColorTestCountCookie = () => {
  return cookie.get("color-count");
};

export const setSpeedTestCookie = (result: Record<SpeedPageNo, string>) => {
  cookie.set("speed", result);
};

export const getSpeedTestCookie = () => {
  return cookie.get("speed");
};
