importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCsaEGfyud-gjlciNDENg7-AYiOHVqD1K4",
  authDomain: "hyuerica-festival.firebaseapp.com",
  projectId: "hyuerica-festival",
  storageBucket: "hyuerica-festival.appspot.com",
  messagingSenderId: "1002570362513",
  appId: "1:1002570362513:web:e7f3a2c8637daa8a155930",
  measurementId: "G-WPMJ8GMEFG",
};

const app = firebase.initializeApp(firebaseConfig);

self.addEventListener("push", function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
