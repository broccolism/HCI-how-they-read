import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcm2DKCwVerP39snN0QehZF_nLmEivbiI",
  authDomain: "hci-proj-1.firebaseapp.com",
  projectId: "hci-proj-1",
  storageBucket: "hci-proj-1.appspot.com",
  messagingSenderId: "708406537138",
  appId: "1:708406537138:web:8a2face5dd277d0a0052ab",
  measurementId: "G-FH54M98ZKS",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

export default db;
