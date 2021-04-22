import db from "../config/firebase";
import firebase from "firebase";
import { ColorPageNo, ColorTestStep, SpeedPageNo } from "../constants/types";
import { getColorTestCookie, getSpeedTestCookie } from "../utils/cookie";
import CustomPath from "../constants/path";

type ColorTestHistory = Record<ColorPageNo, ColorTestStep>;
type SpeedTestHistory = Record<SpeedPageNo, string>;

export type UserInfo = {
  age: string;
  gender: string;
  answers: {
    darkVsLight: string;
    usingDarkmode: string;
    readingTime: string;
  };
  more_bad: string;
};

type History = {
  user: UserInfo;
  color: ColorTestHistory;
  speed: SpeedTestHistory;
  created_at: firebase.firestore.Timestamp;
};

export const createUserHistory = (user: UserInfo) => {
  const colorHistory: ColorTestHistory = getColorTestCookie();
  const speedHistory: SpeedTestHistory = getSpeedTestCookie();
  const curTime = Date.now();
  const newHistory: History = {
    user: user,
    color: colorHistory,
    speed: speedHistory,
    created_at: firebase.firestore.Timestamp.fromMillis(curTime),
  };

  db.collection("History")
    .add(newHistory)
    .then((docRef) => {
      window.location.assign(CustomPath.RESULT);
    })
    .catch((err) => {
      console.log("@@@@ firebase add err:", err);
    });
};
