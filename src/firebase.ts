import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAvcDW0yQYTP0TjvgdQ4TwC3FrElFkH0k",
  authDomain: "simulated-tone.firebaseapp.com",
  projectId: "simulated-tone",
  storageBucket: "simulated-tone.appspot.com",
  messagingSenderId: "1087897947234",
  appId: "1:1087897947234:web:677274d074c68ddcfe553b",
  measurementId: "G-CGT3QL5P38",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
