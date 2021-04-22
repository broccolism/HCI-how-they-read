import { Cookies } from "react-cookie";
import {
  ColorPageNo,
  ColorTestResultType,
  SpeedPageNo,
} from "../constants/types";

const cookie = new Cookies();

export const setColorTestCookie = (
  result: Record<ColorPageNo, ColorTestResultType>
) => {
  cookie.set("color", result);
};

export const getColorTestCookie = () => {
  return cookie.get("color");
};

export const setColorTestFeelingCookie = (result: string) => {
  cookie.set("color-feeling", result);
};

export const getColorTestFeelingCookie = () => {
  return cookie.get("color-feeling");
};

export const setSpeedTestCookie = (result: Record<SpeedPageNo, string>) => {
  cookie.set("speed", result);
};

export const getSpeedTestCookie = () => {
  return cookie.get("speed");
};
