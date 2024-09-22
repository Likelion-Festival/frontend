import styles from "@styles/performance/Performance.module.css";
import timeTable from "@assets/performance/time-table.svg";
import arrow from "@assets/performance/arrow.svg";
import { useNavigate } from "react-router-dom";
import { Slide } from "@components/artist-slide/Slide";
import { performances } from "@constant/performance";
import { registerServiceWorker } from "@utils/notification";
import { useEffect, useState } from "react";
import { AppCheckTokenResult } from "firebase/app-check";
import { getToken } from "firebase/messaging";
import { messaging } from "../../config/firebase";
//import axios from "axios";

export const PerformancePage = () => {
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });

  useEffect(() => {
    handleAllowNotification();
  }, []);

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("알림 허용");
      registerServiceWorker();
      await handleGetToken();
      //subscribeTopic("day6", deviceToken.token);
    } else {
      console.log("알림 거부");
    }
  }

  async function handleGetToken() {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_VAPID_KEY,
    });
    setDeviceToken({
      token: token,
    });
    console.log("FCM Token:", token);
    return token; // 반환하여 호출한 곳에서 사용할 수 있도록 함
  }
/*
  async function subscribeTopic(topic: string, token: string) {
    const url = `https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`;
    
    try {
      const response = await axios.post(url, {}, {
        headers: {
          'Authorization': 'key=BOnmP_PngZ4dayZ4c6GBc4kBCFWavyonb6rCGTUo_Sd-ZzliT4f4AZeyk_wU0j10NjBQfb01IYRZrhPozWTlFX8', // Firebase 서버 키
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      console.log(`Subscribed to topic: ${topic}`);
    } catch (error) {
      console.error("Error subscribing to topic:", error);
    }
  }  */

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Today</span>
          <img src={timeTable} alt="" onClick={() => navigate("timetable")} />
        </div>
        <Slide items={performances} onlyToday={true} />
        <div className={styles.guide}>
          <span>공연 관람 Guide 보러가기</span>
          <div onClick={() => navigate("guide")}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.horizon}></div>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Soon</span>
        </div>
        <Slide items={performances} onlyToday={false} />
      </div>
    </div>
  );
};
