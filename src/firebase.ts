import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOwvM4kzBTT7ILgjXVZjlG9Kf5m8lW0T0",
  authDomain: "simulate-print.firebaseapp.com",
  projectId: "simulate-print",
  storageBucket: "simulate-print.appspot.com",
  messagingSenderId: "740560913922",
  appId: "1:740560913922:web:81467583c699684485891b",
  measurementId: "G-770XG551FX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
