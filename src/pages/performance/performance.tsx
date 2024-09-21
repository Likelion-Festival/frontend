import styles from "@styles/performance/Performance.module.css";
import timeTable from "@assets/performance/time-table.svg";
import arrow from "@assets/performance/arrow.svg";
import { useNavigate } from "react-router-dom";
// artist-slide
import { Slide } from "@components/artist-slide/Slide";
import { performances } from "@constant/performance";
import { registerServiceWorker } from "@utils/notification";
import { useEffect, useState } from "react";
import { AppCheckTokenResult } from "firebase/app-check";
import { getToken } from "firebase/messaging";
import { messaging } from "../../config/firebase";

export const PerformancePage = () => {
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });

  useEffect(() => {
    handleAllowNotification();
    handleGetToken();
  }, [deviceToken]);

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("알림 허용");
      registerServiceWorker();
      getToken(messaging);
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
    console.log(token);
  }

  const navigate = useNavigate();
  return (
    <div style={{ padding: "0px 0px 50px 0px" }}>
      <div className={styles.column}>
        <div className={styles.header}>
          <span>Today</span>
          <img src={timeTable} alt="" onClick={() => navigate("timetable")} />
        </div>
        {
          //slide
          <Slide items={performances} onlyToday={true} />
        }
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
        {
          //slide
          <Slide items={performances} onlyToday={false} />
        }
      </div>
    </div>
  );
};
