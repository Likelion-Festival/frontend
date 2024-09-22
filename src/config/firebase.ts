// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCsaEGfyud-gjlciNDENg7-AYiOHVqD1K4",
  authDomain: "hyuerica-festival.firebaseapp.com",
  projectId: "hyuerica-festival",
  storageBucket: "hyuerica-festival.appspot.com",
  messagingSenderId: "1002570362513",
  appId: "1:1002570362513:web:e7f3a2c8637daa8a155930",
  measurementId: "G-WPMJ8GMEFG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

//BM6XFr2cF5KkYF_VKakKB2F7ut_mFNT5uOIXXxxQIyS0pK3FjFOjBhBzfJzoYp-A1aEsYUQ4v5jWW7C1_bJJhhw
