// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh0oWdIehHgb60iu4eX1yp8DANBFFCP7k",
  authDomain: "mino-daily.firebaseapp.com",
  projectId: "mino-daily",
  storageBucket: "mino-daily.appspot.com",
  messagingSenderId: "987301470149",
  appId: "1:987301470149:web:56997ccf98256ea94075ac",
  measurementId: "G-QQ8EX4RFYF",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
