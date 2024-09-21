// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDQ15L-BBOcY-isIlzgwkvHLsR5UJj9vhc",
  authDomain: "festival-c3504.firebaseapp.com",
  projectId: "festival-c3504",
  storageBucket: "festival-c3504.appspot.com",
  messagingSenderId: "814718891332",
  appId: "1:814718891332:web:5309f3979a10268322d311",
  measurementId: "G-2BXEB399JW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

//BM6XFr2cF5KkYF_VKakKB2F7ut_mFNT5uOIXXxxQIyS0pK3FjFOjBhBzfJzoYp-A1aEsYUQ4v5jWW7C1_bJJhhw