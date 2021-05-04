import db from "../config/firebase";
import firebase from "firebase";
import {
  ColorPageNo,
  ColorTestHistory,
  ColorTestStep,
  SpeedPageNo,
  SpeedTestHistory,
  UserInfo,
} from "../constants/types";
import { getColorTestCookie, getSpeedTestCookie } from "../utils/cookie";
import CustomPath from "../constants/path";

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

export const getAllDocs = async () => {
  const histories = await db.collection("History").get();
  const docs = histories.docs.map((doc) => {
    const data = doc.data() as History;
    return { id: doc.id, data: data };
  });
  return docs;
};
