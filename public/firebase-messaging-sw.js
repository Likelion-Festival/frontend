const showNotification = (notificationTitle, notificationOptions) => {
  self.registration.showNotification(notificationTitle, notificationOptions);
};

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
  };
  showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("push", function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
      body: resultData.body,
  };

  console.log(resultData.title, {
      body: resultData.body,
  });

  e.waitUntil(
      showNotification(notificationTitle, notificationOptions) // 함수 호출로 통합
  );
});

self.addEventListener("notificationclick", function (event) {
  const url = "/performance";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});